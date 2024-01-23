'use client'
import Container from '@/components/Container'
import { decreaseQuantity, deleteProduct, increaseQuantity } from '@/redux/shoppingSlice'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'

export default function page() {
    const dispatch = useDispatch()
    const { productData } = useSelector((state) => state.shopping)
    console.log(productData)



    return (
        <div>
            <Container>
                <h1 className='text-2xl font-semibold mb-2 '>Cart</h1>
                <div className='hidden mb-2 w-full p-2 justify-between items-center lg:inline-flex font-semibold bg-white rounded-t-lg'>
                    <p className='w-1/3 flex items-center justify-start'>Product</p>
                    <p className='w-1/3 flex items-center justify-center '>Quantity</p>
                    <p className='w-1/3 flex items-center justify-end'>Subtotal</p>
                </div>
                <div className='flex flex-col gap-y-2'>
                    {
                        productData.length > 0 ? productData.map((item) => (
                            <div key={item?._id} className='w-full bg-white p-4 flex flex-col md:flex-row items-center justify-between'>
                                <div className='flex items-center gap-x-2'>
                                    <span onClick={() => dispatch(deleteProduct(item?._id))} className='cursor-pointer'><AiOutlineClose /></span>
                                    <Image src={item?.image} alt='img' width={500} height={500} className='object-cover w-20 h-20' />
                                </div>
                                <div className='flex items-center justify-center gap-x-3 border-[1px]'>
                                    <span onClick={() => dispatch(decreaseQuantity(item?.quantity))} className='cursor-pointer'><FiChevronLeft /></span>
                                    <p>{item?.quantity}</p>
                                    <span onClick={() => dispatch(increaseQuantity(item))} className='cursor-pointer'><FiChevronRight /></span>
                                </div>
                                <div>
                                    {item?.price * item?.quantity}
                                </div>
                            </div>
                        )) : <>

                            <div className='w-full bg-white p-4 flex flex-col md:flex-row items-center justify-between'>
                                <div className='flex items-center'>
                                    <span><AiOutlineClose /></span>
                                    <h1>aa</h1>
                                </div>
                                <div className='flex items-center px-2 gap-x-2 border-[1px]'>
                                    <span className='cursor-pointer'>-</span>
                                    <p>1</p>
                                    <span className='cursor-pointer'>+</span>
                                </div>
                                <div>
                                    price
                                </div>
                            </div>
                            <div className='w-full bg-white p-4 flex flex-col md:flex-row items-center justify-between'>
                                <div className='flex items-center'>
                                    <span><AiOutlineClose /></span>
                                    <h1>aa</h1>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </Container>
        </div>
    )
}
