'use client'
import land from '../imgs/landscape.jpg'
import viet from '../imgs/vietnam.jpg'
import krka from '../imgs/krka.jpg'

import { useEffect, useState } from 'react'

const slides = ['https://www.tusoporteonline.es/blog/wp-content/uploads/2014/04/paisaje.jpg',
  'https://th.bing.com/th/id/R.847c3d3b960b202e1e8bbb3d1da28359?rik=4TrvzV1KDvPX3Q&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.L_8KIAeoPwMbkav8LOkuOwHaFs?pid=ImgDet&rs=1']

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [time, setTime] = useState(false)
  /* const images = [land, viet, krka] */

  const nextImage = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const prevImage = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    setTimeout(() => {
      prevImage()
      setTime(true)
    }, 13000)
  }, [time])

  useEffect(() => {
    setTime(false)
  }, [])

  return (
    <div>
      <button onClick={prevImage}>prev</button>
      <button onClick={nextImage}>next</button>
      <div className='h-[660px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-1000'
        ></div>
      </div>
    </div>
  )
}

export default Carousel
