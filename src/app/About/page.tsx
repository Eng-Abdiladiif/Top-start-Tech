import Nav from '@/components/Nav'
import Image from 'next/image'
import React from 'react'
import img  from "../../../public/image/ab-2.png"
import { GrStatusCriticalSmall } from 'react-icons/gr'

function page() {
  return (
    <>
    <div className=' w-full md:h-[400px] h-[400px] bg-cover '
    style={{backgroundImage: `linear-gradient(rgb(0 0 0/95%),
    rgb(0 0 0/95%)), url(./image/About-img.png)`}}>
        <div>
            <Nav/>
        </div>
        <div className='flex justify-center items-center h-60'>

            <h1 className='text-white md:text-4xl text-3xl
            font-bold'>About</h1>
        </div>
    </div>

    <div className='p-4 mt-10 flex justify-center items-center'>

        <h1 className='text-orange-600 text-2xl md:text-2xl font-bold'>About The Company</h1>
    </div>

    <div  className='max-w-5xl mx-auto p-4 mt-10'>

        
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

    </>



    



  )
}

export default page