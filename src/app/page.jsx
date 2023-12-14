const page = () => {
  return (
    <div>
      <div className='mx-auto max-w-screen-lg px-3 py-6'>
        <div class='flex flex-col items-center md:flex-row md:justify-between md:gap-x-24'>
          <div>
            <h1 class='text-3xl font-bold'>Hola, Mi Nombres es
              <span class='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'> Anthony</span> 👋
            </h1>
            <p class='mt-6 text-xl leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              <a class='text-cyan-400 hover:underline' href='/demo/astro-boilerplate'>malesuada</a> nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,
              <a class='text-cyan-400 hover:underline' href='/demo/astro-boilerplate'>consectetur</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div class='mt-3 flex gap-1'><a href='/demo/astro-boilerplate'><img class='h-12 w-12 hover:translate-y-1' src='assets/images/twitter-icon.png' alt='Twitter icon' loading='lazy' /></a>
              <a href='/demo/astro-boilerplate'>
                <img class='h-12 w-12 hover:translate-y-1' src='assets/images/facebook-icon.png' alt='Facebook icon' loading='lazy' />
              </a>
              <a href='/demo/astro-boilerplate'>
                <img class='h-12 w-12 hover:translate-y-1' src='assets/images/linkedin-icon.png' alt='Linkedin icon' loading='lazy' />
              </a>
              <a href='/demo/astro-boilerplate'>
                <img class='h-12 w-12 hover:translate-y-1' src='assets/images/youtube-icon.png' alt='Youtube icon' loading='lazy' />
              </a>
            </div>
          </div>
          <div class='shrink-0'>
            <img class='h-80 w-64' src='https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/avatar.svg' alt='Avatar image' loading='lazy' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
