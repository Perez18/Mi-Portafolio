// import Head from 'next/head'
// import { Inter } from 'next/font/google'
// import { Providers } from './providers'
// import './globals.css'
import Head from 'next/head'
import { BreadcrumbMain } from './components/BreadcrumbMain'
import 'react-toastify/dist/ReactToastify.css'
// import Footer from './components/Footer'

export const metadata = {
  title: 'Blog - Anthony Perez',
  description: 'Explora el desarrollo web en mi blog. Tutoriales, integraciones y consejos.'
}

export default function RootLayout ({ children }) {
  return (
    <>
      <Head>
        <link
          rel='canonical'
          href='https://www.anthonyperez.xyz/blog'
          key='canonical'
        />
      </Head>
      <div className='mx-auto max-w-screen-lg px-5'>
        <BreadcrumbMain />
        {children}
      </div>
    </>
  )
}
