"use client"

import React, { useEffect } from 'react'
import  web  from "../../public/image/icons8-code-50.png"
import  dig  from "../../public/image/icons8-digital-marketing-64.png"
import  seo  from "../../public/image/icons8-seomarketing-64.png"
import  tr  from "../../public/image/icons8-bussiness-64.png"
import  gr from "../../public/image/icons8-graphic-design-16.png"
import Image from 'next/image'
import   Aos  from "aos"
import  "aos/dist/aos.css"
import { MdMiscellaneousServices } from "react-icons/md"


function Services() {


  useEffect(() => {


    Aos.init({duration:2000})


  })
  return (
    <div className='max-w-5xl mx-auto p-4  mt-5 '>

        
        <div className='flex justify-center items-center my-10 space-x-2'>

          <h1 className='text-lg font-bold text-pink-800'>Services Us</h1>
          <MdMiscellaneousServices/>
        </div>

        <div  className=' grid grid-cols-2 md:grid-cols-3 gap-5'>

            {/* one */}
            <div className=' flex space-x-5'
          data-aos = "fade-up" >

               <Image src={web} className='w-10 h-10 md:w-16 md:h-16' width={0} height={0}  alt=''/>
               <div className='space-y-2'>

                <h1 className=' font-semibold  text-orange-800 text-sm md:text-md'>Web development</h1>
                <p className='text-[10px] md:text-sm font-DM text-sm'>Dhisid website noocaydood <br /> kala duwan</p>
               </div>
            </div>

            {/* two */}
            <div className=' flex space-x-5'
            data-aos = "fade-up">

               <Image src={gr} className='w-10 h-10 md:w-16 md:h-16' width={0} height={0}  alt=''/>
               <div className='space-y-2'>

                <h1 className=' font-semibold  text-cyan-800 text-sm md:text-md'>Graphic Design </h1>
                <p className='text-[10px] md:text-sm font-DM text-sm'>samaynta brand , logo , samynta persnal brand <br /> kala duwan</p>
               </div>
            </div>
            
            {/* three */}
            <div className=' flex space-x-5'
            data-aos = "fade-up">

               <Image src={dig} className='w-10 h-10 md:w-16 md:h-16' width={0} height={0}  alt=''/>
               <div className='space-y-2'>

                <h1 className=' font-semibold  text-cyan-800 text-sm md:text-md'>Digital marketing </h1>
                <p className='text-[10px] md:text-sm font-DM text-sm'>samaynta brand , logo , samynta persnal brand <br /> kala duwan</p>
               </div>
            </div>
            {/* four  */}
            <div className=' flex space-x-5'
            data-aos = "fade-up">

               <Image src={seo} className='w-10 h-10 md:w-16 md:h-16' width={0} height={0}  alt=''/>
               <div className='space-y-2'>

                <h1 className=' font-semibold  text-cyan-800 text-sm md:text-md'>Seo </h1>
                <p className='text-[10px] md:text-sm font-DM text-sm'>samaynta brand , logo , samynta persnal brand <br /> kala duwan</p>
               </div>
            </div>
            {/* five */}
            <div className=' flex space-x-5'
            data-aos = "fade-up">

               <Image src={tr} className='w-10 h-10 md:w-16 md:h-16' width={0} height={0}  alt=''/>
               <div className='space-y-2'>

                <h1 className=' font-semibold  text-cyan-800 text-sm md:text-md'>Training Technology</h1>
                <p className='text-[10px] md:text-sm font-DM text-sm'>samaynta brand , logo , samynta persnal brand <br /> kala duwan</p>
               </div>
            </div>

        </div>
      
    </div>
  )
}

export default Services
