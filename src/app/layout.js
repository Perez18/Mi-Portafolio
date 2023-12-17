import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import { Navigation } from './components/Navigation'
import Head from 'next/head'

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
