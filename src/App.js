import React, { useState, useEffect } from "react";
import ToDoForm from "./components/form/form.js";
import ToDoNavbar from "./components/navbar/navbar.js";
import ToDoHeader from "./components/header/header.js";
import ToDoList from "./components/list/list.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const API = process.env.REACT_APP_API;
  const [values, setValues] = useState([]);

  const handleAxiosGet = async () => {
    try {
      let request = await axios({
        method: 'get',
        url: `${API}/todo`
      });

      let todos = request.data.results;
      setValues(todos);
    }
    catch(e) {
      console.log(e.message)
    };
  };

  useEffect( () => {
    handleAxiosGet();
  }, []);
  

  const handleAxiosPost = async (input) => {
    try{
      let request = await axios({
        method: 'post',
        url: `${API}/todo`,
        data: input,
      });
    }
    catch(e) {
      console.warn(e.message)
    };

    // setValues([...values, data])
  };

  useEffect( () => {
    handleAxiosGet();
  }, [values]);

  //mark item as complete()
  // this is from looking at johns code... just trying to understand how to make it work... will be changing at a later time...
  const handleAxiosPut = async (id) => {

    let newValue = values.filter( (item) => item._id === id);

    if (newValue._id) {
      let request = await axios({
        method: 'put',
        url: `${API}/todo/${id}`,
        data: newValue._id.complete = true,
      });
    };

  };

  const handleAxiosDelete = async () => {

  };

  return (
    <>
      <ToDoNavbar />
      <br />
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
          
          <Col>
            <ToDoForm handlePost={handleAxiosPost} completeHandler={handleAxiosPut} />
          </Col>
          <Col>
            <ToDoList values={values} completeHandler={handleAxiosPut} />
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
