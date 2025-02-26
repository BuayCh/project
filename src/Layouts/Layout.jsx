import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
        <Navbar />
        <hr />
        <Outlet />
        </div>
  )
}

export default Layout