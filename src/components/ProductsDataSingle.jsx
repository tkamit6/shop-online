// 'use client'
import { calculatePercentage } from '@/helpers'
import Image from 'next/image'
import React from 'react'
import FormatedAmount from './FormatedAmount'
import { IoIosStar } from "react-icons/io";
import Link from 'next/link';

export default function ProductsDataSingle({ item }) {
    const starArray = Array.from({ length: item?.rating }, (_, index) => (
        <span key={index} className='text-yellow-500'>
            <IoIosStar />
        </span>
    ))

    return (
        <>

            <div className='w-full rounded-lg overflow-hidden '>
                <Link href={{ pathname: '/product', query: { _id: item?._id } }}>
                    <div className='w-full h-80 group relative overflow-hidden'>
                        <Image src={item?.image} alt='img' height={500} width={500} className='w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg' />
                        {
                            item?.isNew && <span className='bg-white rounded-full px-4 py-1 absolute top-2 right-2 group-hover:bg-blue-400 group-hover:text-white font-medium text-sm duration-200'>New Arrival</span>
                        }
                    </div>
                </Link>
                <div className='border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg'>
                    <p className='font-medium'>{item?.title}</p>
                    <div className=' flex justify-between'>
                        <div>
                            <p className='border-[1px] rounded-full px-3 py-0 bg-blue-400 text-white '>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <span className='text-slate-500 text-sm line-through'>
                                <FormatedAmount amount={item?.oldPrice} />
                            </span>
                            <span className='font-semibold'>
                                <FormatedAmount amount={item?.price} />
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='bg-blue px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 bg-blue-400 hover:bg-blue-800 hover:text-white duration-200'>Add to cart</button>

                        <div className='flex'>{starArray}  </div>
                    </div>
                </div>
            </div>
        </>
    )
}
