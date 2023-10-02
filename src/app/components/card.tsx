import Button from './button'
import Image from 'next/image'
interface Props {
  className?: string
  children?: React.ReactNode
}

const CardStore: React.FunctionComponent<Props> = ({ className = 'flex flex-col justify-end items-center py-2 w-full h-60 bg-slate-500', children }: Props) => {
  return <section >
        <div className="basis-[calc(50%-1rem)] w-auto md:h-96 h-64 relative group-hover:bg-black bg-black  group overflow-hidden ">
            <div className="w-0.5 h-0 bg-white absolute left-4 bottom-4 transition-height duration-300 ease-in-out group-hover:h-[calc(100%-33px)] delay-75 md:delay-500 z-30"></div>
            <div className="w-0.5 h-0 bg-white absolute right-4 top-4 transition-height duration-300 ease-in-out group-hover:h-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
            <div className="w-0 h-0.5 bg-white absolute top-4 left-4 transition-width duration-300 ease-in-out group-hover:w-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
            <div className="w-0 h-0.5 bg-white absolute bottom-4 right-4 transition-width duration-300 ease-in-out group-hover:w-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
            <Image src="https://th.bing.com/th/id/R.c281b7dae7151ea226119b93ef6ba729?rik=b%2fva9IGmPZEY6Q&pid=ImgRaw&r=0" alt="" className="object-cover w-full h-full transition ease-in duration-400 md:group-hover:scale-105"/>
            <p className="text-[11px] mb-4 text-white font-medium absolute md:text-sm bottom-28 left-1/2 translate-x-[-50%] whitespace-nowrap md:bottom-0 md:opacity-0 transition ease-in duration-400 md:group-hover:-translate-y-32 md:group-hover:opacity-100 z-30">{children}</p>
            <Button className='mb-7 rounded-3xl border-x-violet-700 bg-orange-400 w-36 h-9 absolute bottom-10 left-1/2 translate-x-[-50%] md:bottom-0 md:opacity-0 transition ease-in duration-400 md:group-hover:opacity-100 md:group-hover:-translate-y-14 z-30'>{'VER MAS>'}</Button>
            <div className="w-full h-full bg-blue-950 opacity-0 transition-opacity ease-in duration-400 group-hover:opacity-70 absolute top-0 z-10"></div>
        </div>
    </section>
}

export default CardStore
