import Head from 'next/head'
import { Navigation } from './components/Navigation'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anthony Perez',
  description: 'Porfafolio Personal'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/assets/luna.ico' />
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap' rel='stylesheet' />
        <meta name='viewport' content='initial-scale=1.0; maximum-scale=1.0; user-scalable=yes;' />
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
