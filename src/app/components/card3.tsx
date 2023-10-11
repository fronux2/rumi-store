import Image, { type StaticImageData } from 'next/image'
import img30 from '../imgs/card30.jpg'
interface Props {
  pathUrl?: string | StaticImageData
  titulo?: string
  descripcion?: string
}
const Card3: React.FunctionComponent<Props> = ({ pathUrl = img30, titulo, descripcion }) => {
  return (
        <>
            <section className='w-full h-80 bg-slate-50'>
                <div className='h-52 w-full'>
                  <Image src={pathUrl} height={1440} width={800} alt='' className='w-full h-full object-cover'/>
                </div>

                <div className='p-4'>
                  <h1 className='text-base font-bold'>{titulo}</h1>
                  <p className='text-xs font-medium'>{descripcion}</p>
                  <p>VER PRODUCTO</p>
                </div>

            </section>
        </>
  )
}

export default Card3
