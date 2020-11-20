import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function ToDoNavbar() {
  return (
    <Navbar varient="light" bg="primary">
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default ToDoNavbar;
