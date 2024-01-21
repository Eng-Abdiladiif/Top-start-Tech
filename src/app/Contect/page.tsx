import React from 'react'
import  Nav  from "../../components/Nav"

function page() {
  return (
    <div className=' w-full md:h-[620px] h-[470px] bg-cover '
    style={{backgroundImage: `linear-gradient(rgb(0 0 0/95%),
    rgb(0 0 0/95%)), url(./image/img.png)`}}>

   <div>

    <Nav/>
   </div>

    </div>
  )
}

export default page