import React from 'react'
import  footerData  from "../../context/Footer.json"

function Footer() {
  return (
    <div  className='h-[530px]  md:h-[220px] w-full bg-blue-950'>


        <div className='max-w-7xl mx-auto p-5  mt-5 flex flex-col  md:flex-row
        items-center justify-between '>


            {/* one */}
            <div  className='space-y-4'> 
                <h1 className=' text-white md:text-xl text-2xl
                font-bold'><span className='text-orange-600'>Top-</span>Star Tech</h1>
                <h2 className='text-white leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Provident error autem dignissimos a aperiam possimus omnis, <br />fugiat quod rem consectetur.</h2>
            </div>
            {/* two */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    footerData.map((data) => (

                        <div key={data.id} className='mt-10 md:mt-0 flex  space-x-5'>

                            <div className=' space-y-3'>

                                <h1 className='text-white text-md font-DM'>{data['item-1']}</h1>
                                <h2 className='text-white text-md font-DM'>{data['item-2']}</h2>
                                <h3 className='text-white text-md font-DM'>{data['item-3']}</h3>
                                <h4 className='text-white text-md font-DM'>{data['item-4']}</h4>
                            </div>




                        </div>
                    ))
                }



            </div>

            
        </div>






    </div>
  )
}

export default Footer