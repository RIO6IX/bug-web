// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FaEdit, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [socialLinks, setSocialLinks] = useState({
    github: "https://github.com/user123",
    linkedin: "https://linkedin.com/in/user123",
    twitter: "https://twitter.com/user123",
  });

  // UseEffect to simulate fetching data from a database or API
  useEffect(() => {
    // In a real scenario, you might fetch updated social links from an API here
    // setSocialLinks({ github: fetchedGithub, linkedin: fetchedLinkedin, twitter: fetchedTwitter });
  }, []);

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Public Profile</h1>

      {/* Profile Card */}
      <Card className="profile-card">
        <Row className="profile-row">
          <Col sm={4} className="profile-pic-col">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="profile-pic"
            />
          </Col>
          <Col sm={8} className="profile-details">
            <h2 className="username">User123</h2>
            <p className="email">user123@example.com</p>
            <p className="bio">Bug bounty hunter | Cybersecurity enthusiast</p>

            <div className="social-links">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} />
              </a>
            </div>

            <Link to="/account-settings">
              <Button variant="outline-primary" className="edit-profile-btn">
                <FaEdit /> Edit Profile
              </Button>
            </Link>
          </Col>
        </Row>
      </Card>

      {/* Achievements */}
      <div className="achievements">
        <h3>Achievements & Badges</h3>
        <div className="badges">
          <span className="badge">Top 10 Hacker</span>
          <span className="badge">Verified Bug Hunter</span>
          <span className="badge">Cybersecurity Expert</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
