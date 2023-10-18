import Image, { type StaticImageData } from 'next/image'

interface Props {
  titulo: string
  descripcion: string
  pathUrl: string | StaticImageData
}

const Presentacion: React.FunctionComponent<Props> = ({ titulo, descripcion, pathUrl }) => {
  return (
        <div className='flex items-center justify-center w-full h-36 overflow-hidden relative lg:h-80'>
                <div className='flex flex-col items-center justify-center text-white absolute z-20'>
                  <h1 className='text-3xl pb-3 font-pacifico'>{titulo}</h1>
                  <p className='text-sm'>{descripcion}</p>
                </div>
                <div className='absolute bg-gradient-to-t from-black z-10 w-full h-full'></div>
                <Image src={pathUrl} className='' alt='sal tradicional' width={1440} height={800}/>
              </div>
  )
}

export default Presentacion
