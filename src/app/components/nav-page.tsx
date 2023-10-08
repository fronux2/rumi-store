'use client'
import { useEffect } from 'react'
const NavPage = () => {
  useEffect(() => {
    const listener = () => {
      const header = document.querySelector('#navv')
      header?.classList.toggle('sticky', window.scrollY > 0)
    }

    window.addEventListener('scroll', listener)

    // Limpia el listener cuando el componente se desmontal
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])
  return (
    <div id="navv" className='flex lg:px-36 items-center justify-between w-full h-20 bg-white fixed top-0 left-0 z-50 duration-500'>
      <a className=''>LOBOS</a>
      <ul className='flex lg:gap-6 text-xs font-semibold text-indigo-800'>
        <li><a href="">INICIO</a></li>
        <li><a href="">SAL TRADICIONAL</a></li>
        <li><a href="">SAL PARRILLERA</a></li>
        <li><a href="">SAL DE MAR</a></li>
        <li><a href="">LOBOS SELECCIONES</a></li>
        <li><a href="">RECETAS</a></li>
        <li><a href="">BLOG</a></li>
        <li><a href="">CONTACTO</a></li>
      </ul>
      <ul className='flex gap-1'>
        <li><a href="" className='border-2 rounded-full py-2 px-3'>F</a></li>
        <li><a href="" className='border-2 rounded-full py-2 px-4'>I</a></li>
        <li><a href="" className='border-2 rounded-full py-2 px-3'>Y</a></li>
      </ul>
    </div>
  )
}

export default NavPage
