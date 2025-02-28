import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

function LayoutAdmin() {
  return (
    <div>
        <Navbar/>

        <Outlet />

    </div>
  )
}

export default LayoutAdmin