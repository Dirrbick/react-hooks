import React, { useState } from "react";
import ToDoForm from "./components/form/form.js";
import ToDoNavbar from "./components/navbar/navbar.js";
import ToDoHeader from "./components/header/header.js";
import ToDoList from "./components/list/list.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [values, setValues] = useState([]);

  function getFormData(data) {
    setValues([...values, data]);
  }
  //mark item as complete()
  return (
    <>
      <ToDoNavbar />
      <br/>
      <Container>
        <Row>
          <Col>
            <ToDoHeader />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <Col><ToDoForm getData={getFormData} /></Col>
          <Col><ToDoList values={values} /></Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
