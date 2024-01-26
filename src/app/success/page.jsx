import Container from '@/components/Container'
import ProductsData from '@/components/ProductsData'
import { phoneProducts } from '@/helpers'
import Link from 'next/link'
import React, { useState } from 'react'

export default async function page() {
   
    return (
        <Container className={'flex items-center justify-center py-20'}>
            <div className='min-h-[400px] flex  flex-col items-center justify-center gap-y-5'>
                <h2 className='font-semibold text-4xl'>Payment accepted by online</h2>
                <p>Now you can view your orders</p>
                <div className='flex  gap-4'>
                    <Link href={'/order'}>
                        <button className='px-6 py-2 bg-black text-slate-100 rounded-full hover:text-orange-600 duration-200'>View order </button>
                    </Link>
                    <Link href={'/'}>
                        <button className='px-6 py-2 bg-black text-slate-100 rounded-full hover:text-orange-600 duration-200'>Continue </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}
