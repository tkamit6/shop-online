'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormatedAmount from './FormatedAmount'
import { loadStripe } from '@stripe/stripe-js'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { resetCart, resetOrder, saveOrder } from '@/redux/shoppingSlice'

export default function PaymentForm() {
    const { userInfo, productData } = useSelector((state) => state?.shopping)
    const [totalAmt, setTotalAmt] = useState(0)
    const [shippingAmt, setShippingAmt] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        let amt = 0;
        productData.map((item) => {
            amt = amt + item.price * item.quantity;
            return;
        })
        setTotalAmt(amt)
        setShippingAmt((amt * 0.7) / 100)
    }, [productData])



    //stripe payment
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    const session = useSession();
    const handleCheckout = async () => {
        const stripe = await stripePromise;
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: productData,
                email: session?.user?.email,
            }),
        });
        const data = await response.json();
        console.log(data)
        if (response.ok) {
            await dispatch(saveOrder({ order: productData, id: data.id }));
            stripe?.redirectToCheckout({ sessionId: data.id });
            await dispatch(resetCart());
        } else {
            throw new Error("Failed to create Stripe Payment");
        }
    };

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
                userInfo ? <button onClick={handleCheckout} className='bg-black mt-4 justify-end text-slate-100 text-base font-semibold px-6 py-2 '>Procedd to payment</button> : <><button disabled className='bg-black mt-4 text-slate-100 cursor-not-allowed text-base font-semibold px-6 py-2 '>Procedd to payment</button> <p className='text-red-600 animate-bounce ps-2 mt-2'>Login to Proceed</p></>
            }
        </div>
    )
}
