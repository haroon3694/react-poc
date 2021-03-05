import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
} from 'reactstrap';

import './NavBarComponent.scss'

import logo from '../../logo.svg'

const NavBarComponent = (props) => {

  return (
      <Navbar expand="md" sticky="fixed">
        <div className="container-fluid nav-container nav-top-container">
            <NavbarBrand href="/"><img className="nav-img" src={logo} alt="" width="150px"/></NavbarBrand>
            <Nav className="ml-auto pr-2">
                <a href="/">
                  <Button className="nav-button">Home</Button>
                </a>
            </Nav>
        </div>
        
      </Navbar>
  );
}

export default NavBarComponent;