import React from 'react'
import Image from 'next/image'

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
          <li>
            <h3 className='text-3xl pt-5 font-bold'>1. Rappi</h3>
            <br />
            <Image src='/assets/rappi.webp' width={200} height={200} />
            <p>
              Rappi es una startup latinoamericana <span className=' font-bold bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'> fundada en Colombia en 2015</span> que se ha convertido en una de las empresas de tecnología más prominentes de la región.
              Su principal servicio es una plataforma de entrega a domicilio que ofrece una amplia gama de productos, incluyendo alimentos, supermercado, farmacia, y más recientemente, servicios financieros y de entretenimiento.
            </p>
            <br />
            <p>
              La empresa ha experimentado un rápido crecimiento gracias a su modelo de negocio innovador, que combina tecnología, logística eficiente y
              una amplia red de repartidores, conocidos como "Rappitenderos". Rappi ha recibido múltiples rondas de financiamiento, lo que le ha permitido expandirse a varios países de América Latina, incluyendo México, Brasil, Argentina, Chile y Perú, entre otros.
            </p>
          </li>
          <li>
            <h3 className='text-3xl pt-5 font-bold'>2. Nubank </h3>
            <br />
            <Image src='/assets/nubank.webp' width={180} height={180} />
            <p>
              <span className=' font-bold bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'> Fundada en 2013 en Brasil </span>, Nubank es una fintech que ofrece servicios financieros digitales,
              incluyendo tarjetas de crédito, cuentas bancarias y préstamos, todo gestionado a través de una aplicación móvil. Es conocida por su enfoque en la transparencia y la experiencia del usuario.
            </p>
          </li>
          <li>
            <h3 className='text-3xl pt-5 font-bold'>3. Crehana  </h3>
            <br />
            <Image src='/assets/crehana.webp' width={250} height={250} />
            <p>
              es una plataforma educativa en línea que ofrece una amplia variedad de cursos y programas de formación en áreas como diseño, desarrollo web, marketing digital, fotografía,
              negocios, entre otros.<span className=' font-bold bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'>  Fundada en Perú en 2015 </span>, Crehana se ha convertido en una opción popular para estudiantes y profesionales que buscan mejorar sus habilidades y conocimientos en diferentes campos a través de cursos interactivos y tutoriales en video. La plataforma brinda acceso a contenido de alta calidad creado por expertos
              y facilita el aprendizaje a tu propio ritmo desde cualquier lugar con conexión a Internet.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Page
