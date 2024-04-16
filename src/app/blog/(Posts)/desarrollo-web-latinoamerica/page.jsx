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

        <h2 className='text-3xl pt-5 font-bold'>Salarios en latinoamerica</h2>
        <p>
          A continuación, presentamos una tabla que resume los salarios medios mensuales de programadores en dólares estadounidenses (USD) para cada país mencionado.
          Esta información es útil para profesionales del sector tecnológico, empresas en busca de talento
          y cualquiera persona interesada en conocer las tendencias salariales en la industria de la programación en Latinoamérica en 2024.
        </p>
        <br />
        <table class='border-collapse border border-gray-200'>
          <thead>
            <tr class='light:bg-gray-200'>
              <th class='border border-gray-200 px-3 py-2'>País</th>
              <th class='border border-gray-200 px-3 py-2'>Salario (USD/mes)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='border border-gray-200 px-3 py-2'>Panamá</td>
              <td class='border border-gray-200 px-3 py-2'>$2,250</td>
            </tr>
            <tr>
              <td class='border border-gray-200 px-3 py-2'>Chile</td>
              <td class='border border-gray-200 px-3 py-2'>$2,045</td>
            </tr>
            <tr>
              <td class='border border-gray-200 px-3 py-2'>Perú</td>
              <td class='border border-gray-200 px-3 py-2'>$1,360</td>
            </tr>
            <tr>
              <td class='border border-gray-200 px-3 py-2'>Uruguay</td>
              <td class='border border-gray-200 px-3 py-2'>$890</td>
            </tr>
            <tr>
              <td class='border border-gray-200 px-3 py-2'>Colombia</td>
              <td class='border border-gray-200 px-3 py-2'>$1,050</td>
            </tr>
            <tr>
              <td class='border border-gray-200 px-3 py-2'>México</td>
              <td class='border border-gray-200 px-3 py-2'>$1,800</td>
            </tr>
            <tr>
              <td class='border border-gray-200 px-3 py-2'>Argentina</td>
              <td class='border border-gray-200 px-3 py-2'>$1,050</td>
            </tr>
          </tbody>
        </table>
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
