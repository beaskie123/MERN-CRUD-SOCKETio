import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Main() {
  return (
    <div className='main-container'>
      <Container className='container'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Babble Space</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Your Name Here" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
  
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    </div>
  )
}

export default Main