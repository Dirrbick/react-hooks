import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

function ToDoList(props) {
  console.log(props.values);
  return (
    <ListGroup as="ul">
      {props.values.map((item, idx) => (
        <ListGroup.Item as="li" key={idx}>
          {item.task}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ToDoList;
