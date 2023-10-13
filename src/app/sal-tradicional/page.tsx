import Image from 'next/image'
import card11 from '../imgs/card11.jpg'
import img30 from '../imgs/card30.jpg'
import img31 from '../imgs/card31.jpg'
import img32 from '../imgs/card32.jpg'
import img33 from '../imgs/card33.jpg'
import img34 from '../imgs/card34.jpg'
import img35 from '../imgs/card35.jpg'
import img36 from '../imgs/card36.jpg'
import img37 from '../imgs/card37.jpg'
import img38 from '../imgs/card38.jpg'
import img39 from '../imgs/card39.jpg'
import Card3 from '../components/card3'
import img1 from '../imgs/imagen1.jpg'
import Presentacion from '../components/presentacion'

const dataCard3 = [
  {
    titulo: 'Pote 850g',
    descripcion: 'Formato funcional',
    imagen: img31
  },
  {
    titulo: 'Sal fina',
    descripcion: 'Bolsa de 1kg',
    imagen: img32
  },
  {
    titulo: 'Sal fina',
    descripcion: 'Doypack de 1kg',
    imagen: img33
  },
  {
    titulo: 'Sal Gruesa',
    descripcion: 'Bolsa de 1kg',
    imagen: img34
  },
  {
    titulo: 'Sal Gruesa',
    descripcion: 'Doypack de 1kg',
    imagen: img35
  },
  {
    titulo: 'Sal Light',
    descripcion: 'Doypack 1kg',
    imagen: img36
  },
  {
    titulo: 'Salero 125g',
    descripcion: 'Ideal para uso individual',
    imagen: img37
  },
  {
    titulo: 'Salero 250g',
    descripcion: 'Formato Intermedio',
    imagen: img38
  },
  {
    titulo: 'Salero 500g',
    descripcion: 'Formato grande',
    imagen: img39
  },
  {
    titulo: 'Sachet 1g sal fina',
    descripcion: 'para llevar siempre contigo',
    imagen: img30
  }]
export default function PageTradicional () {
  return (
        <>
          <div className="bg-black w-full flex flex-col pt-16">
            <div className="w-full h-auto bg-slate-100">
              <Presentacion pathUrl={card11} titulo='Sal Tradicional' descripcion='El sabor de nuestro hogar desde hace más de 100 años'/>
              <main className='grid grid-cols-2 lg:grid-cols-4 p-5 gap-2 lg:px-64'>
                {dataCard3.map(card3 => {
                  return <Card3 key={card3.titulo} pathUrl={card3.imagen} titulo={card3.titulo} descripcion={card3.descripcion} />
                })}
              </main>
              <section className='md:p-6 bg-slate-200 md:flex md:flex-row md:items-center md:h-96'>
                <div className='md:w-[50%] md:h-auto md:pl-60 md:'>
                  <Image src={img1} alt='' width={1440} height={800}/>
                </div>

                <div className='p-6'>
                  <h1 className='text-xl font-semibold'>Recetas</h1>
                  <p className='text-sm'>conoce las mejores recetas de Sal Lobos</p>
                  <button className='rounded-full bg-red-600 px-4 py-2 mt-6 whitespace-nowrap'>VER MÁS</button>
                </div>
              </section>
            </div>
          </div>
        </>
  )
}
