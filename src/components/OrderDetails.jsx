'use client'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import FormatedAmount from './FormatedAmount'

export default function OrderDetails() {
    const { orderData } = useSelector((state) => state?.shopping)
    console.log(orderData)

    return (
        <div>

            <div className='grid grid-cols-7 border-b-[1px] border-gray-400 w-full py-4 font-bold'>
                <div className='col-span-4'>
                    <h2 className=''>ARTICLE</h2>
                </div>
                <div className='col-span-1 flex justify-center'>
                    <h2 className=''>QUANTITY</h2>
                </div>
                <div className='col-span-1 flex justify-center'>
                    <h2 className=''>PRICE</h2>
                </div>
                <div className='col-span-1 flex justify-center '>
                    <h2 className=''>TOTAL</h2>
                </div>
            </div>


            {
                orderData && orderData?.order?.map((item) => (
                    <div key={item?._id} className='grid grid-cols-7 border-b-[1px] border-gray-400 w-full py-4'>
                        <div className='col-span-4'>
                            <div className='flex gap-4' >
                                <Image src={item?.image} alt='img' width={500} height={500} className='w-12 h-12 object-cover' />
                                <div className='flex flex-col'>
                                    <h2 className='font-semibold text-base text-black'>{item?.title}</h2>
                                    <p className='text-sm font-medium text-slate-500'>{item?.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-1 flex justify-center'>
                            <h2 className=''>{item?.quantity}</h2>
                        </div>
                        <div className='col-span-1 flex justify-center'>
                            <FormatedAmount amount={item?.price} />
                        </div>
                        <div className='col-span-1 flex justify-center b'>
                            <FormatedAmount className={'font-semibold'} amount={item?.quantity * item?.price} />
                        </div>
                    </div>
                ))
            }
        </div>

    )
}
