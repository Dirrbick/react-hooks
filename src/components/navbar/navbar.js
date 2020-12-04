import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './navbar.scss';

function ToDoNavbar() {
  return (
    <Navbar variant="dark" bg="primary">
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Form inline className="auth-form">
        <FormControl type="text" size="sm" placeholder="username" />
        <FormControl type="password" size="sm" placeholder="password" />
        <Button type="submit" variant="success">Submit</Button>
      </Form>
    </Navbar>
  );
}

export default ToDoNavbar;
