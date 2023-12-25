'use client'
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, useDisclosure } from '@nextui-org/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import ModalEnviarMsg from './ModalEnviarMsg'
import { isMobile } from 'react-device-detect'

export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = React.useState('')

  const handleOpen = () => {
    if (isMobile) {
      setBackdrop('')
    } else {
      setBackdrop('blur')
    }
    onOpen()
  }

  return (
    <>
      <Navbar>
        <NavbarBrand className='text-black'>
          <Link href='/' className='text-black'>
            <ThemeSwitcher />
          </Link>
        </NavbarBrand>
        <NavbarContent as='ul' justify='end'>
          <NavbarItem>
            <Link color='foreground' key='proyectos' href='#proyectos' className='gap-8 space-y-6 tracking-wide lg:flex lg:space-y-0 lg:text-sm lg:items-center'>
              Proyectos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color='success' href='#' variant='flat' onPress={handleOpen}>
              Enviar Mensaje
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <ModalEnviarMsg backdrop={backdrop} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
