export const metadata = {
  title: 'Desarrollo web en latinoamerica',
  description: `En los últimos años, el desarrollo web en Latinoamérica 
               ha experimentado un crecimiento significativo, impulsado por el aumento en el acceso a Internet. 
               `,
  openGraph: {
    title: 'Desarrollo web en latinoamerica',
    description: 'En los últimos años, el desarrollo web en Latinoamérica ha experimentado un crecimiento significativo, impulsado por el aumento en el acceso a Internet y la adopción de tecnologías digitales.',
    images: '/blog.avif'
  },
  metadataBase: new URL('https://www.anthonyperez.xyz'),
  alternates: {
    canonical: './'
  }
}

export default function RootLayout ({ children }) {
  return (
    <>
      <div className='mx-auto max-w-screen-lg px-3'>
        {children}
      </div>
    </>
  )
}
