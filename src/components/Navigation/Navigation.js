import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import './assets/styles/Hero.css';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg">
        <div
          className="navbar-brand active mx-3 p-3 fs-1 text-info">PORTFOLIO
        </div>
        <Container fluid>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end" id="responsive-navbar-nav">
            <Nav
              className="nav color fs-3 m-3 p-2">
              <Nav.Link
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                className="mx-2"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                className="mx-2"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                className="mx-2"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="https://drive.google.com/file/d/1iQpkV8c2CJLgN9mQ6NM3j2FJX-N_-6Ce/view?usp=sharing" target="_blank" tabIndex="-1" aria-disabled="true"
                onClick={() => handlePageChange('Resume')}
                className="nav-link"
                className="mx-2"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className="position-relative overflow-hidden p-3 p-md-5 text-start" id="hero">
        <div
          className="col-md-5 p-lg-5">
          <h1
            className="text-light text-left fw-bold">Matt Holt Moore</h1>
        </div>
        <div
          className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </header >
  );
}

export default Navigation;
