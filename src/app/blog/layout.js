// import Head from 'next/head'
// import { Inter } from 'next/font/google'
// import { Providers } from './providers'
// import './globals.css'
import { BreadcrumbMain } from './components/BreadcrumbMain'
import 'react-toastify/dist/ReactToastify.css'
// import Footer from './components/Footer'

export const metadata = {
  title: 'Portafolio - Blog',
  description: 'Blog'
}

export default function RootLayout ({ children }) {
  return (
    <div className='mx-auto max-w-screen-lg px-3'>
      <BreadcrumbMain />
      {children}
    </div>
  )
}
