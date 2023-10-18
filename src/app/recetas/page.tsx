import CardStore4 from '../components/card4'
import Presentacion from '../components/presentacion'
import receta1 from '../imgs/recetas1.png'
import recetacat1 from '../imgs/recetascat1.jpg'
import recetacat2 from '../imgs/recetascat2.jpg'
import recetacat3 from '../imgs/recetascat3.jpg'
const imagenes = [
  {
    url: recetacat1,
    label: '#Sabor a Chile'
  },
  {
    url: recetacat2,
    label: '#Sabor a Domingo'
  },
  {
    url: recetacat3,
    label: '#Sabor a Amigos'
  }
]
export default function Recetas () {
  return (
        <>
            <div className="w-full pt-16 bg-white">
                <Presentacion titulo="Recetas" descripcion="Encuentra recetas ricas y caseras para disfrutar el sabor de casa." pathUrl={receta1} />
                <h2 className='text-black bg-white text-4xl font-pacifico p-20'>Categorias de recetas</h2>
                <div className='flex overflow-x-auto w-full h-auto gap-5 md:gap-4 md:grid md:grid-cols-3 md:px-16'>
                  {
                    imagenes.map(imagen => {
                      return <CardStore4 key={imagen.label} pathUrl={imagen.url}>{imagen.label}</CardStore4>
                    })
                  }
                </div>
            </div>
        </>
  )
}
