import mar1 from '../imgs/mar1.jpg'
import mar2 from '../imgs/mar2.jpg'
import mar3 from '../imgs/mar3.jpg'
import mar4 from '../imgs/mar4.png'
import mar5 from '../imgs/mar5.jpg'
import mar6 from '../imgs/mar6.jpg'
import card12 from '../imgs/card12.jpg'
import Card3 from '../components/card3'
import Image from 'next/image'
import Presentacion from '../components/presentacion'
const dataCard3 = [
  {
    titulo: 'Sal de Mar Entrefina',
    descripcion: 'Doypack de 800g',
    imagen: mar1
  },
  {
    titulo: 'Sal de Mar Extra Gruesa',
    descripcion: 'Doypack de 800g',
    imagen: mar2
  },
  {
    titulo: 'Sal de Mar Extra Gruesa',
    descripcion: 'Molinillo 88g',
    imagen: mar3
  },
  {
    titulo: 'Sal de Mar fina',
    descripcion: 'bolsa 1k',
    imagen: mar4
  },
  {
    titulo: 'Sal de Mar Parrillera',
    descripcion: 'Salero 380g',
    imagen: mar5
  }
]
export default function SalDeMar () {
  return (
        <>
            <div className="bg-black w-full flex flex-col pt-16">
            <div className="w-full h-auto bg-slate-100">
              <Presentacion pathUrl={card12} titulo={'Lobos Sal de Mar'} descripcion={'Sabor profundo para todas tus comidas'}/>
              <main className='grid grid-cols-2 lg:grid-cols-4 p-5 gap-2 lg:px-64'>
                {dataCard3.map(card3 => {
                  return <Card3 key={card3.titulo} pathUrl={card3.imagen} titulo={card3.titulo} descripcion={card3.descripcion} />
                })}
              </main>
              <section className='bg-slate-200 grid grid-cols-1 md:grid-cols-2 md:py-10 items-center'>
                <div className='m-10 lg:pl-44'>
                  <Image src={mar6} alt='' width={1440} height={800}/>
                </div>

                <div className='p-6 pl-16 md:pl-2'>
                  <h1 className='text-3xl font-semibold'>El origen de nuestra sal de mar</h1>
                  <p className='text-sm'>Lleva toda la intensidad del mar a tus comidas con Sal de Mar Lobos</p>
                  <button className='rounded-full bg-red-600 px-4 py-2 mt-6 whitespace-nowrap'>VER MÁS</button>
                </div>
              </section>
            </div>
          </div>
        </>
  )
}
