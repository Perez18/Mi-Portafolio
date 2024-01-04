import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold uppercase'>Implementacion de boton de yappy</h1>
      <p className=' text-gray-500  text-small'>Fecha: 03 de enero 2024</p>
      <div className='pt-5'>
        <h2 className='text-3xl font-bold'>Introduccion</h2>
        <p>
          El botón de Yappy es una herramienta comercial de banco general que permite realizar pagos en línea.
          Esta plataforma puede ser integrada en nuestro sistema mediante los API que se detallan en su documentación.
          En este artículo, exploraremos la implementación utilizando la tecnologia de Node.js.
        </p>

        <h2 className='text-3xl pt-5 font-bold'>Instalacion de SDK</h2>
        <pre className='bg-slate-400/10 py-6'>
          <code>
            npm install yappy-node-sdk-X.X.X.tgz
          </code>
        </pre>
        <p>o</p>
        <pre className='bg-slate-400/10 py-6 truncate'>
          <code>
            npm install https://github.com/BancoGeneral/Boton-de-Pago-Yappy_Node.js/releases/download/X.X.X/yappy-node-back-sdk-X.X.X.tar
          </code>
        </pre>

        <h2 className='text-3xl pt-5 font-bold'>Importar SDK</h2>
        <pre className='language-bash bg-slate-400/10 py-6' tabindex='0'>
          <code className='language-bash'>
            import * as yappy from "yappy-node-sdk";
          </code>
        </pre>

        <h2 className='text-3xl pt-5 font-bold'>Obtener url de pago</h2>
        <p>
          En este punto, es crucial enviar nuestra información de pago al API para obtener un URL de pago. Este enlace nos dirigirá a la plataforma de Yappy.
        </p>
        <pre className='language-bash bg-slate-400/10 py-6' tabindex='0'>
          <code className='language-bash'>
            {` const payment= {
              total: 20.17,
              subtotal: 20.00,
              shipping: 0.00,
              discount: 0.00,
              taxes: 0.17,
              orderId: '1234',
              successUrl: 'https://www.urlsuccess.com',
              failUrl: 'https://www.urlfail.com',
              tel: '61122345',
              domain: 'https://www.tutienda.com',
         }
          const response = await yappyClient.getPaymentUrl(payment); // Pago normal
          const response = await yappyClient.getPaymentUrl(payment,true); //Para donaciones
          const response = await yappyClient.getPaymentUrl(payment,true, true); //Para donaciones, en modo prueba
          const response = await yappyClient.getPaymentUrl(payment,false, true); //Pago normal, en modo prueba
          `}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default page
