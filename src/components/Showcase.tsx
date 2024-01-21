'use client'

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Showcase() {
    return (
        <div className='max-w-5xl mx-auto p-8'>

            <div className='p'>
                <h1 className='text-md  font-extrabold text-orange-800'>BUSSINESS SOLUTION</h1>
            </div>
            <div className='my-4 space-y-4'>

                <Carousel  className='my-5 space-y-5' autoPlay showArrows={false} infiniteLoop showStatus= {false} showIndicators={true} 
                 interval={5000}>
                    <div className='mt-7 md:mt-16 space-y-5'>

                        <h1 className='md:text-6xl text-2xl md:font-extrabold text-white px-3 '>WE ARE CREATING  <br /><span className='text-orange-700'>AGENCY</span> </h1>
                        <div className='px-10 md:px-18   '>

                            <p className='text-white font-DM leading-7 '>We are a company that makes various software,<br /> the company also does advertising and technology consulting, <br />
                                and we have employees who are trained in the work they do.</p>
                        </div>

                    </div>
                    <div className='mt-7 md:mt-16 space-y-5'>

                        <h1 className='md:text-6xl text-2xl md:font-extrabold text-white px-3 '>WE ARE CREATING  <br /><span className='text-orange-700'>AGENCY</span> </h1>
                        <div className='px-10 md:px-18   '>

                            <p className='text-white font-DM leading-7 '>We are a company that makes various software,<br /> the company also does advertising and technology consulting, <br />
                                and we have employees who are trained in the work they do.</p>
                        </div>

                    </div>


                </Carousel>



            </div>

        </div>
    )
}

export default Showcase
