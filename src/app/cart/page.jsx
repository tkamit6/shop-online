'use client'
import CartForm from '@/components/CartForm'
import Container from '@/components/Container'
import FormatedAmount from '@/components/FormatedAmount'
import PaymentForm from '@/components/PaymentForm'
import { decreaseQuantity, deleteProduct, increaseQuantity, resetCart } from '@/redux/shoppingSlice'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'

export default function page() {
    const dispatch = useDispatch()
    const { productData } = useSelector((state) => state.shopping)

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
                        productData.length > 0 ? productData.map((item, id) => (
                            <div key={id} className='w-full bg-white p-4 flex flex-row md:flex-row items-center justify-between'>
                                <div className='flex items-center w-[40%] gap-x-2'>
                                    {/* <span onClick={() => dispatch(deleteProduct(item))} className='cursor-pointer'><AiOutlineClose /></span> */}
                                    <Link href={{ pathname: 'product', query: { _id: item?._id } }} >
                                        <Image src={item?.image} alt='img' width={500} height={500} className='object-cover w-20 h-20' />
                                        <h3>{item?.title}</h3>
                                    </Link>
                                </div>
                                <div className='flex w-[10%] items-center justify-center gap-x-3 border-[1px]'>
                                    <span onClick={() => dispatch(decreaseQuantity(item))} className='cursor-pointer'><FiChevronLeft /></span>
                                    <p>{item?.quantity}</p>
                                    <span onClick={() => dispatch(increaseQuantity(item))} className='cursor-pointer'><FiChevronRight /></span>
                                </div>
                                <div className='w-[40%] flex justify-end'>
                                    {<FormatedAmount amount={item?.price * item?.quantity} />}
                                </div>
                            </div>

                        )) : "empty"
                    }
                    {
                        productData.length > 0 &&
                        <div className='flex justify-end mt-2'><button onClick={() => dispatch(resetCart())} className='bg-red-500 w-fit px-4 py-2  text-slate-100 hover:bg-red-700 duration-200'>Reset</button></div>
                    }
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <CartForm />
                    <PaymentForm />
                </div>
            </Container>
        </div>
    )
}
