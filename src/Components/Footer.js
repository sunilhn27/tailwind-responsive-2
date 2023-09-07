"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoDiscordAlt } from 'react-icons/bi'
import Logo from '@/asserts/images/logo.png'

function Footer() {
  return (
    <section className='my-12'>
      <div className='flex flex-col md:flex-row  justify-evenly md:items-center mx-6 md:mx-3'>

        <div className='hidden md:flex' >
          <div className='flex flex-col space-y-4'>
            <Image alt='pic' src={Logo} />
            <p className='text-gray-500 w-[18rem]'>Figma ipsum component variant main layer. Outline blur link pixel create. Flatten duplicate.</p>
          </div>
        </div>

        <div className='flex flex-col  space-y-2'>
          <Link className='text-2xl font-semibold' href={"/"}>Products</Link>
          <Link className='text-[#118B78]' href={"/"}>Mongo DB</Link>
          <Link className='text-[#118B78]' href={"/"}>Express js</Link>
          <Link className='text-[#118B78]' href={"/"}>Tailwind Css</Link>
          <Link className='text-[#118B78]' href={"/"}>Next js</Link>
        </div>


        <div className='flex flex-col  space-y-2'>
          <Link className='text-2xl font-semibold' href={"/"}>Services</Link>
          <Link className='text-[#118B78]' href={"/"}>Teams</Link>
          <Link className='text-[#118B78]' href={"/"}>Blogs</Link>
          <Link className='text-[#118B78]' href={"/"}>Careers</Link>
          <Link className='text-[#118B78]' href={"/"}>Products</Link>
        </div>

        <div className=' md:flex flex-col mt-2'>
          <Link className='text-2xl font-semibold mb-3' href={"/"}>Subscribe</Link>
          <input className='w-[18rem] px-6 py-2 border-2 rounded-lg mb-3' type='text' placeholder='Email address' />
          <button className='text-white bg-[#18A683] px-4 py-2 w-[7.9rem] rounded-lg '>Subscribe</button>
          <div className='flex space-x-4 justify-end '>
            <AiFillGithub className='w-[2.5rem] h-[2.2rem]' />
            <AiFillLinkedin className='w-[2.5rem] h-[2.2rem]' />
            <BiLogoDiscordAlt className='w-[2.5rem] h-[2.2rem]' />
          </div>
        </div>
      </div>

      <div className=''>
        <hr class="border-t-2 border-gray-600-500 mt-6" />
        <div className='flex justify-center mt-6'>
          <h1>© HelloWorld 2023. All rights reserved</h1>
        </div>

      </div>
    </section>
  )
}

export default Footer