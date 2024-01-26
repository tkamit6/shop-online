'use client'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Link from 'next/link'
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react"
import { useDispatch, useSelector } from 'react-redux';
import FormatedAmount from './FormatedAmount';
import { addUser, deleteUser } from '@/redux/shoppingSlice';
// import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { searchQueryFunc } from '@/helpers';
import { Autocomplete, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';


export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [serachResult, setSearcResult] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [totalAmt, setTotalAmt] = useState(0)
    const { data: session } = useSession()
    const { productData, orderData } = useSelector((state) => state.shopping)
    const dispatch = useDispatch();
    const dropDownMenu = ['Logout'];
    const [anchorElUser, setAnchorElUser] = useState(null)
    const router = useRouter();
    const imageUrl = session ? session?.user?.image : "https://i.pravatar.cc/150?u=a042581f4e29026704d";

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const handlerSearchQuery = async (e, value) => {
        setSearchQuery(e.target.value)

        const data = await searchQueryFunc(searchQuery);
        setSearcResult(data)
    }

    const handlerSearchSelected = (e, value) => {
        const selectedItem = serachResult.find((item) => {
            if (item?.title === value) {
                router.push(`/product?_id=${item?._id}`)
            }
        })
    }

    useEffect(() => {
        if (session) {
            dispatch(addUser({
                name: session?.user?.name,
                email: session?.user?.email,
                image: session?.user?.image
            }))
        } else {
            dispatch(deleteUser())
        }
    }, [session])

    useEffect(() => {
        let amt = 0;
        productData.map((item) => {
            amt = amt + item.price * item.quantity;
            return;
        })
        setTotalAmt(amt)
    }, [productData])

    return (
        <div className='bg-bodyColor h-20  top-0  sticky z-50'>
            <Container className={"h-full transition-all duration-500 flex items-center md:gap-x-5 justify-between md:justify-start"} >
                <Link href='/' className='text-3xl font-semibld hover:text-blue-500 transition-all'>E-Mart</Link>
                <div className='w-full md:flex-1 hidden items-center md:flex gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 focus-within:border-blue-500 bg-transparent group'>
                    <CiSearch className='text-gray-500 group-focus-within:text-gray-800 duration-200' />
                    <Autocomplete
                        disablePortal
                        className='bg-transparent border-none flex-1 outline-none'
                        id="combo-box-demo"
                        options={serachResult.map((item) => item?.title)}
                        sx={{ border: "none" }}
                        onChange={handlerSearchSelected}
                        renderInput={(params) => <TextField sx={{border: "none", borderWidth:0}} style={{borderWidth: 0}} onChange={handlerSearchQuery} className='!border-none' {...params} placeholder='Search Products' />}
                    />
                    {/* <input value={searchQuery} onChange={handlerSearchQuery} placeholder='Search Products' type='text' className='placeholder:text-sm bg-transparent flex-1 outline-none' /> */}
                </div>

                <div className='flex gap-x-2 items-center'>

                    {/* login */}
                    {
                        !session && <div onClick={() => signIn()} className='headerDiv gap-x-1 cursor-pointer'>
                            <AiOutlineUser className='text-xl' />
                            <p className='text-sm font-semibold'>Login/Register</p>
                        </div>
                    }
                    <Link href={`${totalAmt != 0 ? '/cart' : ''}`}>
                        <div className='bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-blue-600 duration-200 relative cursor-pointer'>
                            <MdOutlineShoppingCart className='text-xl' />
                            {
                                productData ?
                                    <FormatedAmount className={"text-sm font-semibold"} amount={totalAmt} /> : 0
                            }
                            <span className=' bg-white text-blue-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 p-1 flex items-center justify-center shadow-xl shadow-black'>{productData ? productData.length : 0}</span>
                        </div>
                    </Link>
                    {
                        session && <Dropdown placement="bottom-start">
                            <DropdownTrigger>
                                <User
                                    as="button"
                                    avatarProps={{
                                        isBordered: true,
                                        src: imageUrl,
                                    }}
                                    className="transition-transform"
                                    description={`${session?.user?.email}`}
                                    name={session?.user?.name}
                                />

                            </DropdownTrigger>
                            <DropdownMenu aria-label="User Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-bold">Signed in as</p>
                                    <p className="font-bold">@{session?.user?.email}</p>
                                </DropdownItem>
                                <DropdownItem key="profile">
                                    Profile
                                </DropdownItem>

                                {
                                    dropDownMenu.map((item) => (
                                        <DropdownItem key={item} onClick={() => signOut()} color="danger">
                                            {item}
                                        </DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>
                    }

                </div>

            </Container>
        </div>
    )
}
