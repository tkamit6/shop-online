'use client'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Link from 'next/link'
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react"
import { FiLogOut } from 'react-icons/fi'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import FormatedAmount from './FormatedAmount';
import { addUser, deleteUser } from '@/redux/shoppingSlice';

export default function Header() {
    const [totalAmt, setTotalAmt] = useState(0)
    const { data: session } = useSession()
    const { productData } = useSelector((state) => state.shopping)
    const dispatch = useDispatch();

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
                <Link href='/' className='text-3xl font-semibld hover:text-orange-500 transition-all'>Logo</Link>
                <div className='w-full md:flex-1 hidden items-center md:flex gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-500 bg-transparent group'>
                    <CiSearch className='text-gray-500 group-focus-within:text-gray-800 duration-200' />
                    <input placeholder='Search Products' type='text' className='placeholder:text-sm bg-transparent flex-1 outline-none' />
                </div>

                <div className='flex gap-x-2'>

                    {/* login */}
                    {
                        !session && <div onClick={() => signIn()} className='headerDiv gap-x-1 cursor-pointer'>
                            <AiOutlineUser className='text-xl' />
                            <p className='text-sm font-semibold'>Login/Register</p>
                        </div>
                    }
                    <Link href={`${totalAmt != 0 ? '/cart' : ''}`}>
                        <div className='bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative cursor-pointer'>
                            <MdOutlineShoppingCart className='text-xl' />
                            {
                                productData ?
                                    <FormatedAmount className={"text-sm font-semibold"} amount={totalAmt} /> : 0
                            }
                            <span className=' bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 p-1 flex items-center justify-center shadow-xl shadow-black'>{productData ? productData.length : 0}</span>
                        </div>
                    </Link>

                    {/* user image */}
                    {
                        session?.user?.image && <Image src={session?.user?.image} width={40} height={40} className='rounded-full' />
                    }
                    {/* logout btn */}
                    {
                        session && <div onClick={() => signOut()} className='flex items-center cursor-pointer gap-x-1'>
                            <FiLogOut className='text-xl' />
                            <p className='text-sm font-semibold'>Logout</p>
                        </div>
                    }
                </div>

            </Container>
        </div>
    )
}
