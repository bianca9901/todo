import React from 'react';
import { Form, FormControl, Button, Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/NavTask.module.css";
import { Link } from "react-router-dom";

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
    // Invokes the handleSearch function from the parent component (TasksAll)
  };

  return (
    <Navbar expand="lg" className={styles.Navbar}>
      <Nav className="mr-auto">
        <Button className={btnStyles.CreateTask}>
          <Link to="/task/create">Create New Task</Link>
        </Button>
      </Nav>
      <Nav className="ml-auto">
        <Form inline onSubmit={handleFormSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchQuery}
            onChange={handleInputChange}
            size="sm"
          />
          <Button variant="outline-light" type="submit" size="sm">
            Search
          </Button>
        </Form>
      </Nav>
      <Nav className="ml-auto">
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
    </Navbar>
  );
};

export default NavTask;