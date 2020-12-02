import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ToDoForm(props) {
  const [task, setTask] = useState("");
  const [person, setPerson] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [complete] = useState(false);
  const [_id, setId] = useState();

  function handleTaskInput(e) {
    e.preventDefault();
    setTask(e.target.value);
  }

  function handlePersonInput(e) {
    e.preventDefault();
    setPerson(e.target.value);
  }

  function handleDifficulty(e) {
    e.preventDefault();
    setDifficulty(e.target.value);
    setId(Math.random());
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const values = {
      task,
      person,
      difficulty,
      complete,
      _id
    };
    props.getData(values);
  }

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <h3>Add To Do Item</h3>
          <Form.Group controlId="form-basic-todo">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control
              onChange={handleTaskInput}
              value={task}
              type="text"
              placeholder="Item Details"
            />
          </Form.Group>
          <Form.Group controlId="form-basic-assigned">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control
              onChange={handlePersonInput}
              value={person}
              type="text"
              placeholder="Assignee Name"
            />
          </Form.Group>
          <Form.Group controlId="form-basic-range">
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
