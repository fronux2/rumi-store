import CardStore from '../components/card'
import CardStore2 from '../components/card2'
import Carousel from '../components/carousel'
import NavPage from '../components/nav-page'

export default function PageIndex () {
  return (
    <section className='bg-white'>
      <NavPage>NAV</NavPage>
      <Carousel/>
      <div className='bg-slate-200 px-5 py-10'>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <CardStore pathUrl='https://sallobos.cl/content/uploads/2018/07/Header-Productos-1440x800-Lobos.jpg'>El sabor de nuestro hogar desde hace mas de 100 años</CardStore>
          <CardStore pathUrl='https://sallobos.cl/content/uploads/2020/08/Header_SaldeMar1920x600px.jpg'>Sabor profuncdo para todas tus comidas</CardStore>
          <CardStore pathUrl='https://sallobos.cl/content/uploads/2020/09/Header_Parrillera.png'>El mejor sabor para tus parrillas</CardStore>
          <CardStore pathUrl='https://sallobos.cl/content/uploads/2022/04/range-selecciones.jpg'>Sales de especialidad para disfrutar una experiencia en sabor</CardStore>
        </section>
      </div>

      <section className='flex overflow-x-auto relative bg-slte-100 px-5 py-10 md:px-24 md:py-24 gap-3 bg-slate-100'>
        <CardStore2 pathUrl='https://sallobos.cl/content/uploads/bfi_thumb/empanadas-silvana-ox0l2122m4fdsfqdala0mi5mlmwtz26ueejkaynv40.jpg'/>
        <CardStore2 pathUrl='https://sallobos.cl/content/uploads/bfi_thumb/Receta_Lobos_1440x800_03-nsw50ze0pu4cnzp5lc88yy4brjsivqsqhho6e79vls.jpg'/>
        <CardStore2 pathUrl='https://sallobos.cl/content/uploads/bfi_thumb/Header-Recetas-1440x800-Lobos-Papas-con-bacon-o06v17z6qgumnhj9f959dxd3wglq2hi4lsw1n5yvy8.jpg'/>
      </section>
      <section className='flex md:grid overflow-x-auto gap-2 px-5 py-10 md:px-24 md:py-24 grid-cols-12 md:grid-cols-3 h-auto w-full bg-slate-200'>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>
        <CardStore2/>

      </section>
    </section>

  )
}
