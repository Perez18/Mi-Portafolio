'use client'
import React from 'react'
import Link from 'next/link'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

export const BreadcrumbMain = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => {
    return path
  })

  return (
    <div className='flex flex-col flex-wrap gap-4 py-8'>
      <Breadcrumbs underline='active'>
        <BreadcrumbItem key='inicio'>
          <Link href='/' rel='canonical' replace>
            inicio
          </Link>
        </BreadcrumbItem>
        {
        pathNames.map((path, index) => (
          <BreadcrumbItem key={path}>
            <Link href={path === 'blog' ? '/blog' : path} replace>
              {path}
            </Link>
          </BreadcrumbItem>
        ))
      }
      </Breadcrumbs>
    </div>

  )
}
