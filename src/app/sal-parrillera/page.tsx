import Image from 'next/image'
import Card3 from '../components/card3'
import card13 from '../imgs/card13.png'
import parrillera1 from '../imgs/parri1.jpg'
import parrillera2 from '../imgs/parri2.png'
import parrillera3 from '../imgs/parri3.jpg'
const dataCard3 = [
  {
    titulo: 'Sal Parrillera',
    descripcion: 'Salero 750g',
    imagen: parrillera1
  },
  {
    titulo: 'Sal Parrillera sabor Cebolla Caramelizada',
    descripcion: 'Salero 290g',
    imagen: parrillera2
  },
  {
    titulo: 'Sal de Mar Parrillera',
    descripcion: 'Salero 380g',
    imagen: parrillera3
  }
]
export default function Parrillera () {
  return (
        <>
            <div className="w-full flex flex-col pt-16">
            <div className="w-full h-auto bg-slate-100">
              <div className='flex items-center justify-center w-full h-36 overflow-hidden relative lg:h-80'>
                <div className='flex flex-col items-center justify-center text-white absolute z-20'>
                  <h1 className='text-3xl pb-3'>Sal Parrillera</h1>
                  <p className='text-sm'>El mejor savor para tus parrillas</p>
                </div>
                <div className='absolute bg-gradient-to-t from-black z-10 w-full h-full'></div>
                <Image src={card13} className='' alt='sal tradicional' width={1440} height={800}/>
              </div>
              <main className='grid grid-cols-2 lg:grid-cols-4 p-5 gap-2 lg:px-64'>
                {dataCard3.map(card3 => {
                  return <Card3 key={card3.titulo} pathUrl={card3.imagen} titulo={card3.titulo} descripcion={card3.descripcion} />
                })}
              </main>
            </div>
          </div>
        </>
  )
}
