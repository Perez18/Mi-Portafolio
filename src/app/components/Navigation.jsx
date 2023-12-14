import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'

export const Navigation = () => {
  return (
    <Navbar>
      <NavbarBrand className='text-black'>
        {/* <AcmeLogo /> */}
        <Link href='/' className='text-black'>
          <h5 className='font-bold'>Icono</h5>
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' key='proyectos' href='/proyectos' className='gap-8 space-y-6 tracking-wide lg:flex lg:space-y-0 lg:text-sm lg:items-center'>
            Proyectos
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
