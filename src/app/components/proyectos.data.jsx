import Link from 'next/link'

// tipo 1: implementacion de servicios tipo 2: aplicaciones web o pagina web
export default [
  {
    nombre: 'Integración de facturacion Electronica',
    tipo: 1,
    descripcion: (
      <div>
        <p className='text-white/90 text-sm'>Integracion de facturacion Electronica</p>
        {/* <p className='text-black text-tiny'>Get notified.</p> */}
      </div>
    ),
    srcimage: '/proyectos/factelect.webp',
    className: 'py-5'
  },
  {
    nombre: 'Integración de boton de yappy',
    tipo: 1,
    descripcion: (
      <>
        <div>
          <p className='text-white/90 text-sm'>Integracion de boton de yappy</p>
        </div>
        <Link
          href='blog/implementacion-de-boton-yappy'
          rel='noreferrer'
          className=' bg-blue-600 px-4  text-white py-2 rounded-lg font-bold text-xs'
        >
          blog
        </Link>
      </>
    ),
    srcimage: '/proyectos/yappy.png',
    className: 'py-5'
  },
  {
    nombre: 'Portal de pago',
    tipo: 2,
    descripcion: (
      <>
        <div>
          <p className='text-white/90 text-sm'>Portal de pago</p>
          {/* <p className='text-black text-tiny'>Get notified.</p> */}
        </div>
        <div className=' bg-purple-700 text-white  px-4 py-2 rounded-lg font-bold text-xs cursor-pointer'>
          capturas
        </div>
      </>
    ),
    srcimage: '/proyectos/portalpago.jpeg',
    className: 'py-5'
  },
  {
    nombre: 'Portal de cliente',
    tipo: 2,
    descripcion: (
      <>
        <div>
          <p className='text-white/90 text-sm'>Portal de cliente</p>
        </div>
        <div className=' bg-purple-700 text-white  px-4 py-2 rounded-lg font-bold text-xs cursor-pointer'>
          capturas
        </div>
      </>
    ),
    srcimage: '/proyectos/portalcliente.webp',
    className: 'py-5'
  },
  {
    nombre: 'Portal de cliente',
    tipo: 2,
    descripcion: (
      <>
        <div>
          <p className='text-white/90 text-sm'>Administrador de prestamo</p>
        </div>
        <div className=' bg-purple-700 text-white  px-4 py-2 rounded-lg font-bold text-xs cursor-pointer'>
          capturas
        </div>
      </>
    ),
    srcimage: '/proyectos/controlprestamo.png',
    className: 'py-5'
  }

]
