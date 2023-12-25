import Image from 'next/image'

export const Presentacion = () => {
  return (
    <section className='flex flex-col items-center md:flex-row md:justify-between md:gap-x-24 py-24'>
      <div className='h-200'>
        <h1 className='text-4xl font-bold'>Hola, Mi Nombres es
          <span className='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'> Anthony</span> 👋
        </h1>
        <p className='mt-6 text-xl leading-9'>Desarrollador entusiasta
          <span className='text-cyan-400'>   con habilidades en todas las áreas </span>
          tanto en el diseño atractivo de las páginas como en la funcionalidad interna que hace que todo
          <span className='text-cyan-400'> funcione sin problemas.</span>
        </p>
        <div className='mt-3 flex gap-1'>
          <a href='https://github.com/Perez18' target='_blank' rel='noreferrer'>
            <Image className='hover:translate-y-1' src='/assets/github.svg' alt='Github' width='40' height='40' loading='lazy' />
          </a>
        </div>
      </div>
      <div className='shrink-0'>
        <Image src='/astronauta.png' alt='me' width='300' height='300' />
      </div>
    </section>
  )
}
