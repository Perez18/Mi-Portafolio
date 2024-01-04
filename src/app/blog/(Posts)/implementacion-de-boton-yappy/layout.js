export const metadata = {
  title: 'Blog - Implementacion del boton de yappy',
  description: 'Blog'
}

export default function RootLayout ({ children }) {
  return (
    <div className='mx-auto max-w-screen-lg px-3'>
      {children}
    </div>
  )
}
