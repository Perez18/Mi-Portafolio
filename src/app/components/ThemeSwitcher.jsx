'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
// import { MoonIcon } from './MoonIcon'
// import SunIcon from './sun.svg'

export function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <button onClick={e => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
        {theme === 'dark' ? <img src='/moon.svg' alt='sun' width={28} height={28} /> : <img src='/sun.svg' alt='sun' width={30} height={30} />}
      </button>
    </div>
  )
};
