import Button from './button'

interface Props {
  className?: string
  children?: React.ReactNode
}

const CardStore2: React.FunctionComponent<Props> = ({ className = 'w-64 h-64 bg-slate-500', children }: Props) => {
  return (
        <section className="grid grid-rows-1 w-full h-96 border-1">
            <div className="w-full h-auto bg-slate-50 border-1 ">
                <div className="basis-[calc(50%-1rem)] w-auto md:h-full h-full relative group-hover:bg-black bg-black  group overflow-hidden ">
                    <div className="w-0.5 h-0 bg-white absolute left-4 bottom-4 transition-height duration-300 ease-in-out group-hover:h-[calc(100%-33px)] delay-75 md:delay-500 z-30"></div>
                    <div className="w-0.5 h-0 bg-white absolute right-4 top-4 transition-height duration-300 ease-in-out group-hover:h-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
                    <div className="w-0 h-0.5 bg-white absolute top-4 left-4 transition-width duration-300 ease-in-out group-hover:w-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
                    <div className="w-0 h-0.5 bg-white absolute bottom-4 right-4 transition-width duration-300 ease-in-out group-hover:w-[calc(100%-33px)] delay-75 z-30 md:delay-500"></div>
                    <img src="https://th.bing.com/th/id/R.c281b7dae7151ea226119b93ef6ba729?rik=b%2fva9IGmPZEY6Q&pid=ImgRaw&r=0" alt="" className="object-cover w-full h-full transition ease-in duration-400 md:group-hover:scale-105"/>

                    <div className="w-full h-full bg-blue-950 opacity-0 transition-opacity ease-in duration-400 group-hover:opacity-70 absolute top-0 z-10"></div>
                </div>
            </div>
            <div className="flex flex-col border-1 w-full h-40 bg-slate-500 justify-end gap-4 pl-4 pb-7">
                <h3 className="font-bold ">Empanadas de pino al horno caseras2</h3>
                <p className="text-xs ">receta oir @silvanacocina y sal lobos</p>
                <Button className='rounded-full left-4 border-x-violet-700 bg-red-500 w-52 h-8 overflow-hidden'>VER RECETA</Button>
            </div>
        </section>)
}

export default CardStore2
