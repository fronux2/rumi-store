'use client'
import { useState } from 'react'

const SideBar = () => {
  const [isBlue, setIsBlue] = useState(false)

  const toggleColor = () => {
    setIsBlue(!isBlue)
  }

  const containerClassName = isBlue ? 'containerBlue blue' : 'containerBlue '
  const hidnav = isBlue ? 'hidnav flex flex-col items-center justify-center pt-20 gap-6 zero' : ''

  return (
        <>
          <div id="navv" className='flex lg:px-16 xl:px-36 items-center justify-between w-full h-20 bg-white fixed top-0 left-0 z-1 duration-500'>
            <a className='pl-10 lg:pl-0'>LOBOS</a>
            <ul className='lg:flex lg:gap-6 text-xs font-semibold text-indigo-800 hidden'>
              <li><a href="">INICIO</a></li>
              <li><a href="">SAL TRADICIONAL</a></li>
              <li><a href="">SAL PARRILLERA</a></li>
              <li><a href="">SAL DE MAR</a></li>
              <li><a href="">LOBOS SELECCIONES</a></li>
              <li><a href="">RECETAS</a></li>
              <li><a href="">BLOG</a></li>
              <li><a href="">CONTACTO</a></li>
            </ul>
            <ul className='lg:flex gap-1 hidden'>
              <li><a href="" className='border-2 rounded-full py-2 px-3'>F</a></li>
              <li><a href="" className='border-2 rounded-full py-2 px-4'>I</a></li>
              <li><a href="" className='border-2 rounded-full py-2 px-3'>Y</a></li>
            </ul>
          </div>
            <div className='relative hid mt-5 mr-5'>
              <button onClick={toggleColor} className='burger flex flex-col p-1 absolute top-0 right-0'>
                  <div className='linea'></div>
                  <div className='linea'></div>
                  <div className='linea'></div>
              </button>
              <div className={containerClassName}>
                  <ul className={hidnav}>
                    <li><a href="">INICIO</a></li>
                    <li><a href="">SAL TRADICIONAL</a></li>
                    <li><a href="">SAL PARRILLERA</a></li>
                    <li><a href="">SAL DE MAR</a></li>
                    <li><a href="">LOBOS SELECCIONES</a></li>
                    <li><a href="">RECETAS</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">CONTACTO</a></li>
                  </ul>
              </div>
            </div>
        </>
  )
}

export default SideBar
