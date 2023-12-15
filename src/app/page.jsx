import { Presentacion } from './components/Presentacion'
import { Proyectos } from './components/Proyectos'
import { ThemeSwitcher } from './components/ThemeSwitcher'

const page = () => {
  return (
    <div className='mx-auto max-w-screen-lg px-3 py-6'>
      <ThemeSwitcher />
      <Presentacion />
      <Proyectos />
    </div>
  )
}

export default page
