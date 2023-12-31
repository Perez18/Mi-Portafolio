'use client'
import React from 'react'
import ModalEnviarMsg from './ModalEnviarMsg'
import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, useDisclosure } from '@nextui-org/react'
import { isMobile } from 'react-device-detect'
import MapPinIcon from '../icons/MapPin'

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
        <NavbarBrand>
          <ThemeSwitcher />
          <p className='text-small lg:ml-5'>
            <MapPinIcon />
            Panama
          </p>
        </NavbarBrand>
        <NavbarContent as='ul' justify='end'>
          <NavbarItem>
            <Link color='foreground' key='proyectos' href='/#proyectos' className='gap-8 space-y-6 tracking-wide lg:flex lg:space-y-0 lg:text-sm lg:items-center'>
              Proyectos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' key='proyectos' href='/blog' className='gap-8 space-y-6 tracking-wide lg:flex lg:space-y-0 lg:text-sm lg:items-center'>
              Blog
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
