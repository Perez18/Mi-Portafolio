import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react'
import ProyectosData from './proyectos.data'

export const Proyectos = () => {
  return (
    <section id='proyectos'>
      <h2 className='text-4xl font-bold'>Proyectos</h2>
      <p className='pb-9 pt-2'>El mejor modo de predecir
        <span className='text-cyan-400'> el futuro  es creándolo.</span>
      </p>
      <div className='flex gap-2'>
        <span className='pt-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24' height='24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
          ><circle cx='12' cy='12' r='3' />
            <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' />
          </svg>
        </span>
        <h2 className='text-2xl font-bold'>
          Implementaciones o integraciones
        </h2>
      </div>
      <br />
      <div className='max-w-[900px] grid grid-cols-12 px-8 gap-2'>
        {/* IMPLEMENTACIONES */}
        {
            ProyectosData
              .filter(v => v.tipo === 1)
              .map(({ nombre, tipo, descripcion, srcimage, className }, index) => (
                <Card className='col-span-12 sm:col-span-4 h-[300px] rounded-none' key={index}>
                  <CardHeader className='absolute z-10 top-1 flex-col !items-start' />
                  <Image
                    removeWrapper
                    isZoomed
                    alt='Card background'
                    className='z-0 w-full h-60 object-contain rounded-none'
                    src={srcimage}
                    width={20}
                    height={20}
                  />
                  <CardFooter className='absolute bg-black/40 bottom-0 rounded-none justify-between'>
                    {descripcion}
                  </CardFooter>
                </Card>

              ))

          }
      </div>
      <br />
      <div className='flex gap-2'>
        <span className='pt-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round' strokeWidth='2'
          >
            <rect width='18' height='18' x='3' y='3' rx='2' ry='2' /><path d='M3 9h18M9 21V9' />
          </svg>
        </span>
        <h2 className='text-2xl font-bold'>
          Aplicaciones o paginas web
        </h2>
      </div>
      <br />
      <div className='max-w-[900px] grid grid-cols-12 px-8 gap-2'>
        {
            ProyectosData
              .filter(v => v.tipo === 2)
              .map(({ nombre, tipo, descripcion, srcimage, className }, index) => (
                <Card className='col-span-12 sm:col-span-4 h-[300px] rounded-none border-0' key={index}>
                  <CardHeader className='absolute z-10 top-1 flex-col !items-start' />
                  <Image
                    removeWrapper
                    isZoomed
                    alt='Card background'
                    className='z-0 w-full h-60 object-contain rounded-none'
                    src={srcimage}
                    width={20}
                    height={20}
                  />
                  <CardFooter className='absolute bg-black/40 bottom-0 rounded-none justify-between'>
                    {descripcion}
                  </CardFooter>
                </Card>

              ))

          }
      </div>
    </section>
  )
}
