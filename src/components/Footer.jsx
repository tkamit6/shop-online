import React from 'react'
import Container from './Container'
import { FaYoutube } from "react-icons/fa";
import { EN } from '../app/constant/EN';
import Link from 'next/link';

export default function Footer() {
  const data = EN;

  return (
    <div className='w-full bg-darkText text-slate-100'>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" >
        <div className='flex flex-col gap-y-4'>
          Footer
          <div className='gap-4 flex'>
            <a href='#'>
              <span className='social-links'>
                <FaYoutube />
              </span>
            </a>
            <a href='#'>
              <span className='social-links'>
                <FaYoutube />
              </span>
            </a>
            <a href='#'>
              <span className='social-links'>
                <FaYoutube />
              </span>
            </a>
          </div>
        </div>
        <div className=''>
          <p className='text-lg mb-1'>{data?.footer?.div1?.heading}</p>
          <ul className='text-base font-medium gap-4 flex flex-col '>

            {
              data && data?.footer?.div1?.main.map((li, id) => (
                <li key={id}>
                  <span className='text-slate-100 hover:text-orange-600 duration-200 block'>{li?.para}</span>
                  <span className='text-orange-600'>{li?.date}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <p className='text-lg mb-1'>{data?.footer?.div2?.heading}</p>
          <ul className='flex flex-col gap-4'>
            {
              data && data?.footer?.div2?.main.map((li, id) => (
                <li key={id}>
                  <Link href={li.links} >
                    {li.para}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <p className='text-lg mb-1'>{data?.footer?.div2?.heading}</p>
          <ul className='flex flex-col gap-4'>
            {
              data && data?.footer?.div2?.main.map((li, id) => (
                <li key={id}>
                  <Link href={li.links} >
                    {li.para}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </div>
  )
}
