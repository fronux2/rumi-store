import Button from './button'
import Image, { type StaticImageData } from 'next/image'
import card0 from '../imgs/card0.jpg'
interface Props {
  pathUrl?: string | StaticImageData
  children?: React.ReactNode
}

const CardStore2: React.FunctionComponent<Props> = ({ pathUrl = card0, children }: Props) => {
  return (
        <section className="grid grid-rows-1 w-full h-96 border-1 md:min-w-0 min-w-[75%]">
            <div className="w-full h-auto bg-slate-50 border-1 ">
                <div className="basis-[calc(50%-1rem)] w-auto md:h-full h-full relative group-hover:bg-black bg-black  group overflow-hidden ">
                    <div className="w-0.5 h-0 bg-white absolute left-4 bottom-4 transition-height duration-300 ease-in-out group-hover:h-[calc(100%-33px)] delay-75 md:delay-500 z-30"></div>
                    <div className="w-0.5 h-0 bg-white absolute right-4 top-4 transition-height duration-300 ease-in-out group-hover:h-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
                    <div className="w-0 h-0.5 bg-white absolute top-4 left-4 transition-width duration-300 ease-in-out group-hover:w-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
                    <div className="w-0 h-0.5 bg-white absolute bottom-4 right-4 transition-width duration-300 ease-in-out group-hover:w-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
                    <Image src={pathUrl} alt="" width={1440} height={800} className="object-cover w-full h-full transition ease-in duration-400 md:group-hover:scale-105"/>

                    <div className="w-full h-full bg-blue-950 opacity-0 transition-opacity ease-in duration-400 group-hover:opacity-70 absolute top-0 z-10"></div>
                </div>
            </div>
            <div className="flex flex-col border-1 w-full h-40 bg-white justify-end gap-4 pl-4 pb-7">
                <h3 className="font-bold text-base font-sans">Empanadas de pino al horno caseras</h3>
                <p className="text-xs font-sans ">receta por @silvanacocina y sal lobos</p>
                <Button className='rounded-full left-4 border-x-violet-700 bg-red-500 w-28  h-7 text-xs text-white font-semibold overflow-hidden'>VER RECETA</Button>
            </div>
        </section>)
}

export default CardStore2
