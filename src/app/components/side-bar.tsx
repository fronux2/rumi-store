'use client'
import { useState } from 'react'

const SideBar2 = () => {
  const [isBlue, setIsBlue] = useState(false)

  const toggleColor = () => {
    setIsBlue(!isBlue)
  }

  const containerClassName = isBlue ? 'containerBlue blue' : 'containerBlue '
  const hidnav = isBlue ? 'flex flex-col gap-4 pl-5 sm:justify-center sm:items-center' : 'hidnav flex flex-col gap-4 pl-5 sm:justify-center sm:items-center'

  return (
        <>
          <div id="navv" className='flex xl:h-24 h-16 w-full z-40 xl:pl-2 bg-white fixed xl:gap-6 justify-between items-center'>
            <a className='xl:pl-28 pl-10'>LOBOS</a>
            <ul className='lg:flex hid xl:gap-6 gap-4 text-xs font-medium'>
              <li><a href="">INICIO</a></li>
              <li><a href="">SAL TRADICIONAL</a></li>
              <li><a href="">SAL PARRILLERA</a></li>
              <li><a href="">SAL DE MAR</a></li>
              <li><a href="">LOBOS SELECCIONES</a></li>
              <li><a href="">RECETAS</a></li>
              <li><a href="">BLOG</a></li>
              <li><a href="">CONTACTO</a></li>
            </ul>
            <ul className='lg:flex hid gap-2'>
              <li><a href="" className='border-2 rounded-full py-2 px-3'>F</a></li>
              <li><a href="" className='border-2 rounded-full py-2 px-4'>I</a></li>
              <li><a href="" className='border-2 rounded-full py-2 px-3'>Y</a></li>
            </ul>
            <div className=''>
              <div className='flex absolute z-40 top-0 right-0'>
                <button onClick={toggleColor} className='w-10 h-10 bg-slate-50 flex flex-col top-3 right-3 fixed z-40 gap-1 justify-center items-center lg:hidden rounded-md'>
                    <div className='w-6 h-1 bg-orange-400'></div>
                    <div className='w-6 h-1 bg-orange-400'></div>
                    <div className='w-6 h-1 bg-orange-400'></div>
                </button>
              </div>

              <div className={containerClassName + ' text-white pt-28'}>
                  <ul className={hidnav}>
                    <li><a href="">INICIO1</a></li>
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
          </div>

        </>
  )
}

export default SideBar2
