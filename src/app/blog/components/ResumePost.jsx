import Link from 'next/link'
import React from 'react'

export const ResumePost = () => {
  return (
    <div className='flex flex-row flex-wrap gap-3'>
      <Link href='/blog/implementacion-de-boton-yappy' class='max-w-sm p-6 border rounded-lg shadow hover:scale-105 transition duration-1000'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight '>IMPLEMENTACION DE BOTON DE YAPPY</h5>
        <p className='text-small pb-3 dark:text-gray-500'>Fecha: 03 de enero 2024</p>
        <p class='mb-3 font-normal  dark:text-gray-400'>
          En este blog, abordaremos la integración del botón de Yappy, una plataforma respaldada por Banco General que simplifica los pagos en línea. Exploraremos cómo esta solución puede mejorar la experiencia de pago en tu sitio web
        </p>
      </Link>
    </div>
  )
}
