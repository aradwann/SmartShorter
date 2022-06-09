import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar () {
  return (
        <Navbar bg="dark" variant="dark">
          <Container >
          <Navbar.Brand href="#home">SmartShorter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Create short link</Nav.Link>
            <Nav.Link href="#get-all-shortlinks">All short links</Nav.Link>
            <Nav.Link href="#update-short-link">Update short link</Nav.Link>
          </Nav>
          </Container>
        </Navbar>)
}

export default NavBar
