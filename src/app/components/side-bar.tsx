'use client'
import { useState } from 'react'

const SideBar2 = () => {
  const [isBlue, setIsBlue] = useState(false)

  const toggleColor = () => {
    setIsBlue(!isBlue)
  }

  const containerClassName = isBlue ? 'containerBlue blue' : 'containerBlue '

  return (
        <>
          <div id="navv" className='flex h-24 w-full relative xl:pl-2 xl:gap-6 justify-between items-center'>
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
              <div className='absolute z-30 top-0 right-0'>
                <button onClick={toggleColor} className='burger flex flex-col p-1 top-3 right-3 fixed'>
                    <div className='linea'></div>
                    <div className='linea'></div>
                    <div className='linea'></div>
                </button>
              </div>

              <div className={containerClassName + ' text-white pt-28'}>
                  <ul className={'flex flex-col gap-4 pl-5'}>
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
