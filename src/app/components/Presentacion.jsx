// import Image from 'next/image'
import Astronauta from '../icons/Astronauta'

export const Presentacion = () => {
  return (
    <section className='flex flex-col items-center md:flex-row md:justify-between md:gap-x-24 py-20'>
      <div className='h-200'>
        <h1 className='text-5xl font-bold'>Hola, Mi Nombre es
          <span className='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'> Anthony</span>
        </h1>
        <p className='mt-6 text-xl leading-9'>Desarrollador web
          <span className='text-cyan-400'> entusiasta y versatil </span>
          tanto en el diseño atractivo de las páginas como en la funcionalidad interna que hace que todo
          <span className='text-cyan-400'> funcione sin problemas.</span>
        </p>
        <div className='mt-5 flex gap-1'>
          <a href='https://github.com/Perez18' rel='canonical' className='border border-cyan-50 py-2 px-3 rounded-lg transition duration-400 ease-in-out hover:scale-110'>
            <svg
              xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
              viewBox='0 0 24 24'
            ><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
            </svg>
          </a>
          &nbsp;
          <a href='https://www.linkedin.com/in/anthonyp18/' rel='canonical' className='border border-cyan-50 py-2 px-3 rounded-lg transition duration-400 ease-in-out hover:scale-110'>
            <svg
              xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='none' stroke='currentColor'
              strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' />
              <circle cx='4' cy='4' r='2' />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <Astronauta width={300} height={300} />
      </div>
    </section>
  )
}
