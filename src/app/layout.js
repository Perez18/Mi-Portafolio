/* eslint-disable no-undef */
import Head from 'next/head'
import { Navigation } from './components/Navigation'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio - Anthony Perez',
  description: 'Desarrollador web entusiasta y versatil tanto en el diseño atractivo de las páginas como en la funcionalidad interna que hace que todo funcione sin problemas.',
  openGraph: {
    title: 'Portafolio web - Anthony Perez',
    description: 'Desarrollador web entusiasta con habilidades en todas las áreas tanto en el diseño atractivo de las páginas como en la funcionalidad interna que hace que todo funcione sin problemas.',
    images: '/astronauta.png'
  },
  metadataBase: new URL('https://www.anthonyperez.xyz'),
  alternates: {
    canonical: './'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <Head>
        <meta name='author' content='Anthony Perez' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap' rel='stylesheet' />
        <link rel='canonical' href='https://www.anthonyperez.xyz/' />
        <meta name='viewport' content='initial-scale=1.0; maximum-scale=1.0; user-scalable=yes;' />
        <meta
          name='keyword'
          content='Portafolio web, Desarrollador web, fullstack,Desarrollo en Panama'
        />
      </Head>
      <body className={inter.className}>
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics />
        )}
        <Providers>
          <main>
            <Navigation />
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  )
}
