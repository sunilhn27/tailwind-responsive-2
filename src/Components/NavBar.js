"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/asserts/images/logo.png'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function NavBar() {

    const [mobileView, setMobileView] = useState(false)
    const handleMenu = () => {
        setMobileView(!mobileView)
    }

    return (
        <nav className='flex justify-between items-center mx-3 md:mx-12 mt-6'>
            <div className='flex'>
                <Image src={Logo} className='md:h-[2.5rem] md:w-[9.5rem] h-[2.5rem w-[8.5rem]' />
            </div>
            {/* Mobile Menu Icon */}
            <div className='md:hidden'>
                {mobileView ? (
                    <AiOutlineClose onClick={handleMenu} />
                ) : (
                    <AiOutlineMenu onClick={handleMenu} />
                )}
            </div>
            {/* Mobile Navigation Menu */}
            {mobileView && (
                <div className='md:hidden absolute  top-[2.5rem] right-0 mt-2 space-y-2 bg-white w-[10rem] py-2 px-4 shadow-lg text-sm md:text-xl'>
                    <Link href={"/"} className='text-[#18A683] font-semibold block '>
                        Product
                    </Link>
                    <Link href={"/"} className='text-[#18A683] font-semibold block '>
                        Features
                    </Link>
                    <Link href={"/"} className='text-[#18A683] font-semibold block '>
                        Pricing
                    </Link>
                    <button className='bg-[#18A683] font-semibold text-white md:px-4 md:py-2 px-2 py-1 rounded-lg block'>
                        CONTACT US
                    </button>
                </div>
            )}
            {/* Desktop Navigation Links */}
            <div className='hidden md:flex space-x-6 items-center'>
                <Link href={"/"} className='text-[#18A683] font-semibold'>
                    Product
                </Link>
                <Link href={"/"} className='text-[#18A683] font-semibold'>
                    Features
                </Link>
                <Link href={"/"} className='text-[#18A683] font-semibold'>
                    Pricing
                </Link>
                <button className='bg-[#18A683] font-semibold text-white px-4 py-2 rounded-lg'>
                    CONTACT US
                </button>
            </div>
        </nav>
    );
}

export default NavBar