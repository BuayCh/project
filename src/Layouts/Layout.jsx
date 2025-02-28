import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Searchbar from '../components/Searchbar'

function LayoutAdmin() {
  return (
    <div>
        <Navbar/>
      <Searchbar/>
        <Outlet />

    </div>
  )
}

export default LayoutAdmin