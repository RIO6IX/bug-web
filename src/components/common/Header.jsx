import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";  // Import your Header.css file

function Header() {
  const location = useLocation(); // Get current route

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Cyberx Fort Bug Bounty</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/dashboard" active={location.pathname === "/dashboard"}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/program/1" active={location.pathname === "/program/1"}>Programs</Nav.Link>
            <Nav.Link as={Link} to="/report/1" active={location.pathname === "/report/1"}>Report</Nav.Link>
            <Nav.Link as={Link} to="/login" active={location.pathname === "/login"}>Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" active={location.pathname === "/signup"}>Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
