import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
const Menu = () => {
  return (
    <Navbar sticky="top" className="menu-sticky" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">DS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
          <Nav.Link href="#technology">Technology</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          {/* <Nav.Link href="#resume"><Button variant='outline-primary'>Resume</Button></Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
