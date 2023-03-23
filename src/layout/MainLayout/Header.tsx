import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Services from "../../views/Services";
import { useLocation } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/homepage">
            Al-Buraq
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                as={Link}
                to="/services"
                className="text-decoration-none mx-1"
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/orders"
                className="text-decoration-none mx-1"
              >
                Orders
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Button variant="outline-primary" className="text-white">
            Get Started
          </Button>
          <Button>User</Button> */}
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Header;
