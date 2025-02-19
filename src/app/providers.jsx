'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import './globals.css'

export function Providers ({ children }) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider defaultTheme='dark' attribute='class'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
