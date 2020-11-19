import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ToDoForm(props) {
  const [task, setTask] = useState("");
  const [person, setPerson] = useState("");
  const [difficulty, setDifficulty] = useState(1);

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
  }

  function handleSubmit(e) {
    e.preventDefault();
    const values = {
      task,
      person,
      difficulty
    };
    props.getData(values);
  }

  // useEffect( () => {
  //   console.log(task, person, difficulty)
  // }, [task, person, difficulty]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1>Add To Do Item</h1>
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
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    </div>
  );
}

export default ToDoForm;
