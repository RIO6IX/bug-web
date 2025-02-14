import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Dropdown, Form } from "react-bootstrap";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import "./Header.css";

function Header({ darkMode, setDarkMode }) {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState({ name: "User123", profilePic: null });

  return (
    <>
      {/* Main Navbar */}
      <Navbar expand="lg" bg="dark" variant="dark" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">Cyberx Fort Bug Bounty</Navbar.Brand>
          <Button className="menu-toggle" onClick={() => setSidebar(true)}>
            <FaBars />
          </Button>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/program/1">Programs</Nav.Link>
              <Nav.Link as={Link} to="/report/1">Report</Nav.Link>

              {/* Profile Dropdown */}
              <Dropdown align="end">
                <Dropdown.Toggle variant="dark" id="profile-dropdown">
                  {user.profilePic ? (
                    <img src={user.profilePic} alt="Profile" className="profile-pic" />
                  ) : (
                    <FaUserCircle size={25} />
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">{user.name}</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/account-settings">Account Settings</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/support">Support</Dropdown.Item>
                  <Dropdown.Divider />

                  {/* Dark Mode Toggle */}
                  <Dropdown.Item as="div" className="dark-mode-toggle">
                    <span>Dark Mode</span>
                    <Form.Check
                      type="switch"
                      id="dark-mode-switch"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                  </Dropdown.Item>

                  {/* Redirect to Login Page */}
                  <Dropdown.Item as={Link} to="/login" onClick={() => setSidebar(false)}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar for Mobile View */}
      <div className={`sidebar ${sidebar ? "active" : ""}`}>
        <Button className="close-btn" onClick={() => setSidebar(false)}>
          <FaTimes />
        </Button>
        <Nav className="sidebar-nav">
          <Nav.Link as={Link} to="/" onClick={() => setSidebar(false)}>Home</Nav.Link>
          <Nav.Link as={Link} to="/dashboard" onClick={() => setSidebar(false)}>Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/program/1" onClick={() => setSidebar(false)}>Programs</Nav.Link>
          <Nav.Link as={Link} to="/report/1" onClick={() => setSidebar(false)}>Report</Nav.Link>
          <Nav.Link as={Link} to="/profile" onClick={() => setSidebar(false)}>Profile</Nav.Link>
          <Nav.Link as={Link} to="/account-settings" onClick={() => setSidebar(false)}>Account Settings</Nav.Link>
          <Nav.Link as={Link} to="/support" onClick={() => setSidebar(false)}>Support</Nav.Link>

          {/* Dark Mode Toggle in Sidebar */}
          <div className="sidebar-darkmode">
            <span>Dark Mode</span>
            <Form.Check
              type="switch"
              id="sidebar-dark-mode-switch"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>

          {/* Redirect to Login Page */}
          <Nav.Link as={Link} to="/login" onClick={() => setSidebar(false)}>Logout</Nav.Link>

        </Nav>
      </div>
    </>
  );
}

export default Header;
