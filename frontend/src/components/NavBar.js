import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/css/NavBar.module.css';
import { useCurrentUser } from '../contexts/CurrentUserContext';



const NavBar = () => {
  const currentUser = useCurrentUser();
  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>    
    <NavLink 
    exact to="/signin">
      <i className="fas fa-right-from-bracket"></i>
       Sign In
      </NavLink>

      <NavLink 
      exact to="/signup">
      <i class="fas fa-user-plus"></i>
      Sign Up
      </NavLink> 
    </>
  )

  return (
    <div>
<Navbar fixed="top" expand="md">
    <Container>
  <Navbar.Brand>Welcome to the Design Hub</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className={`ml-auto text-left ${styles.NavBar}`}>

      <NavLink exact to="/"
        ><i className="fas fa-house"></i> Home</NavLink>
    {currentUser ? loggedInIcons : loggedOutIcons}
    </Nav>
  </Navbar.Collapse>
  
  </Container>
    </Navbar>
    </div>
  )
}

export default NavBar