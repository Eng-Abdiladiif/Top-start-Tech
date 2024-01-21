
"use client"

import Nav from '@/components/Nav'
import React, { useEffect } from 'react'
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { SiJirasoftware } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa6";
import { MdOutlineGppGood } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import Aos from "aos"
import "aos/dist/aos.css"




function page() {


    useEffect(() => {

        Aos.init({ duration: 2000 })
    })
    return (

        <>
        

        <main>

            <div className='w-full md:h-[400px] h-[400px] bg-cover rounded-xl '
                style={{
                    backgroundImage: `linear-gradient(rgb(0 0 0/90%),
    rgb(0 0 0/90%)), url(./image/services.png)`}}>
                <Nav />

                <div className='flex justify-center items-center space-x-3 mt-20'>

                    <h1 className='text-white text-5xl md:text-6xl font-semibold
            bg-gradient-to-r from-orange-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Services</h1>
                    <MdMiscellaneousServices className="text-white text-5xl" />
                </div>


            </div>

            <div className='bg-gray-200 w-full h-[700px]  '>


                <div className='bottom-0'>

                    {/* one  */}
                    <div className='flex flex-col space-y-8 justify-center items-center 
         p-10 '>
                        <h1 className='text-orange-500  text-md font-semibold'>OUR BEST SERVICE</h1>

                        <h1 className='leading-normal md:font-extrabold text-3xl md:text-5xl font-bold text-center
            '>WHAT SERVICES WE’RE <br /> OFFERING.</h1>


                    </div>
                    {/* two */}

                    <div className='max-w-5xl mx-auto   p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>


                        {/* one */}
                        <div className=' bg-white p-4 space-y-3 
            hover:bg-gradient-to-r from-rose-600 to-orange-600   my-6 
        transition-all  duration-1000 hover:text-white'>

                            {/* imge */}
                            <div className='flex space-x-4 items-center'>

                                <IoIosCreate className="text-4xl" />
                                <h1 className='font-bold text-orange-500 hover:text-white '>Creative Contect Writing</h1>
                            </div>
                            {/* text */}
                            <div className='p-2 '>
                                <h1 className='font-light font-DM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    <br /> Recusandae consequatur nisi fugiat atque possimus aperiam suscipit amet consectetur non illo!</h1>
                            </div>




                        </div>

                        {/* two */}
                        <div className=' bg-white p-4 space-y-3 
            hover:bg-gradient-to-r from-rose-600 to-orange-600 hover:text-white  my-6 '>

                            {/* imge */}
                            <div className='flex space-x-4 items-center'>

                                <SiJirasoftware className="text-4xl" />
                                <h1 className='font-bold text-orange-500 hover:text-white '>Web development</h1>
                            </div>
                            {/* text */}
                            <div className='p-2 '>
                                <h1 className='font-light font-DM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    <br /> Recusandae consequatur nisi fugiat atque possimus aperiam suscipit amet consectetur non illo!</h1>
                            </div>




                        </div>


                        {/* three */}
                        <div className=' bg-white p-4 space-y-3 
            hover:bg-gradient-to-r from-rose-600 to-orange-600 hover:text-white  my-6 '>

                            {/* imge */}
                            <div className='flex space-x-4 items-center'>

                                <FaMobile className="text-4xl" />
                                <h1 className='font-bold text-orange-500 hover:text-white '>Mobile-App development</h1>
                            </div>
                            {/* text */}
                            <div className='p-2 '>
                                <h1 className='font-light font-DM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    <br /> Recusandae consequatur nisi fugiat atque possimus aperiam suscipit amet consectetur non illo!</h1>
                            </div>




                        </div>

                        {/* four */}

                        <div className=' bg-white p-4 space-y-3 
            hover:bg-gradient-to-r from-rose-600 to-orange-600 hover:text-white  my-6 shadow-2xl shadow-gray-600 '>

                            {/* imge */}
                            <div className='flex space-x-4 items-center'>

                                <FaDigitalOcean className="text-4xl" />
                                <h1 className='font-bold text-orange-500 hover:text-white '>Digital marketing</h1>
                            </div>
                            {/* text */}
                            <div className='p-2 '>
                                <h1 className='font-light font-DM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    <br /> Recusandae consequatur nisi fugiat atque possimus aperiam suscipit amet consectetur non illo!</h1>
                            </div>




                        </div>

                        {/* five */}
                        <div className=' bg-white p-4 space-y-3 
            hover:bg-gradient-to-r from-rose-600 to-orange-600 hover:text-white  my-6 shadow-2xl shadow-gray-600  '>

                            {/* imge */}
                            <div className='flex space-x-4 items-center'>

                                <MdOutlineGppGood className="text-4xl" />
                                <h1 className='font-bold text-orange-500 hover:text-white '>Digital marketing</h1>
                            </div>
                            {/* text */}
                            <div className='p-2 '>
                                <h1 className='font-light font-DM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    <br /> Recusandae consequatur nisi fugiat atque possimus aperiam suscipit amet consectetur non illo!</h1>
                            </div>




                        </div>

                        {/* six */}

                        <div className=' bg-white p-4 space-y-3 
            hover:bg-gradient-to-r from-rose-600 to-orange-600 hover:text-white  my-6 shadow-2xl shadow-gray-600  '>

                            {/* imge */}
                            <div className='flex space-x-4 items-center'>

                                <MdOutlineGppGood className="text-4xl" />
                                <h1 className='font-bold text-orange-500 hover:text-white '>Digital marketing</h1>
                            </div>
                            {/* text */}
                            <div className='p-2 '>
                                <h1 className='font-light font-DM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    <br /> Recusandae consequatur nisi fugiat atque possimus aperiam suscipit amet consectetur non illo!</h1>
                            </div>




                        </div>



                    </div>

                </div>



                {/*  section  three */}

                <div className=' w-full md:h-[470px] h-[470px] bg-cover my-5'
                    style={{
                        backgroundImage: `linear-gradient(rgb(0 0 0/95%),
    rgb(0 0 0/95%)), url(./image/ser-img.png)`}}>


                    <div className=' flex flex-col  space-y-10 justify-center items-center h-[450px] text-center'>
                        <h1 className='text-white text-xl font-extrabold md:text-3xl
        '>Ma doonaysaa In lagu Dhiso website <br /> xaware sare leh
                            oo Qurux badan
                        </h1>

                        <div className=''>

                            <button className='text-white bg-gradient-to-tr from-orange-600 to-fuchsia-800
            px-5 py-3 rounded-md'>contect</button>
                        </div>






                    </div>


                </div>


                {/*  section  four */}

                <div className='flex flex-col space-y-5 text-center justify-center items-center mt-10'>

                    <h2 className='text-orange-500 font-bold'>Plan Price</h2>

                    <h1 className='text-2xl font-bold md:text-3xl'>WE MADE THE PLANS <br />
                        FOR YOU.</h1>
                </div>



                <div className='max-w-5xl mx-auto mt-10 md:p-0 px-16 my-10 grid grid-cols-1 md:grid-cols-3 gap-5  '>



                    {/* one */}

                    <div className='bg-white shadow-2xl shadow-gray-900 
                  duration-500  space-y-4 w-[330px] h-[450px] rounded-md'
                    data-aos = "fade-up">

                        {/* it-1 */}
                        <div className='flex flex-col space-y-5 justify-center items-center mt-5'>

                            <h1 className='text-md font-bold'>Basic website</h1>

                            <div className='flex  items-center'>
                                <p>$</p>
                                <h1 className='text-6xl font-extrabold text-orange-600'>200</h1>
                            </div>


                        </div>


                        {/*it-2  */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1>Strategy website </h1>
                        </div>
                        {/* it-2 */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1>SEO Optimization </h1>
                        </div>
                        {/* i-t-3 */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1>Speed  faster</h1>
                        </div>

                        {/* itm-4 */}

                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-gray-300" />
                            <h1 className='text-gray-300'>Domain</h1>
                        </div>
                        {/* itms 5 */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-gray-300" />
                            <h1 className='text-gray-300'>hosting</h1>
                        </div>

                        {/* itm6 */}

                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-gray-300" />
                            <h1 className='text-gray-300'>security</h1>
                        </div>

                        <div className='flex justify-center items-center m-4'>
                            <button className='w-60 py-2 bg-orange-500 rounded-2xl text-white'>Add Cart</button>


                        </div>



                    </div>


                    {/* CARD 2 */}
                    <div className='bg-blue-950 shadow-2xl shadow-gray-900 space-y-4 w-[330px] h-[460px] rounded-md'
                    data-aos = "fade-up">

                        {/* it-1 */}
                        <div className='flex flex-col space-y-5 justify-center items-center mt-5'>

                            <h1 className='text-md font-bold bg-orange-600 px-5 py-2 rounded-full
                            text-white'>Starndard</h1>

                            <div className='flex  items-center'>
                                <p className='text-white'>$</p>
                                <h1 className='text-6xl font-extrabold text-white'>450</h1>
                            </div>


                        </div>


                        {/*it-2  */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className='text-white'>Strategy website </h1>
                        </div>
                        {/* it-2 */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className='text-white'>SEO Optimization </h1>
                        </div>
                        {/* i-t-3 */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className='text-white'>Speed  faster</h1>
                        </div>

                        {/* itm-4 */}

                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className='text-white'>Domain</h1>
                        </div>
                        {/* itms 5 */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-gray-300" />
                            <h1 className='text-gray-500'>hosting</h1>
                        </div>

                        {/* itm6 */}

                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-gray-300" />
                            <h1 className='text-gray-500'>security</h1>
                        </div>

                        <div className='flex justify-center items-center m-4'>
                            <button className='w-60 py-2 bg-orange-500 rounded-2xl text-white'>Add Cart</button>


                        </div>



                    </div>

                    {/* card 3 */}

                    <div className='bg-white shadow-2xl shadow-gray-900 space-y-4 w-[330px] h-[460px] rounded-md'
                    data-aos = "fade-up">

                        {/* it-1 */}
                        <div className='flex flex-col space-y-5 justify-center items-center mt-5'>

                            <h1 className='text-md font-bold border border-orange-600 px-5 py-2 rounded-full
    text-orange-600'>Prenium</h1>

                            <div className='flex  items-center'>
                                <p className=''>$</p>
                                <h1 className='text-6xl font-extrabold text-orange-600'>750</h1>
                            </div>


                        </div>


                        {/*it-2  */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className=''>Strategy website </h1>
                        </div>
                        {/* it-2 */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className=''>SEO Optimization </h1>
                        </div>
                        {/* i-t-3 */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className=''>Speed  faster</h1>
                        </div>

                        {/* itm-4 */}

                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className=''>Domain</h1>
                        </div>
                        {/* itms 5 */}
                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className=''>hosting</h1>
                        </div>

                        {/* itm6 */}

                        <div className='flex items-center space-x-3 px-5'>

                            <HiCheckCircle className="text-xl text-orange-600" />
                            <h1 className=''>security</h1>
                        </div>

                        <div className='flex justify-center items-center m-4'>
                            <button className='w-60 py-2 bg-orange-500 rounded-2xl text-white'>Add Cart</button>


                        </div>



                    </div>


                </div>







            </div>
        </main>

       
      

        </>
    )
}

export default page
