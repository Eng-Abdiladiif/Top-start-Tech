"use client"

import Image from 'next/image';
import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import m1 from "../../public/image/m1.png"
import m2 from "../../public/image/m2.png"
import m3 from "../../public/image/m3.png"
import   Aos  from "aos"
import   "aos/dist/aos.css"

function Testamino() {

    useEffect(()  => {

        Aos.init({duration:2000})
    })
    return (
        <div className=' max-w-3xl mx-auto  w-[500px] h-[400px] bg-cover my-10 '
            style={{ backgroundImage: ` url(./image/quote.png)` }}>



            <div>


                {/* one */}
                <div className='flex flex-col justify-center space-y-3 items-center'
                data-aos = "fade-up">

                    <p className="text-md font-bold text-orange-600">TESTIMONIALS</p>
                    <h1 className='text-2xl  font-bold'>CUSTOMER'S AWESOME  <br />
                        <span className='text-orange-500'>FEEDBACK.</span></h1>
                </div>

                {/* Two */}
                <div>

                    <Carousel autoPlay showArrows={false} infiniteLoop showStatus= {false} showIndicators={true} 
                 interval={5000}>

                        {/* one */}
                        <div>

                            <div>

                                <Image src={m1} className=' max-w-sm rounded-full' width={0} height={0} alt='image' />

                            </div>

                            <div className='px-10 mt-2 space-y-2'>
                                <h1 className='font-DM'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Nobis, dignissimos?</h1>

                                <h2 className='font-bold text-md'>Neyjaye</h2>
                                <p className='text-orange-500 font-bold'>Fullstack web developer</p>


                            </div>
                        </div>
                       
                        {/* two */}
                        <div >

                            <div  data-aos = "fade-up">

                                <Image src={m1} className=' max-w-sm rounded-full' width={0} height={0} alt='image' />

                            </div>

                            <div className='px-10 mt-2 space-y-2'>
                                <h1 className='font-DM'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Nobis, dignissimos?</h1>

                                <h2 className='font-bold text-md'>Neyjaye</h2>
                                <p className='text-orange-500 font-bold'>Fullstack web developer</p>


                            </div>
                        </div>
                       
                        {/* three */}
                        <div>

                            <div  data-aos = "fade-up">

                                <Image src={m1} className=' max-w-sm rounded-full' width={0} height={0} alt='image' />

                            </div>

                            <div className='px-10 mt-2 space-y-2'>
                                <h1 className='font-DM'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Nobis, dignissimos?</h1>

                                <h2 className='font-bold text-md'>Neyjaye</h2>
                                <p className='text-orange-500 font-bold'>Fullstack web developer</p>


                            </div>
                        </div>
                       


                    </Carousel>


                </div>



            </div>




        </div>
    )
}

export default Testamino
