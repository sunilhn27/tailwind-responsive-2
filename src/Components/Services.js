import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img1 from '@/asserts/images/rectangle-1.png'
import Img2 from '@/asserts/images/rectangle-2.png'
import Img3 from '@/asserts/images/rectangle-3.png'


function Services() {


  return (
    <section className='md:w-[77rem] md:h-[35rem]  mx-auto md:mt-16 mt-12'>
      <div>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center'>

          <div className='flex flex-col md:w-[38rem] md:h-[13rem] px-4 space-y-2'>
            <h1 className='text-3xl md:text-5xl font-semibold'>Services Title text</h1>
            <p className='text-gray-500 md:w-[30rem] md:text-xl'>Figma ipsum component variant main layer. Flows subtract duplicate link font. Link strikethrough list pixel edit image.</p>
            <Link href={""} className='text-[#118B78]'>Get Started</Link>
          </div >

          <div className='flex'>
            <Image src={Img1} className='md:w-[24rem] md:h-[33rem] w-[21rem] h-[15rem] mb-6 md:mb-0' />
          </div>


        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-12'>

          <div className='flex'>
            <Image src={Img2} className='md:w-[24rem] md:h-[33rem] w-[21rem] h-[15rem] mb-6 md:mb-0' />
          </div>
          <div className='flex flex-col md:w-[38rem] md:h-[13rem] px-4 space-y-2'>
            <h1 className='text-3xl md:text-5xl font-semibold'>Services Title text</h1>
            <p className='text-gray-500 md:w-[30rem] md:text-xl'>Figma ipsum component variant main layer. Flows subtract duplicate link font. Link strikethrough list pixel edit image.</p>
            <Link href={""} className='text-[#118B78]'>Get Started</Link>
          </div >



        </div>
      </div>
    </section>
  )
}

export default Services