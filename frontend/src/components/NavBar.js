import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../styles/css/NavBar.module.css';
import { useCurrentUser } from '../contexts/CurrentUserContext';


const NavBar = () => {
  const currentUser = useCurrentUser();

  const addArtworkIcon = (
    <NavLink 
    exact to="/artwork/create">
      <i className="fa-solid fa-upload"></i>
       Add Artwork
      </NavLink>
  )

  const loggedInIcons = (
  <>
        <NavLink 
    exact to="/feed">
      <i className="fa-solid fa-bars-staggered"></i>
       Feed
    </NavLink>
    <NavLink 
    to={`/profiles/${currentUser?.artist_id}`}>
      <i className="fa-solid fa-user"></i>
       <img />
    </NavLink>

     <NavLink 
    exact to="/" 
    // onClick={}
    >
      <i className="fas fa-right-from-bracket"></i>
       Sign Out
      </NavLink>   
  </>
  );    
  
  const loggedOutIcons = (
    <>    
    <NavLink 
    exact to="/signin">
      <i className="fa-solid fa-user"></i>
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
  {currentUser && addArtworkIcon}
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