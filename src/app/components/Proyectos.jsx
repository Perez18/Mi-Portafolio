import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react'
import ProyectosData from './proyectos.data'

export const Proyectos = () => {
  return (
    <section id='proyectos'>
      <h2 className='text-4xl font-bold'>Proyectos</h2>
      <p className='pb-9 pt-2'>El mejor modo de predecir
        <span className='text-cyan-400'> el futuro  es creándolo.</span>
      </p>
      <h2 className='text-2xl font-bold'>🚀 Implementaciones o integraciones</h2>
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
      <h2 className='text-2xl font-bold'>🎨 Aplicaciones o paginas web</h2>
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
