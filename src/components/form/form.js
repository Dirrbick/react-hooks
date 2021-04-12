import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ToDoForm(props) {
  const [text, setText] = useState("");
  const [assignee, setAssignee] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [complete] = useState(false);

  function handleTextInput(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  function handleAssigneeInput(e) {
    e.preventDefault();
    setAssignee(e.target.value);
  }

  function handleDifficulty(e) {
    e.preventDefault();
    setDifficulty(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const values = {
      text,
      assignee,
      difficulty,
      complete
    };
    props.handlePost(values);
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <h3>Add To Do Item</h3>
          <Form.Group controlId="form-basic-todo">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control
              onChange={handleTextInput}
              value={text}
              type="text"
              placeholder="Item Details"
            />
          </Form.Group>
          <Form.Group controlId="form-basic-assigned">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control
              onChange={handleAssigneeInput}
              value={assignee}
              type="text"
              placeholder="Assignee Name"
            />
          </Form.Group>
          <Form.Group controlId="form-basic-range">
            <Form.Label>Difficulty Level</Form.Label>
            <Form.Control
              onChange={handleDifficulty}
              value={difficulty}
              type="range"
              min="1"
              max="5"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ToDoForm;
