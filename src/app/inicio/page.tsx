import CardStore from '../components/card'
import CardStore2 from '../components/card2'
import Carousel from '../components/carousel'
import NavPage from '../components/nav-page'

export default function PageIndex () {
  return (
    <section className=''>      

      <NavPage>NAV</NavPage>
      <Carousel>CAROUSEL</Carousel>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <CardStore>El sabor de nuestro hogar desde hace mas de 100 años</CardStore>
        <CardStore>Sabor profuncdo para todas tus comidas</CardStore>
        <CardStore>El mejor sabor para tus parrillas</CardStore>       
        <CardStore>Sales de especialidad para disfrutar una experiencia en sabor</CardStore>
      C</section>
      <section className='flex overflow-x-auto relative bg-slate-400 px-5 py-10 md:px-24 md:py-24'>
        <CardStore2/>
        <CardStore2/>    
        <CardStore2/>
      </section>
      <section className='flex md:grid overflow-x-auto gap-2 px-5 py-10 md:px-24 md:py-24 grid-cols-12 md:grid-cols-3 h-auto w-full bg-black'>
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
