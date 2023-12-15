import Image from 'next/image'

export const Presentacion = () => {
  return (
    <section className='flex flex-col items-center md:flex-row md:justify-between md:gap-x-24 py-24'>
      <div className='h-200'>
        <h1 className='text-4xl font-bold'>Hola, Mi Nombres es
          <span className='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'> Anthony</span> 👋
        </h1>
        <p className='mt-6 text-xl leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          <a className='text-cyan-400 hover:underline' href='/demo/astro-boilerplate'>malesuada</a> nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,
          <a className='text-cyan-400 hover:underline' href='/demo/astro-boilerplate'>consectetur</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className='mt-3 flex gap-1'><a href='/demo/astro-boilerplate'><img class='h-12 w-12 hover:translate-y-1' src='assets/images/twitter-icon.png' alt='Twitter icon' loading='lazy' /></a>
          <a href='/demo/astro-boilerplate'>
            <img class='h-12 w-12 hover:translate-y-1' src='assets/images/facebook-icon.png' alt='Facebook icon' loading='lazy' />
          </a>
          <a href='/demo/astro-boilerplate'>
            <img className='h-12 w-12 hover:translate-y-1' src='assets/images/linkedin-icon.png' alt='Linkedin icon' loading='lazy' />
          </a>
          <a href='/demo/astro-boilerplate'>
            <img className='h-12 w-12 hover:translate-y-1' src='assets/images/youtube-icon.png' alt='Youtube icon' loading='lazy' />
          </a>
        </div>
      </div>
      <div className='shrink-0'>
        <Image src='/astronauta.png' alt='me' width='300' height='300' loading='lazy' />
      </div>
    </section>
  )
}
