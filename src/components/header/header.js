import React from "react";
import Navbar from "react-bootstrap/Navbar";

function ToDoHeader(props) {

    let total = props.total.filter( item => !item.complete)

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as="h1">ToDo List Manager  ({total.length})</Navbar.Brand>
    </Navbar>
  );
}

export default ToDoHeader;
