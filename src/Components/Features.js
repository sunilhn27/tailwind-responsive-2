import React from 'react'
import Icons from '@/asserts/images/icons-watch.png'
import Image from 'next/image'


function Features() {


  const Cards = ({ }) => {
    return (<>
      <div className='flex flex-col w-[21rem] md:w-[24rem] h-[14rem]  justify-center items-center py-2 space-y-3 shadow-xl'>
        <Image src={Icons} />
        <h1 className='text-2xl'>Card Title</h1>
        <p className='text-center text-gray-500 w-[21rem] '>Figma ipsum component variant main layer. Figjam prototype share.</p>
      </div>
    </>)
  }

  return (
    <section className='md:w-[75rem]  mx-auto mt-12 bg-[#FAFFFA]'>
      <div className='flex flex-col justify-center mb-2' >
        <h1 className='text-2xl md:text-4xl font-semibold text-center'>Feature Title text</h1>
      </div>
      <div>
        <p className='text-gray-500 md:w-[49rem] text-center mx-auto md:text-lg'>Figma ipsum component variant main layer. Undo select edit device arrange ipsum list list figjam font. Bold italic line scrolling inspect prototype share. Component main style.</p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center mt-12 gap-2'>

        <Cards />
        <Cards />
        <Cards />

      </div>

    </section>
  )
}

export default Features