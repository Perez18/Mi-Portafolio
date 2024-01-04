import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold uppercase'>Implementacion de boton de yappy</h1>
      <p className=' text-gray-500  text-small'>Fecha: 03 de enero 2024</p>
      <div className='pt-5'>
        <h2 className='text-3xl font-bold'>Introduccion</h2>
        <p>
          El botón de Yappy es una herramienta comercial de banco general que permite realizar pagos en línea.
          Esta plataforma puede ser integrada en nuestro sistema mediante los API que se detallan en su documentación.
          En este artículo, exploraremos la implementación utilizando la tecnologia de Node.js.
        </p>

        <h2 className='text-3xl pt-5 font-bold'>Instalacion de SDK</h2>
        <code>
          npm install yappy-node-sdk-X.X.X.tgz
        </code>
      </div>
    </div>
  )
}

export default page
