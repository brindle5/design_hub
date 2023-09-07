import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap';



const NavBar = () => {
  return (
    <div>
<Navbar fixed="top" expand="md">
    <Container>
  <Navbar.Brand>Welcome to the Design Hub</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="ml-auto text-left">
      <Nav.Link><i className="fas fa-house"></i> Home</Nav.Link>
      <Nav.Link><i className="fas fa-right-from-bracket"></i> Sign In</Nav.Link>
      <Nav.Link><i class="fas fa-user-plus"></i> Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
  </Container>
    </Navbar>
    </div>
  )
}

export default NavBar