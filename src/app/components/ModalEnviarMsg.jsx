'use client'
import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody, ModalFooter, Button, Textarea
} from '@nextui-org/react'

const ModalEnviarMsg = (
  {
    backdrop,
    isOpen,
    onClose
  }
) => {
  return (
    <>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Enviame un mensaje</ModalHeader>
              <ModalBody>
                <Textarea
                  variant='bordered'
                  labelPlacement='outside'
                  placeholder='Cuentame en que puedo ayudarte'
                />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Enviar mensaje
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalEnviarMsg
