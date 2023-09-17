import React from 'react'
import axios from 'axios';

import {Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addArtworkIcon = (
    <NavLink 
    exact to="/artwork/create">
      <i className="fa-solid fa-upload">  </i>
       Add Artwork
      </NavLink>
  )

  const loggedInIcons = (
  <>
    <NavLink 
    to={`/profiles/${currentUser?.artist_id}`}>
      <i className="fa-solid fa-user">  </i>
      Profile
    </NavLink>

     <NavLink 
    exact to="/" onClick={handleSignOut}
    >
      <i className="fas fa-right-from-bracket">  </i>
       Sign Out
      </NavLink>   
  </>
  );    
  
  const loggedOutIcons = (
    <>    
    <NavLink 
    exact to="/signin">
      <i className="fa-solid fa-user {styles.NavBar}">  </i>
       Sign In
      </NavLink>

      <NavLink 
      exact to="/signup">
      <i className="fas fa-user-plus">  </i>
      Sign Up
      </NavLink> 
    </>
  )

  return (
 
    <Navbar fixed="top" expand="md" expanded={expanded}>
    <Container>
  <Navbar.Brand></Navbar.Brand>
  {currentUser && addArtworkIcon}
  <Navbar.Toggle 
    aria-controls="basic-navbar-nav" 
    onClick={() => setExpanded(!expanded)}
    ref={ref} />

  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className= "ml-auto text-left">

      <NavLink exact to="/"
        ><i className="fas fa-house">  </i> Home</NavLink>
    {currentUser ? loggedInIcons : loggedOutIcons}
    </Nav>
  </Navbar.Collapse>
  
  </Container>
    </Navbar>

  )
}

export default NavBar