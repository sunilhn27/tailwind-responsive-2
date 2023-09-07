import React from 'react'

function Contact() {
    return (
        <section className='bg-[#FAFFFA] md:mt-12 2xl:mt-16  px-3' >

            <div className='flex flex-col md:flex-row md:justify-evenly items-center py-12'>

                <div className='flex flex-col w-[36rem]'>
                    <h1 className='font-semibold text-3xl md:text-left text-center mb-3'>Get in touch with us</h1>
                    <p className='md:w-[33rem] w-[25rem]  md:text-left text-center mx-auto md:mx-0 px-2 md:px-0 '>Figma ipsum component variant main layer. Undo select edit device arrange ipsum list list figjam font. Bold italic line scrolling inspect prototype share. Component main style.</p>
                </div>

                <div className='flex md:mt-0 mt-6'>
                    <form className=''>
                        <div className='flex flex-col md:flex-row md:space-x-4 '>
                            <div className='flex flex-col '>
                                <label className='mb-2'>First Name</label>
                                <input placeholder='Your First Name' className='border-2  rounded-lg px-6 py-2' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='mb-2'>Last Name</label>
                                <input placeholder='Your Last Name' className='border-2 rounded-lg px-6 py-2' />
                            </div>

                        </div>
                        <div className='flex flex-col mt-2 md:mt-6'>
                            <label className='mb-2'>Your Email id</label>
                            <input placeholder='Your Email Id' className='border-2 rounded-lg px-6 py-2' />
                        </div>


                        <div className='flex flex-col mt-2 md:mt-6'>
                            <label className='mb-2'>Message</label>
                            <textarea placeholder='Message' className='border-2 rounded-lg px-6 py-2 h-[11rem]' />
                        </div>

                        <div className='flex flex-col mt-4 md:mt-6'>
                            <div className='flex space-x-2 text-[0.7rem] md:text-[1.3rem] items-center'>
                                <input type='checkbox' />
                                <h1>I accept the terms and conditions & privacy policy.</h1>
                            </div>
                        </div>

                        <div className='flex flex-col mt-4 md:mt-6'>
                         <button className='text-white bg-[#18A683] px-6  py-2 md:w-[16rem]  w-[14rem] rounded-lg'>SEND MY MESSAGE </button>
                            
                        </div>



                    </form>
                </div>

            </div>

        </section>
    )
}

export default Contact