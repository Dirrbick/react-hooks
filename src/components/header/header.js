import React from "react";
import Navbar from "react-bootstrap/Navbar";

function ToDoHeader() {
  return (
    <Navbar bg="dark" varient="dark">
      <Navbar.Brand as="h1">ToDo List Manager</Navbar.Brand>
    </Navbar>
  );
}

export default ToDoHeader;
