import { Card, CardHeader, CardFooter, Button, Image } from '@nextui-org/react'

export const Proyectos = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold pb-10'>Proyectos</h2>
      <div className='max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8'>
        <Card className='col-span-12 sm:col-span-4 h-[300px]'>
          <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
            {/* <h4 className='text-black font-medium text-large'>Stream the Acme event</h4> */}
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            alt='Card background'
            className='z-0 w-full h-50 object-cover'
            src='https://psicologiacr.com/wp-content/uploads/2017/12/Factura-obligatoria-1.jpg'
          />
          <CardFooter className='absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
            <div>
              <p className='text-white/70 text-sm'>Integracion de facturacion Electronica</p>
              {/* <p className='text-black text-tiny'>Get notified.</p> */}
            </div>
            <Button className='text-tiny bg-white' radius='full' size='sm'>
              <Image
                src='/assets/github.svg'
                alt='github'
                width={20}
                height={20}
              />
            </Button>
          </CardFooter>
        </Card>
        <Card className='col-span-12 sm:col-span-4 h-[300px]'>
          <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
            {/* <h4 className='text-white font-medium text-large'>Contribute to the planet</h4> */}
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            isBlurred
            alt='Card background'
            className='z-0 w-full h-64 object-cover'
            src='/proyectos/botonyappy.png'
            // width={100}
            // height={100}
          />
          <CardFooter className='absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
            <div>
              <p className='text-white/70 text-sm'>Integracion de boton de yappy</p>
              {/* <p className='text-black text-tiny'>Get notified.</p> */}
            </div>
            <Button className='text-tiny bg-white' radius='full' size='sm'>
              <Image
                src='/assets/github.svg'
                alt='github'
                width={20}
                height={20}
              />
            </Button>
          </CardFooter>
        </Card>
        <Card className='col-span-12 sm:col-span-4 h-[300px]'>
          <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
            {/* <p className='text-sm text-black/60 uppercase font-bold'>Portal de pagos</p> */}
            {/* <h4 className='text-white font-medium text-large'>Creates beauty like a beast</h4> */}
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            alt='Card background'
            className='z-0 w-full h-full object-cover'
            src='/proyectos/portalpago.jpeg'
          />
          <CardFooter className='absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
            <div>
              <p className='text-white/70 text-sm'>Portal de pago</p>
              {/* <p className='text-black text-tiny'>Get notified.</p> */}
            </div>
            <Button className='text-tiny' radius='full' size='sm'>
              <a href='!#' target='_blank' rel='noreferrer'>
                ir a app
              </a>
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className='w-full h-[300px] col-span-12 sm:col-span-5'>
          <CardHeader className='absolute z-10 top-1 flex-col items-start'>
            {/* <p className='text-sm text-white/80 uppercase font-bold'>Portal de cliente</p> */}
            {/* <h4 className='text-black font-medium text-2xl'>Acme camera</h4> */}
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            alt='Card example background'
            className='z-0 w-full h-full object-cover'
            src='/proyectos/portalcliente.png'
          />
          <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
            <div>
              <p className='text-white text-sm'>Portal de cliente</p>
              {/* <p className='text-black text-tiny'>Get notified.</p> */}
            </div>
            {/* <Button className='text-tiny' color='primary' radius='full' size='sm'>
              ir app
            </Button> */}
          </CardFooter>
        </Card>
        <Card isFooterBlurred className='w-full h-[300px] col-span-12 sm:col-span-7'>
          <CardHeader className='absolute z-10 top-1 flex-col items-start'>
            {/* <p className='text-tiny text-white/60 uppercase font-bold'>Your day your way</p> */}
            {/* <h4 className='text-white/90 font-medium text-xl'>Your checklist for better sleep</h4> */}
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            alt='Relaxing app background'
            className='z-0 w-full h-full object-cover'
            src='/proyectos/controlprestamo.png'
          />
          <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
            <div className='flex flex-grow gap-2 items-center'>
              <Image
                removeWrapper
                alt='Breathing app icon'
                className='rounded-full w-10 h-11 bg-black'
                src='https://nextui.org/images/breathing-app-icon.jpeg'
              />
              <div className='flex flex-col'>
                <p className='text-sm text-white/60'>Administrador de prestamo</p>
                {/* <p className='text-tiny text-white/60'>Get a good night's sleep.</p> */}
              </div>
            </div>
            <Button radius='full' size='sm'>
              <a href='https://control-prestamo.vercel.app/' target='_blank' rel='noreferrer'>
                ir a app
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
