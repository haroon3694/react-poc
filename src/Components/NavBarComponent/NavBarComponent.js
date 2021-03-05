import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
} from 'reactstrap';

import './NavBarComponent.scss'

import logo from '../../assets/images/logo.png'

const NavBarComponent = (props) => {

  return (
      <Navbar scrolling dark expand="md" fixed="top">
        <div className="container-fluid nav-container nav-top-container pt-5">
            <NavbarBrand href="/"><img className="nav-img" src={logo} alt="" width="150px"/></NavbarBrand>
            <Nav className="ml-auto pr-2">
                <a href="/">
                  <Button className="nav-button">Signup</Button>
                </a>
            </Nav>
        </div>
        
      </Navbar>
  );
}

export default NavBarComponent;