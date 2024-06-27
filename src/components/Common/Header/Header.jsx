import React from 'react'
import Toolbar from './Toolbar'
import Navbar from './Navbar'
import Searchbar from './Searchbar'

export default function Header() {
  return (
    <>
      <Toolbar />
      <div style={{position: 'sticky', top: 0, zIndex: "100"}}> 
      <Searchbar/>
      <Navbar />
      </div>
    </>
    
  )
}
