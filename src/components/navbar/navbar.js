import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function ToDoNavbar(props) {
  return (
    <div>
      <Navbar varient="dark" bg="dark">
        <Nav.Link href="#home">Home</Nav.Link>
      </Navbar>
    </div>
  );
}

export default ToDoNavbar;
