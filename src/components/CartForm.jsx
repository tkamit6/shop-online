import React, { useState } from 'react'
import { Input } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { addAddress, setAddress } from '@/redux/shoppingSlice';


export default function CartForm() {
    const dispatch = useDispatch()
    const a = useSelector((state) => state?.shopping)
    const { userInfo } = useSelector((state) => state?.shopping)
    const [formData, setFormData] = useState({
        name: userInfo?.name || '',
        email: userInfo?.email || '',
        address: '' || '',
        pincode: '' || '',
    })

    const handlerFormChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    const { data: session } = useSession()
    
    const submitData = (e) => {
        e.preventDefault();
        dispatch(addAddress())
    }
    
    return (
        <form  className='flex-1 bg-white p-4'>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input variant='underlined' name='name' type="name" onChange={handlerFormChange} value={session?.user?.name} label="Name" />
                <Input variant='underlined' name='email' type="email" onChange={handlerFormChange} value={session?.user?.email} label="Email" />
            </div>
            <Input variant='underlined' name='address' onChange={handlerFormChange} value={session?.user?.address} type="text" label="Address" />
            <Input variant='underlined' name='pincode' onChange={handlerFormChange} value={session?.user?.pincode} type="text" label="Zipcode/Pincode" />
            {/* <button className='border-2 border-black px-4 py-2' type='submit'>ADD</button> */}
        </form>
    )
}
