import Image from 'next/image'
import card11 from '../imgs/card11.jpg'
export default function PageTradicional () {
  return (
        <>
        <div className="bg-black w-full h-screen flex flex-col pt-16">
          <div className="w-full h-full bg-slate-400">
            <div className='flex items-center justify-center w-full h-36 overflow-hidden relative'>
              <div className='flex flex-col items-center justify-center text-white absolute z-20'>
                <h1 className='text-3xl pb-3'>Sal Tradicional</h1>
                <p className='text-sm'>El sabor de nuestro hogar desde hace más de 100 años</p>
              </div>
              <div className='absolute bg-gradient-to-t from-black z-10 w-full h-full'></div>
              <Image src={card11} className='' alt='sal tradicional' width={2080} height={800}/>
            </div>

          </div>

        </div>

        </>
  )
}
