import Footer from '@/components/Footer'
import Info from '@/components/Info'
import Nav from '@/components/Nav'
import Services from '@/components/Services'
import Showcase from '@/components/Showcase'
import Testamino from '@/components/Testamino'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <main>

    <div  className=' w-full md:h-[620px] h-[470px] bg-cover '
    style={{backgroundImage: `linear-gradient(rgb(0 0 0/95%),
    rgb(0 0 0/95%)), url(./image/img.png)`}}>
      <Nav/>
      <Showcase/>
    </div>
    <div>
    <Services/>
    <Info/>
    <Testamino/>
    </div>

    <div className='mt-40'>
      <Footer/>
    </div>

  </main>
  </>
  )
}
