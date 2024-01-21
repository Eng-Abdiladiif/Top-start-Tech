"use client"

import Image from 'next/image'

import Nav from '@/components/Nav'
import React, { useEffect } from 'react'

import Link from 'next/link'
import one  from "../../../public/image/one.png"
import Two  from "../../../public/image/two.png"
import  {BsArrowReturnLeft}  from "react-icons/bs"
import  Aos   from "aos"
import   "aos/dist/aos.css"
import Footer from '@/components/Footer'

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {


    Aos.init({duration: 3000})
})
  return (

    <>
    
    
   
    <div  className=''>

      
      <div  className=' w-full md:h-[320px] h-[300px] bg-cover '
    style={{backgroundImage: `linear-gradient(rgb(0 0 0/95%),
    rgb(0 0 0/95%)), url(./image/img.png)`}}>


      <div>

        <Nav/>
      </div>

      <div className='flex  justify-center items-center mt-20'>

        <h1 className='text-white font-bold text-4xl tracking-2 md:text-4xl'> <span className='text-orange-400'>Pro</span>jects</h1>
      </div>


      </div>

      {/* section-2 */}


      <div className='flex m-10'>

        <h1 className='text-orange-700 font-bold md:text-3xl text-2xl'>Last project we build </h1>



      </div>


  {/* secrion three */}

      <div>

      <div  className='max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-1 gap-5 '>


{/* one */}

<div className='flex flex-col md:flex-row justify-around items-center space-x-16 space-y-5'
data-aos = "fade-right">

    {/* left */}
    <div className='shadow-2xl shadow-pink-600 border-2 border-pink-700 rounded-md'>
        
        <Link className='' href="https://ai-madiina-bny95fl9f-eng-abdiladiif.vercel.app/">

            <Image src={one} className='md:max-w-sm '  width={0} height={0} alt='image'/>
        </Link>
    </div>
    {/* right */}

    <div className='md:w-1/2 px-4'>
        <p className='font-DM leading-7'><span className='bg-blue-400 text-white'>Al madiina</span>  E-commerce waa small project 
            kaso  ku shaqaynaya Qab onlien ah weli Dhamaytrikiisa lagu
            Gudo jiraa waxan laga helay Dhaman dharka kala duwan
           Ee <span>[raga & dumarka]</span>
        </p>
        <div className='flex space-x-3  items-center'>

            <BsArrowReturnLeft className='text-xl mt-2 text-blue-700 '/>
            <h1 className='font-bold font-Lilita text-blue-700'>Visit</h1>


        </div>
    </div>



</div>

{/* two */}
<div className='flex flex-col md:flex-row justify-around items-center space-x-16 space-y-5'
data-aos = "fade-left">

    {/* left */}
    <div className='shadow-2xl shadow-pink-600 border-2 border-pink-700 rounded-md'>
        
        <Link className='' href="https://ai-madiina-bny95fl9f-eng-abdiladiif.vercel.app/">

            <Image src={Two} className='md:max-w-sm '  width={0} height={0} alt='image'/>
        </Link>
    </div>
    {/* right */}

    <div className='md:w-1/2 px-4'>
        <p className='font-DM leading-7 '> <span className='bg-blue-500 text-white'> Al-baraka  </span> E-commerce waa small project 
            kaso  ku shaqaynaya Qab onlien ah weli Dhamaytrikiisa lagu
            Gudo jiraa waxan laga helay Dhaman dharka kala duwan
           Ee <span>[raga & dumarka]</span>
        </p>
        <div className='flex space-x-3  items-center'>

            <BsArrowReturnLeft className='text-xl mt-2 text-blue-700 '/>
            <h1 className='font-bold font-Lilita text-blue-700'>Visit</h1>


        </div>
    </div>



</div>


</div>

        






      </div>
      
    </div>

    <Footer/>
    </>
  )
}

export default page
