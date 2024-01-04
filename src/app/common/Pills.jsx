import React from 'react'

export const Pills = ({
  name
}) => {
  return (
    <span className='bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600'>
      <p>#{name}</p>
    </span>
  )
}
