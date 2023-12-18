import React from 'react'
// import { JavascriptIcon } from './Icon/JavascriptIcon'
// import { Csharp } from './Icon/Csharp'
import { Card, CardBody, Image } from '@nextui-org/react'

export const Skills = () => {
  return (
    <div className='pt-24'>
      <h2 className='text-4xl font-bold pb-10'>Habilidades</h2>
      {/* Lenguaje de programacion */}
      <section className='flex flex-wrap gap-5'>
        <Card className='hover:scale-110 max-w-full'>
          <div className='flex md:flex-row'>
            <Image src='/lenguaje/javascript.png' className='pt-2' alt='javascript' width={80} height={80} />
            <CardBody>
              <section>
                <h5 className='text-lg'>Javascript</h5>
                <p className='text-tiny'>Desarrollo de web app con experiencia en React js, Next js y Node.js</p>
              </section>
            </CardBody>
          </div>
        </Card>
        <Card className='hover:scale-110'>
          <div className='flex md:flex-row'>
            <Image src='/lenguaje/csharp.png' className='pt-2' alt='csharp' width={80} height={80} />
            <CardBody>
              <section>
                <h5 className='text-lg'>C#</h5>
                <p className='text-tiny'>Aplicaciones empresariales en .NET </p>
              </section>
            </CardBody>
          </div>
        </Card>
        <Card className='hover:scale-110'>
          <div className='flex md:flex-row'>

            <Image src='/lenguaje/php.svg' className='pt-2' alt='php' width={80} height={80} />
            <CardBody>
              <section>
                <h5 className='text-lg'>php</h5>
                <p className='text-tiny'>Creación de aplicaciones utilizando el framework laravel</p>
              </section>
            </CardBody>
          </div>
        </Card>
      </section>

      {/* otras */}
      <section className='flex flex-wrap gap-5 pt-4'>
        <Card className='hover:scale-110'>
          <div className='flex md:flex-row'>
            <Image src='/lenguaje/sql.png' className='pt-2' alt='sql' width={80} height={80} />
            <CardBody>
              <section>
                <h5 className='text-lg'>SQL</h5>
                <p className='text-tiny'>
                  Diseño y optimización de bases de datos.
                </p>
              </section>
            </CardBody>
          </div>
        </Card>
        <Card className='hover:scale-110'>
          <div className='flex md:flex-row'>
            <Image src='/lenguaje/git.png' className='pt-2' alt='javascript' width={80} height={80} />
            <CardBody>
              <section>
                <h5 className='text-lg'>Git</h5>
                <p className='text-tiny'>Experiencia en control de versiones con Git</p>
              </section>
            </CardBody>
          </div>
        </Card>
        <Card className='hover:scale-110'>
          <div className='flex md:flex-row'>
            <Image src='/lenguaje/apex.png' className='pt-2' alt='csharp' width={80} height={100} />
            <CardBody>
              <section>
                <h5 className='text-lg'>Oracle Apex</h5>
                <p className='text-tiny'>Desarrollo de web app sobre el entorno de bases de datos oracle</p>
              </section>
            </CardBody>
          </div>
        </Card>
      </section>
    </div>
  )
}
