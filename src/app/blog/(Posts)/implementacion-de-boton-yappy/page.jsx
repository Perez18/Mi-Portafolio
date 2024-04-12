import React from 'react'
import CopyClipboard from '../../components/copyClipBoard'

const page = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold uppercase'>Implementación Del Botón De Yappy</h1>
      <p className=' text-gray-500  text-small'>Fecha: 03 de enero 2024</p>
      <div className='pt-5'>
        <h2 className='text-3xl font-bold'>Introduccion</h2>
        <p>
          El botón de Yappy es una app comercial que permite realizar pagos en línea.
          Esta plataforma puede ser integrada en nuestro sistema mediante los API que se detallan en su documentación.
          En este artículo, exploraremos la implementación utilizando la tecnologia de Node.js.
        </p>
        <p>Bancos que lo ofrecen: <span className='font-bold'>Banco general y Credicorp bank </span> </p>
        <h2 className='text-3xl pt-5 font-bold'>Instalacion de SDK</h2>
        <br />
        <CopyClipboard text='npm install yappy-node-sdk-X.X.X.tgz' />
        <p>o</p>
        <CopyClipboard text='npm install https://github.com/BancoGeneral/Boton-de-Pago-Yappy_Node.js/releases/download/X.X.X/yappy-node-back-sdk-X.X.X.tar' />
        <h2 className='text-3xl pt-5 font-bold'>Importar SDK</h2>
        <br />
        <CopyClipboard text='import * as yappy from "yappy-node-sdk";' />
        <h2 className='text-3xl pt-5 font-bold'>Obtener url de pago</h2>
        <p>
          En este punto, es crucial enviar nuestra información de pago al sistema de yappy(SDK) para obtener un URL de pago, este enlace nos dirigirá a la plataforma de Yappy.
        </p>
        <br />
        <p>
          Si deseas integrarla con tus diferentes plataforma de pagos, que es en nuestro caso procederemos a desarrollar una API que utilizara el método POST <strong className='text-cyan-400'>"api/pagosbgurl".</strong> Este metodo internamente gestionará el siguiente código:
        </p>
        <br />
        <CopyClipboard text={` const payment= {
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
        />
        <h2 className='text-3xl pt-5 font-bold'>Procesamiento del Pago</h2>
        <p>
          Una vez que hemos obtenido la URL de pago de Yappy, es necesario implementar la lógica para procesar el pago cuando Yappy redirige de vuelta a nuestro sistema.
          Para hacer esto, necesitamos configurar un endpoint que tenga el formato <strong className='text-cyan-400'> “/api/pagosbg”</strong>  en nuestra aplicación Node.js para manejar la respuesta de Yappy.
        </p>
        <br />
        <CopyClipboard text={` 
            app.get('/api/pagosbg', async (req, res) => {
                try {
                    // Procesar la respuesta de Yappy
                    const success = yappyClient.validateHash(req.query); // success puede ser true o false

                    //Respuesta de yappy
                    const { orderId, status, confirmationNumber, hash } = req.query;

                    // status:
                    /* «E» para Ejecutado. El cliente confirmó el pago y se completó la compra.
                    * – «R» para Rechazado. Cuando el cliente no confirma el pago dentro de los cinco minutos que dura la vida del pedido.
                    * – «C» para Cancelado. El cliente inició el proceso, pero canceló el pedido en el app de Banco General.
                    */

                    // Realizar acciones necesarias con la respuesta de Yappy
                    // Por ejemplo, actualizar el estado del pedido en la base de datos
        
                    // Enviar respuesta al sistema de Yappy indicando que hemos recibido la notificación correctamente
                    res.json({ status: status, message: 'Notificación de pago recibida correctamente' });
                } catch (error) {
                    console.error('Error al procesar la notificación de Yappy:', error);
                    res.status(500).json({ status: 'error', message: 'Error interno al procesar la notificación de pago' });
                }
            });
                
          `}
        />
      </div>
    </div>
  )
}

export default page
