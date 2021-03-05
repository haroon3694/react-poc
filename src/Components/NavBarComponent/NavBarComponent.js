import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from 'reactstrap';

import './NavBarComponent.scss'

import logo from '../../assets/images/logo.png'

const NavBarComponent = (props) => {

  return (
      <Navbar scrolling dark expand="md" fixed="top">
        <div className="container-fluid nav-container nav-top-container pt-3">
            <NavbarBrand href="/"><img className="nav-img mr-auto" src={logo} alt=""/></NavbarBrand>
            <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink className="black" href="/components/">Courses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="black" href="https://github.com/reactstrap/reactstrap">Erzy For Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="white" href="/components/">Teach on Ezry </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="white" href="/components/">About Us</NavLink>
            </NavItem>
           
          </Nav>
          <NavItem className="mr-auto">
              <Button color="primary">Signup</Button>{' '}
            </NavItem>
        </div>
       
      </Navbar>
  );
}

export default NavBarComponent;