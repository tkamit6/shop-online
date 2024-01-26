import React from 'react'
import Container from './Container'
import { motion } from "framer-motion"


export default function BannrText({ title }) {
    return (
        <div className=' lg:inline-block w-full h-full absolute left-0 top-0 z-10'>
            <Container className={"flex flex-col md:gap-y-6 gap-y-1 h-full justify-center"}>
                <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='md:text-7xl text-xl font-bold text-white'>{title}</motion.h2>
                <motion.p initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className='md:text-lg text-sm text-slate-100'>Lorem Lorem Lorem Lorem lorem lorem <br /> lorem lorem orme orem lorem </motion.p>
                <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className='flex gap-x-4 '>
                    <button className='md:py-3 md:px-6 py-0 px-4 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold'>Find out more</button>
                    <button className='md:py-3 md:px-6 py-0 px-4 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold'>Shop Now</button>
                </motion.div>
            </Container>

        </div>
    )
}
