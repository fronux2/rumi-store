import Presentacion from '../components/presentacion'
import card14 from '../imgs/card14.jpg'
import select1 from '../imgs/selecciones1.jpg'
import select2 from '../imgs/selecciones2.jpg'
import Image from 'next/image'
export default function Selecciones () {
  return (
        <>
        <div className="w-full h-auto pt-24">
          <Presentacion pathUrl={card14} titulo={'Lobos Selecciones'} descripcion={'Sales de especialidad para disfrutr una experiencia en sabors'}/>

          <section className='bg-slate-50 grid grid-cols-1 md:grid-cols-2 md:py-10 items-center'>
            <div className='m-10 lg:pl-44'>
              <Image src={select1} alt='' width={1440} height={800}/>
            </div>
            <div className='p-6 pl-16 md:pl-2'>
              <h1 className='text-3xl font-semibold'>Sal Rosada del Himalaya</h1>
              <p className='text-sm w-3/5'>Dale un toque de originalidad y color a tus platos con nuestra Sal Rosada del Himalaya,
                disponible en diversos formatos para lucirte en tus preparaciones.
              </p>
              <button className='rounded-full text-white bg-red-600 px-4 py-2 mt-6 whitespace-nowrap'>VER MÁS</button>
            </div>
          </section>

          <section className='bg-slate-200 grid grid-cols-1 md:grid-cols-2 md:py-10 items-center p-60 gap-16'>
            <div className='text-right'>
              <h1 className='text-3xl font-semibold'>Sal de Mar Piramidal</h1>
              <p className='text-sm ml-6'>Descubre nuestros auténtiocs cristales de sal de mar en forma de pirámides, obtenidos
              a travez de un delicado proceso de extracción manual de la orilla del mar.</p>
              <button className='rounded-full text-white bg-red-600 px-4 py-2 mt-6 whitespace-nowrap'>VER MÁS</button>
            </div>
            <div className=''>
              <Image src={select2} alt='' width={1440} height={800}/>
            </div>
          </section>

        </div>

        </>
  )
}
