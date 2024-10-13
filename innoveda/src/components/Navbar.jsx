// src/components/CustomNavbar.jsx
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CustomNavbar = () => {
  const navigate = useNavigate();

  // Track the login status using state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status from localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    setIsLoggedIn(false); // Update the state
    navigate('/login'); // Redirect to login page
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-2 fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-primary">
          Innoveda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/login" className="me-3 text-dark fw-semibold">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="text-dark fw-semibold">
                  Sign Up
                </Nav.Link>
              </>
            ) : (
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
