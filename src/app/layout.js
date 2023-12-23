import Head from 'next/head'
import { Navigation } from './components/Navigation'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio - Anthony Perez',
  description: 'Anthony Perez - Desarrollador web'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <Head>
        <meta name='author' content='Anthony Perez' />
        <link rel='shortcut icon' href='/assets/luna.ico' />
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap' rel='stylesheet' />
        <meta name='viewport' content='initial-scale=1.0; maximum-scale=1.0; user-scalable=yes;' />
        <meta
          name='keyword'
          content='Portafolio web, Desarrollador web, fullstack,Desarrollo en Panama'
        />
      </Head>
      <body className={inter.className}>
        <Providers>
          <main>
            <Navigation />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
