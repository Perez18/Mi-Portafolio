import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold uppercase'>Implementacion de boton de yappy</h1>
      <p className=' text-gray-500  text-small'>Fecha: 03 de enero 2024</p>
      <div className='pt-5'>
        <h2 className='text-3xl'>Introduccion</h2>
        <p>
          El botón de Yappy es una herramienta comercial que permite realizar pagos en línea.
          Esta funcionalidad puede ser integrada en nuestro sistema mediante los API que se detallan en su documentación.
          En este artículo, exploraremos la implementación utilizando utilizando Node.js.
        </p>
        <p className='text-gray-500 pt-2'>
          <a href='https://www.yappy.com.pa/comercial/desarrolladores/boton-de-pago-yappy/sdk-node-js/' target='_blank' rel='noreferrer' className='inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'>
            Documentacion oficial para node js
            <svg class='w-4 h-4 ms-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
              <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
            </svg>
          </a>
        </p>

        <h2 className='text-3xl pt-5'>Instalacion de SDK</h2>
      </div>
    </div>
  )
}

export default page
