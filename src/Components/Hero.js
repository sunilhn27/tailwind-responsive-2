import Image from 'next/image'
import React from 'react'
import HeroImg from '@/asserts/images/Hero.png'

function Hero() {
  return (
    <section className='mt-10 md:mt-16 bg-[#FAFFFA]'>
      <div className='flex flex-col md:w-[67rem] md:h-[55rem]
      2xl:w-[95rem] 2xl:h-[50rem]  mx-auto '>
        <div className='mx-auto w-[20rem] md:w-[44rem]  '>
          <h1 className='text-5xl md:text-[7rem] font-semibold md:font-normal '>Human First. Design Later.</h1>
        </div>
        <div className='w-[24rem] md:w-[57rem]  mx-auto text-center md:text-2xl text-xl mt-4 md:mt-8'>
          <p className='text-gray-500'>Figma ipsum component variant main layer. Object editor image select selection flatten subtract layout.</p>
        </div>

        <div className='flex flex-col md:flex-row mt-4 md:mt-8 mx-auto md:space-x-6 space-y-6 md:space-y-0'>
          <button className='bg-[#118B78]  text-white rounded-lg px-6 md:px-10 py-2 md:text-2xl'>GET STARTED</button>
          <button className='bg-[#ECFDEF] text-[#118B78] rounded-lg px-6 md:px-10 py-2 md:text-2xl'>LEARN MORE</button>
        </div>

        <div className='md:w-[60rem] md:h-[32rem] mx-auto mt-6 md:mt-12 flex justify-center items-center px-2 md:px-0 '>
          <Image src={HeroImg} className='w-[65rem] h-[11rem] md:h-[25rem]' />
        </div>


      </div>
    </section>
  )
}

export default Hero