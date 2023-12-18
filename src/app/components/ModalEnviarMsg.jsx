'use client'
import React, { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody, ModalFooter, Button, Textarea
} from '@nextui-org/react'
import { ToastContainer, toast } from 'react-toastify'
import { useTheme } from 'next-themes'

const ModalEnviarMsg = (
  {
    backdrop,
    isOpen,
    onClose
  }
) => {
  const maxLength = 199
  const [message, setMessage] = useState('')
  const [longitudMsg, setLongitudMsg] = useState(0)
  const [loading, setLoading] = useState(false)

  const { theme } = useTheme()
  const notify = (message) => toast(message, { theme, autoClose: 1000 })

  function handleChange (e) {
    const msg = e.target.value
    const longitud = msg.length
    const nuevoTexto = e.target.value.slice(0, maxLength)
    setLongitudMsg(longitud)
    setMessage(nuevoTexto)
  }

  const handleSubmitMsg = async (e) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        message
      })
    }).then(() => {
      // Toast notification
      // window.alert('Your email message has been sent successfully')
      notify('Mensaje enviado')
      onClose()
      setLoading(false)
    }).finally(() => {
      onClose()
      setLoading(false)
    })

    // console.log(data)
  }

  return (
    <>
      <ToastContainer />
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmitMsg}>
              <ModalHeader className='flex flex-col gap-1'>Enviar un mensaje</ModalHeader>
              <ModalBody>
                <Textarea
                  name='message'
                  variant='bordered'
                  // labelPlacement='outside'
                  placeholder='Cuéntame en que puedo ayudarte'
                  onChange={handleChange}
                  value={message}
                />
                <p className='text-tiny text-right'>{longitudMsg}/{maxLength + 1}</p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Cerrar
                </Button>
                <Button type='sumbit' color='primary' isLoading={loading}>
                  Enviar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalEnviarMsg
