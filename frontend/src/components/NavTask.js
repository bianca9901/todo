import React from 'react';
import { Form, FormControl, Button, Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import btnStyles from "../styles/Button.module.css";

/*
 * NavTask (Child Component):
 * This component represents the navigation bar for task-related functionality.
 * 
 * Responsibilities:
 * - Allow users to search for tasks using a search input field.
 * - Handle user input in the search field and trigger a search when submitted.
 */

const NavTask = ({ searchQuery, setSearchQuery, onSearch }) => {
  // Handle changes in the search input field
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    // Handle the search form submission
    event.preventDefault(); 
    onSearch();
    // Invokes the handleSearch function from parent component (TasksAll)
  };

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
        <Form inline onSubmit={handleFormSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button variant="outline-primary" type="submit">
          Search
        </Button>
      </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTask;