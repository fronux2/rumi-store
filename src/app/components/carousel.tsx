'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Autoplay } from 'swiper/modules'

export default function Carousel () {
  return (
    <>
      <Swiper loop={true} navigation={true} autoplay={{ delay: 13000, disableOnInteraction: false }} modules={[Navigation, Autoplay]} className="mySwiper">

            <SwiperSlide>
                <div className='flex col relative w-full h-[600px]' >
                    <Image src='https://sallobos.cl/content/uploads/bfi_thumb/Header_Inicio_1440x800_Lobos-ny064syqelzrmursoohpk0m25tb65w8126da8dsxkw.jpg' alt="" className='imagen-recortada h-full w-full' width={600} height={600}/>
                    <div>
                        <p className='margeo'>Ewl sabor de nuestro hogar</p>
                    </div>
                    <Image src='https://sallobos.cl/content/uploads/bfi_thumb/2-nqzlgqlwg365yyspn16bjq7gxnm2fk9xa4ttg7shs0.png' alt='' className='w-40 h-40 absolute top-[50%] left-[40%] translateImg' width={600} height={600}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex col relative w-full' >
                    <Image src='https://sallobos.cl/content/uploads/bfi_thumb/marcela-plato-scaled-p62es1lqeqd5gk5mvvod2tbvfw92u6nyhasokh83r4.jpg' alt="" className='imagen-recortada' width={600} height={600}/>
                    <div>
                        <p className='margeo'>Ewl sabor de nuestro hogar</p>
                    </div>
                    <Image src='https://sallobos.cl/content/uploads/bfi_thumb/iconito-p62ep90ijy44g2cbfu85n44u4miwjd45iixvquwpog.png' alt='' className='w-40 h-40 absolute top-[50%] left-[40%] translateImg' width={600} height={600}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex col relative w-full' >
                    <Image src='https://sallobos.cl/content/uploads/bfi_thumb/home-selecciones-ppn1slpe9xigffyoy161lt19p7sfpj7y7swh1rv11c.jpg' alt="" className='imagen-recortada' width={600} height={600}/>
                    <div>
                        <p className='margeo'>Ewl sabor de nuestro hogar</p>
                    </div>
                    <Image src='https://sallobos.cl/content/uploads/bfi_thumb/home-logoselecciones-ppn1smmqx94e8u1x17ljne80jk5wi0v5mzi421d4ao.png' alt='' className='w-40 h-40 absolute top-[50%] left-[40%] translateImg' width={600} height={600}/>
                </div>
            </SwiperSlide>

      </Swiper>
    </>
  )
}
