'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FormatedAmount from './FormatedAmount'
import { IoMdCart } from 'react-icons/io'
import { MdFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, decreaseQuantity, increaseQuantity } from '@/redux/shoppingSlice'
import toast from 'react-hot-toast'
import { Button } from '@mui/material'

export default function SingleProducts({ product, idString }) {
    const [productQuantity, setProductQuantity] = useState(0)
    const dispatch = useDispatch();
    const { productData } = useSelector((state) => state?.shopping);

    console.log(productData)
    useEffect(() => {
        const singleProduct = productData.filter((item) => {
            return item?._id == idString
        })
        setProductQuantity(singleProduct[0]?.quantity)
    }, [productData])

    console.log(productQuantity)

    return (
        <div className='grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg'>
            <div className='w-full h-full overflow-hidden'>
                <Image src={product?.image} alt='img' height={500} width={500} className='w-full max-h-[700px] object-cover rounded-lg ' />
            </div>
            <div className='flex flex-col justify-center gap-y-8'>
                <div>
                    <h1 className='text-3xl font-semibold'>{product?.title}</h1>

                    <FormatedAmount className={'text-xl font-semibold'} amount={product?.price} />

                </div>
                <p className='text-lightText'>{product?.description}</p>
                <div className='text-sm text-lightText flex flex-col '>
                    <span>
                        SKU <span className='text-darkText'>{product?._id}</span>
                    </span>
                    <span>
                        Category: <span className='text-darkText'>{product?.category}</span>
                    </span>
                </div>

                <div className='flex items-center gap-x-5'>
                    <button onClick={() => dispatch(addtoCart(product)) && toast.success(`${product?.title.substring(0, 10)} added to cart`)} className='bg-darkText hover:shadow-xl group text-slate-100 px-6 py-2 uppercase text-sm w-fit flex items-center gap-x-2 '>add to cart <IoMdCart className='group-hover:scale-125' /> </button>
                    {
                        productQuantity > 0 && <div className='flex justify-center w-fit flex-1 items-center '> <Button className='w-[10%]' onClick={() => dispatch(decreaseQuantity(product))}>less</Button><p className='w-[10%] text-center font-bold'> {productQuantity} </p><Button className='w-[10%]' onClick={() => dispatch(increaseQuantity(product))}>more</Button> </div>
                    }
                </div>

                <p className='flex items-center gap-x-2 cursor-pointer'><MdFavoriteBorder className='text-xl ' /> add to wishlist</p>
            </div>
        </div>
    )
}
