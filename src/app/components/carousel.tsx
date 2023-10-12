'use client'
import 'animate.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import img1 from '../imgs/imagen1.jpg'
import img12 from '../imgs/imagen12.png'
import img2 from '../imgs/imagen2.jpg'
import img22 from '../imgs/imagen22.png'
import img3 from '../imgs/imagen3.jpg'
import img32 from '../imgs/imagen32.png'

// import required modules
import { Navigation, Autoplay } from 'swiper/modules'

export default function Carousel () {
  return (
    <>
      <Swiper loop={true} navigation={true} autoplay={{ delay: 5600, disableOnInteraction: false }} modules={[Navigation, Autoplay]} className="mySwiper">

            <SwiperSlide>
                <div className='flex flex-col sm:flex-row relative w-full bg-slate-200' >
                    <Image src={img1} alt="" className='imagen-recortada' width={1440} height={800}/>
                    <div className='container-car lg:pt-56'>
                        <h1 className='font-bold text-4xl'>El Sabor de Nuestro Hogar</h1>
                        <h1 className='pt-2'>Desde hace más de 100 años en la mesa de todo Chile</h1>
                    </div>
                    <Image src={img12} alt='' className=' absolute sm:top-[55%] lg:left-[50%] top-[50%] sm:left-[40%] left-[40%] translateImg' width={600} height={600}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col sm:flex-row relative w-full bg-slate-200' >
                    <Image src={img2} alt="" className='imagen-recortada' width={1440} height={800}/>
                    <div className='container-car lg:pt-56'>
                        <h1 className='font-bold text-4xl'>Mira nuestra serie</h1>
                        <h1 className='sm:pt-2 sm:pb-2'>Por que una receta con historia, siempre tiene más sabor.</h1>
                        <h1 className='p-2 mt-4 pl-6 rounded-3xl bg-red-600 w-40 text-white'>CONOCE MÁS</h1>
                    </div>
                    <Image src={img22} alt='' className='absolute sm:top-[55%] lg:left-[50%] top-[50%] sm:left-[40%] left-[40%] translateImg' width={600} height={600}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col sm:flex-row relative w-full bg-slate-200' >
                    <Image src={img3} alt="" className='imagen-recortada' width={1440} height={800}/>
                    <div className='container-car lg:pt-56'>
                        <h1 className='font-bold  text-4xl'>Lobos Selecciones</h1>
                        <h1 className='pt-2 pb-2'>sales de especialidad para disfrutar una experiencia en sabor.</h1>
                        <h1 className='p-2 mt-4 pl-6 rounded-3xl bg-red-600 w-40 text-white'>CONOCE MÁS</h1>
                    </div>
                    <Image src={img32} alt='' className=' absolute sm:top-[55%] lg:left-[50%] top-[50%] sm:left-[40%] left-[40%] translateImg' width={600} height={600}/>
                </div>
            </SwiperSlide>

      </Swiper>
    </>
  )
}
