import React from 'react'
import Image from 'next/image'
import startups from './startups.data'
const Page = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold uppercase'>
        DESARROLLO WEB EN LATINOAMERICA
      </h1>
      <p className=' text-gray-500  text-small'>
        Fecha: 05 de abril 2024
      </p>
      <div className='pt-5'>
        <h2 className='text-3xl font-bold'>Introduccion</h2>
        <p>
          En los últimos años, el desarrollo web en Latinoamérica ha experimentado un
          crecimiento significativo, impulsado por el aumento en el acceso a Internet y la adopción de tecnologías digitales. Se observa una tendencia hacia la creación de sitios web responsivos, aplicaciones web progresivas (PWA) y la implementación de tecnologías como React, Angular, Node.js y Laravel en el desarrollo de aplicaciones web.
        </p>

        <h2 className='text-3xl pt-5 font-bold'>
          Ecosistema de startups y emprendimiento
        </h2>
        <p>
          Varios países de Latinoamérica, como Brasil, México, Colombia, Argentina y Chile, han emergido como centros de innovación y emprendimiento en el sector de tecnología y desarrollo web. Se han creado numerosas startups y empresas tecnológicas que ofrecen servicios de desarrollo web,
          diseño UX/UI, marketing digital y más.
        </p>
        <br />
        <h2 className='text-3xl pt-5 font-bold'>Staturp latinoamerica</h2>
        <p>Exploraremos algunas de las startups más destacadas de la región.</p>
        <ul>

          {
          startups.map(({ nombre, descripcion, srcimage, className }, index) => (
            <li key={index}>
              <h3 className='text-3xl pt-5 font-bold'>{index + 1}. {nombre}</h3>
              <br />
              <Image src={srcimage} width={200} height={200} className={className} />
              {descripcion}
            </li>
          ))
        }
        </ul>
        <br />
        <h2 className='text-3xl pt-5 font-bold'>
          Resumen
        </h2>
        <p>
          El desarrollo web en Latinoamérica ha evolucionado significativamente en los últimos años, mostrando un fuerte crecimiento,
          una creciente oferta de servicios y capacitación, así como desafíos que están siendo abordados con iniciativas de colaboración y mejora continua.
        </p>
      </div>
    </div>
  )
}

export default Page
