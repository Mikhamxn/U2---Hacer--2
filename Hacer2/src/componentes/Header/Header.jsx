import { header } from 'express-validator'
import React from 'react'
import Links from './Links'

function Header() {
  return (
    <header className='flex flex-row justify-between items-center p-3 bg-blue-700 text-white'>
        <h1 className='text-3xl font-semibold'>Sistema Web de Control Escolar</h1>
        <Links />            
    </header>
  )
}

export default Header