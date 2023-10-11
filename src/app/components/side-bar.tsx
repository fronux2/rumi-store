'use client'
import { useState } from 'react'
import Link from 'next/link'
const links = [{
  label: 'INICIO',
  route: '/inicio'
}, {
  label: 'SAL TRADICIONAL',
  route: '/sal-tradicional'
}, {
  label: 'SAL PARRILLERA',
  route: '/sal-parrillera'
}, {
  label: 'SAL DE MAR',
  route: '/sal-mar'
}, {
  label: 'LOBOS SELECCIONES',
  route: '/selecciones'
}, {
  label: 'RECETAS',
  route: '/recetas'
}, {
  label: 'BLOG',
  route: '/blog'
}, {
  label: 'CONTACTO',
  route: '/contacto'
}]
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
            <Link href="" className='xl:pl-28 pl-10'>LOBOS</Link>
            <ul className='lg:flex hid xl:gap-6 gap-4 text-xs font-medium'>
              {links.map(link => {
                return (<Link key={link.label} href={link.route}>{link.label}</Link>)
              })}
            </ul>
            <ul className='lg:flex hid gap-2'>
              <li><Link href="" className='border-2 rounded-full py-2 px-3'>F</Link></li>
              <li><Link href="" className='border-2 rounded-full py-2 px-4'>I</Link></li>
              <li><Link href="" className='border-2 rounded-full py-2 px-3'>Y</Link></li>
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
                    {links.map(link => {
                      return <Link key={link.label} href={link.route}>{link.label}</Link>
                    })}
                  </ul>
              </div>
            </div>
          </div>
        </>
  )
}

export default SideBar2
