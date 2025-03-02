import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <main className='container'>
        <Navbar />
        <Outlet />
        </main>
  )
}

export default Layout