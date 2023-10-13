import Presentacion from '../components/presentacion'
import receta1 from '../imgs/recetas1.png'
export default function Recetas () {
  return (
        <>
            <div className="w-full pt-16">
                <Presentacion titulo="Recetas" descripcion="Encuentra recetas ricas y caseras para disfrutar el sabor de casa." pathUrl={receta1} />
            </div>
        </>
  )
}
