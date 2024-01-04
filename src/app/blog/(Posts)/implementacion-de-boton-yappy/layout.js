export const metadata = {
  title: 'Blog - Implementacion del boton de yappy',
  description: 'El botón de Yappy es una herramienta comercial brindanda por banco general que permite realizar pagos en línea'
}

export default function RootLayout ({ children }) {
  return (
    <div className='mx-auto max-w-screen-lg px-3'>
      {children}
    </div>
  )
}
