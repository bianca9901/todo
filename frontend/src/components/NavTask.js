import React from "react";
import { FormControl, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/NavTask.module.css";
import { Link } from "react-router-dom";

/*
 * NavTask (Child Component):
 * This component represents the navigation bar for task-related functionality.
 *
 * Responsibilities:
 * - Allows users to search for tasks using a search input field.
 * - Allows users to order tasks by creation and due date.
 * - Allows users to filter tasks based on priority.
 */

const NavTask = ({
  searchQuery,
  setSearchQuery,
  setOrderBy,
  setSelectedPriority,
}) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  const handleOrderByChange = (value) => {
    setOrderBy(value);
  };

  const handlePriorityChange = (value) => {
    setSelectedPriority(value);
  };

  return (
    <>
      <Navbar expand="lg" className={styles.Navbar}>
        <Nav className="mr-auto">
          <Button className={btnStyles.CreateTask}>
            <Link to="/task/create">Create New Task</Link>
          </Button>
        </Nav>
        <Nav className="ml-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className={styles.Input}
            value={searchQuery}
            onChange={handleInputChange}
            size="sm"
          />
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown title="Filter by Priority" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => handlePriorityChange("High")}>
              High
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handlePriorityChange("Medium")}>
              Medium
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handlePriorityChange("Low")}>
              Low
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Order by" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => handleOrderByChange("created_at")}>
              Created At (Ascending)
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => handleOrderByChange("-created_at")}
            >
              Created At (Descending)
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleOrderByChange("due_date")}>
              Due Date (Ascending)
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleOrderByChange("-due_date")}>
              Due Date (Descending)
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <hr className={styles.NavbarDivider} />
    </>
  );
};

export default NavTask;
