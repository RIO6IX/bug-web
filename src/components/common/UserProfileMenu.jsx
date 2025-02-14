import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa"; // Profile & Dark Mode Icons
import "./UserProfileMenu.css"; // CSS File for Styling

const UserProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dropdown menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // Apply dark mode class to body
  };

  // Logout function
  const handleLogout = () => {
    console.log("User logged out");
    // Implement logout logic (clear tokens, redirect, etc.)
  };

  return (
    <div className="user-profile">
      {/* Profile Picture */}
      <div className="profile-icon" onClick={toggleMenu}>
        <FaUserCircle size={32} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <p className="username">John Doe</p> {/* Replace with dynamic username */}

          <Link to="/profile" className="dropdown-item">Profile</Link>
          <Link to="/account-settings" className="dropdown-item">Account Settings</Link>
          <Link to="/support" className="dropdown-item">Support</Link>

          <div className="dropdown-item" onClick={toggleDarkMode}>
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />} 
            Dark Mode
          </div>

          <div className="dropdown-item logout" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;
