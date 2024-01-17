'use client'
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react"
import { FiLogOut } from 'react-icons/fi'
import Image from 'next/image';

export default function Header() {
    const { data: session } = useSession()
    // console.log(session, "session")
    return (
        <div className='bg-bodyColor h-20  top-0  sticky z-50'>
            <Container className={"h-full transition-all duration-500 flex items-center md:gap-x-5 justify-between md:justify-start"} >
                <Link href='#' className='text-3xl font-semibld hover:text-orange-500 transition-all'>Logo</Link>
                <div className='w-full hidden items-center md:flex gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-500 bg-transparent group'>
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
                    <div className='bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative cursor-pointer'>
                        <MdOutlineShoppingCart className='text-xl' />
                        <p className='text-sm font-semibold'>$0.00</p>
                        <span className=' bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 p-1 flex items-center justify-center shadow-xl shadow-black'>10</span>
                    </div>

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
