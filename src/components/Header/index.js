import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Shapes</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header
