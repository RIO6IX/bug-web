import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "./LoginForm.css";  // Importing the CSS

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in both fields.");
      return;
    }

    // Handle login logic here (e.g., API call)
    // For now, just clear the fields and error message
    setEmail("");
    setPassword("");
    setErrorMessage("");
    console.log("Logging in:", email, password); // Placeholder for actual logic
  };

  return (
    <Container fluid className="login-page">
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="login-card">
            <Card.Body>
              <h3 className="text-center mb-4">Login to Bug Bounty</h3>
              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-between mb-3">
                  <Form.Check type="checkbox" label="Remember me" />
                  <a href="/forgot-password" className="forgot-password-link">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" variant="primary">
                  Login
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <p>
                  Don't have an account? <a href="/signup">Sign Up</a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
