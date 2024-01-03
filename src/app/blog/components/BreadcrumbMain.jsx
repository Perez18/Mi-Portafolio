'use client'
import React from 'react'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import Link from 'next/link'

export const BreadcrumbMain = () => {
  const [currentPage, setCurrentPage] = React.useState('implementaciondebotonyappy')

  return (
    <div className='flex flex-col flex-wrap gap-4 py-8'>
      <Breadcrumbs underline='active' onAction={(key) => setCurrentPage(key)}>
        <BreadcrumbItem key='home' isCurrent={currentPage === '/'}>
          <Link href='/'>
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem key='blog' isCurrent={currentPage === 'blog'}>
          <Link href='/blog'>
            Blog
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem key='implementaciondebotonyappy' isCurrent={currentPage === 'implementaciondebotonyappy'}>
          <Link href='/blog/implementacion-de-boton-yappy'>
            Implementacion de boton de yappy
          </Link>
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>

  )
}
