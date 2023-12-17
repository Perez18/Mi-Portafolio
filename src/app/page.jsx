import Footer from './components/Footer'
import { Presentacion } from './components/Presentacion'
import { Proyectos } from './components/Proyectos'
import { Skills } from './components/Skills'

const page = () => {
  return (
    <div className='mx-auto max-w-screen-lg px-3 py-6'>
      <Presentacion />
      <Proyectos />
      <Skills />
      <Footer />
    </div>
  )
}

export default page
