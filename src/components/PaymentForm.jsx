'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FormatedAmount from './FormatedAmount'

export default function PaymentForm() {
    const { userInfo, productData } = useSelector((state) => state?.shopping)
    console.log(userInfo)
    const [totalAmt, setTotalAmt] = useState(0)
    const [shippingAmt, setShippingAmt] = useState(0)

    useEffect(() => {
        let amt = 0;
        productData.map((item) => {
            amt = amt + item.price * item.quantity;
            return;
        })
        setTotalAmt(amt)
        setShippingAmt((amt * 0.7) / 100)
    }, [productData])

    return (
        <div className='max-w-lg bg-white p-4'>
            <h2>Cart Total</h2>
            <div className='border-b-[1px] border-b-slate-300 py-2'>
                <div className='max-w-lg flex items-center justify-between'>
                    <p className='uppercase font-medium'>Subtotal</p>
                    <FormatedAmount amount={totalAmt} />
                </div>
            </div>
            <div className='border-b-[1px] border-b-slate-300 py-2'>
                <div className='max-w-lg flex items-center justify-between'>
                    <p className='uppercase font-medium'>Shipping</p>
                    <FormatedAmount amount={`${shippingAmt}`} />
                </div>
            </div>
            <div className='border-b-[1px] border-b-slate-300 py-2'>
                <div className='max-w-lg flex items-center justify-between'>
                    <p className='uppercase font-medium'>Total Amount</p>
                    <FormatedAmount className={'font-bold'} amount={`${totalAmt + shippingAmt}`} />
                </div>
            </div>

            {
                userInfo ? <button className='bg-black mt-4 justify-end text-slate-100 text-base font-semibold px-6 py-2 '>Procedd to payment</button> : <><button disabled className='bg-black mt-4 text-slate-100 cursor-not-allowed text-base font-semibold px-6 py-2 '>Procedd to payment</button> <p className='text-red-600 animate-bounce ps-2 mt-2'>Login to Proceed</p></>
            }
        </div>
    )
}
