import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import { Navigation } from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anthony Perez',
  description: 'Porfafolio Personal'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
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
