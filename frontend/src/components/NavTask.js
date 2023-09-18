import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import NavTaskSearch from '../components/NavTaskSearch';


const NavTask = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>My Tasks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Filter by Priority" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">High</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Medium</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Low</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Order by" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">Priority</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">Created At</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <NavTaskSearch/>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTask