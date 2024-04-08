export const metadata = {
  title: 'Desarrollo web en latinoamerica',
  description: 'En los últimos años, el desarrollo web en Latinoamérica ha experimentado un crecimiento significativo, impulsado por el aumento en el acceso a Internet y la adopción de tecnologías digitales. Se observa una tendencia hacia la creación de sitios web responsivos, aplicaciones web progresivas (PWA) y la implementación de tecnologías como React, Angular, Node.js y Laravel en el desarrollo de aplicaciones web'
}

export default function RootLayout ({ children }) {
  return (
    <div className='mx-auto max-w-screen-lg px-3'>
      {children}
    </div>
  )
}
