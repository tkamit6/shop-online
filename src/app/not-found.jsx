import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div>
            <Container className="max-w-2xl min-h-[500px] flex flex-col items-center justify-center gap-y-5">
                <h2 className='text-4xl font-medium text-center'>
                    Not found page
                </h2>
                <p className='text-base font-medium'>Opps! It does't exist</p>
                <Link href="/" className='bg-black text-slate-100 text-base font-semibold px-6 py-2 rounded-full'>Back to home</Link>
            </Container>
        </div>
    )
}
