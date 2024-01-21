import React from 'react'
import  img from "../../public/image/undraw_Software_engineer_re_tnjc.png"
import Image from 'next/image'
import { GrStatusCriticalSmall } from "react-icons/gr";
function Info() {
  return (
    <div className='max-w-5xl mx-auto p-2 mt-10'>

        <h1 className='text-md font-bold flex justify-center items-center my-4 
        text-orange-700'>Info</h1>

        <div className='flex flex-col md:flex-row space-x-5 space-y-5'>

            {/* left */}
            <div>
                
                <Image  src={img} className='max-w-md'  width={0} height={0} alt='image'/>

            </div>
            {/* right */}
            <div className = "">

                {/* one */}
                <div className='space-y-3'>
                    <h2 className='font-bold text-orange-600 text-md'>ABOUT COMPANY</h2>
                    <h1 className='md:text-3xl font-bold'>WE HAVE WORKING <br /><span className='text-orange-600 font-bold'>EXPERIENCE</span></h1>
                    <h1 className='text-sm font-DM'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                        Animi magnam quos necessitatibus modi debitis perspiciatis, <br />repudiandae maxime quas ipsum at. At optio itaque quisquam facere omnis vero porro eos perspiciatis.</h1>
                </div>
                {/* two */}
                <div className='grid grid-cols-2 md:grid-cols-2 gap-4 my-7'>
                    {/* one */}
                    <div className='flex space-x-3'>
                        <GrStatusCriticalSmall className = "text-2xl text-orange-600"/>
                        <h1 className='text-md font-bold'>Website  creation</h1>
                    </div>
                    {/* two */}
                    <div className='flex space-x-3'>
                        <GrStatusCriticalSmall className = "text-2xl text-orange-600"/>
                        <h1 className='text-md font-bold'>Digital marketing </h1>
                    </div>
                    {/* three */}
                    <div className='flex space-x-3'>
                        <GrStatusCriticalSmall className = "text-2xl text-orange-600"/>
                        <h1 className='text-md font-bold'>Graphic Design</h1>
                    </div>
                    {/* four */}
                    <div className='flex space-x-3'>
                        <GrStatusCriticalSmall className = "text-2xl text-orange-600"/>
                        <h1 className='text-md font-bold'>SEO & Ads</h1>
                    </div>


                </div>
               


            </div>
        </div>


      
    </div>
  )
}

export default Info
