import Image, { type StaticImageData } from 'next/image'
import Button from './button'
interface Props {
  pathUrl?: string | StaticImageData
  children?: React.ReactNode
}

const CardStore4: React.FunctionComponent<Props> = ({ pathUrl = '', children }) => {
  return (
        <div className="basis-[calc(50%-1rem)] w-auto h-64 relative group-hover:bg-black bg-black  group overflow-hidden min-w-[75%] my-10">
            <div className="w-0.5 h-0 bg-white absolute left-4 bottom-4 transition-height duration-300 ease-in-out group-hover:h-[calc(100%-33px)] delay-75 md:delay-500 z-30"></div>
            <div className="w-0.5 h-0 bg-white absolute right-4 top-4 transition-height duration-300 ease-in-out group-hover:h-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
            <div className="w-0 h-0.5 bg-white absolute top-4 left-4 transition-width duration-300 ease-in-out group-hover:w-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
            <div className="w-0 h-0.5 bg-white absolute bottom-4 right-4 transition-width duration-300 ease-in-out group-hover:w-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
            <Image src={pathUrl} alt="" width={1440} height={800} className="object-cover w-full h-full transition ease-in duration-400 md:group-hover:scale-105"/>
            <p className="text-[11px] mb-4 text-white font-medium absolute md:text-2xl bottom-28 left-1/2 translate-x-[-50%] whitespace-nowrap transition ease-in duration-200 md:group-hover:-translate-y-6 md:group-hover:opacity-100 z-30 font-pacifico">{children}</p>
            <Button className='mb-7 rounded-3xl text-white text-xs font-semibold border-x-violet-700 bg-orange-600 w-28 h-7 absolute bottom-10 left-1/2 translate-x-[-50%] md:bottom-0 md:opacity-0 transition ease-in duration-400 md:group-hover:opacity-100 md:group-hover:-translate-y-14 z-30'>{'VER MAS>'}</Button>
            <div className="w-full h-full bg-blue-950 opacity-70 transition-opacity ease-in duration-400 group-hover:opacity-70 absolute top-0 z-10 md:opacity-40"></div>
        </div>
  )
}

export default CardStore4
