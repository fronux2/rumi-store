'use client'
import CardStore from '../components/card'
import CardStore2 from '../components/card2'
import Carousel from '../components/carousel'
import card11 from '../imgs/card11.jpg'
import card12 from '../imgs/card12.jpg'
import card13 from '../imgs/card13.png'
import card14 from '../imgs/card14.jpg'
import card21 from '../imgs/card21.jpg'
import card22 from '../imgs/card22.jpg'
import card23 from '../imgs/card23.jpg'
import Link from 'next/link'

const links = [
  {
    url: '/sal-tradicional',
    label: 'sal tradicional'
  },
  {
    url: '/sal-mar',
    label: 'mar'
  },
  {
    url: '/sal-parrillera',
    label: 'parrillera'
  }, {
    url: '/selecciones',
    label: 'selecciones'
  }
]

export default function PageIndex () {
  return (
    <section className='bg-white'>
      <div className='bg-slate-200'>
        <Carousel/>
        <div className='bg-slate-200 px-5 py-10'>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Link href={links[0].url}><CardStore pathUrl={card11}>El sabor de nuestro hogar desde hace mas de 100 años</CardStore></Link>
            <Link href={links[1].url}><CardStore pathUrl={card12}>Sabor profuncdo para todas tus comidas</CardStore></Link>
            <Link href={links[2].url}><CardStore pathUrl={card13}>El mejor sabor para tus parrillas</CardStore></Link>
            <Link href={links[3].url}><CardStore pathUrl={card14}>Sales de especialidad para disfrutar una experiencia en sabor</CardStore></Link>
          </section>
        </div>
      </div>

      <h2 className='bg-slate-100 md:pl-72 md:pr-72 px-5 py-4 text-3xl md:pt-8 font-pacifico'>Recetas</h2>
      <section className='flex lg:px-60 md:pl-6 md:pr-6 overflow-x-auto relative px-5 py-10 md:px-24 md:py-5 gap-3 bg-slate-100'>
        <CardStore2 pathUrl={card21}/>
        <CardStore2 pathUrl={card22}/>
        <CardStore2 pathUrl={card23}/>
      </section>
      <h2 className='w-full bg-slate-200 px-5 md:pt-10 text-3xl md:pl-72 md:pr-72 font-pacifico'>Blog</h2>
      <section className='flex md:pl-6 md:pr-6 lg:px-60 md:grid overflow-x-auto gap-2 px-5 py-10 md:px-24 md:py-10 grid-cols-12 md:grid-cols-3 h-auto w-full bg-slate-200'>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>
      </section>
    </section>

  )
}
