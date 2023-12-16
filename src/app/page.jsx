import { Presentacion } from './components/Presentacion'
import { Proyectos } from './components/Proyectos'

const page = () => {
  return (
    <div className='mx-auto max-w-screen-lg px-3 py-6'>
      <Presentacion />
      <Proyectos />
    </div>
  )
}

export default page
