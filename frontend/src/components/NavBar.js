import React from 'react'
import Button from 'react-bootstrap/Button';
import {Navbar, Nav, Container } from 'react-bootstrap';


const NavBar = () => {
  return (
    <div>
<Navbar fixed="top" expand="md">
    <Container>
  <Navbar.Brand>Welcome to the Design Hub</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>Sign In</Nav.Link>
      <Nav.Link>Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
  </Container>
    </Navbar>
    </div>
  )
}

export default NavBar