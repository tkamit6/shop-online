import Image from 'next/image'
import React from 'react'
import FormatedAmount from './FormatedAmount'
import { IoMdCart } from 'react-icons/io'
import { MdFavoriteBorder } from 'react-icons/md'

export default function SingleProducts({ product }) {
    console.log(product)
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

                <button className='bg-darkText text-slate-100 px-6 py-2 uppercase text-sm w-fit flex items-center gap-x-2 '>add to cart <IoMdCart /> </button>
                <p className='flex items-center gap-x-2 cursor-pointer'><MdFavoriteBorder className='text-xl' /> add to wishlist</p>
            </div>
        </div>
    )
}
