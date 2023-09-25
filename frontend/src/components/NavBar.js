import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

/*
 * NavBar (Component):
 * This component represents the main navigation bar.
 *
 * Responsibilities:
 * - Displays navigation links and icons
 * - Handles sign-out
 */

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    // Handles signout
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const loggedInIcons = (
    // Icons for logged-in users
    <>
      <NavLink to="/" onClick={handleSignOut} className={styles.NavLink}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>

      <NavLink to="/profile/" onClick={() => {}} className={styles.NavLink} activeClassName={styles.Active}>
        <i className="fa-regular fa-user"></i>Profile
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    // Icons for logged-out users
    <>
      <NavLink
        to="/signin"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="150"></img>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
