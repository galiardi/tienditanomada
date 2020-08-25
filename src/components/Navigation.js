import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Navigation.css';
import { Link } from 'react-router-dom'
const Navigation = (props) => {

  const logout = (e) => {
    e.preventDefault();
    props.logout();
  }
  return (
    <Navbar className="navbar" bg="light" expand="lg" sticky="top">
      <Link className="navbar-nav nav-link" to="/">
        <i className="material-icons">home</i>
      </Link>
      <Link className="navbar-brand" to="/">
        tiendita nomada
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="colapso">
        <Nav className="mr-auto">
          <Nav.Link href="#home">home</Nav.Link>
          <p onClick={logout}>logout</p>
          <NavDropdown title="dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="form">
          <FormControl type="text" placeholder="search" className="mr-sm-2" />
          <Button variant="outline-success">search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Navigation;