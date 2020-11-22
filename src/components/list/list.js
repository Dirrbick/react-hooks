import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";

function ToDoList(props) {



  // const handleComplete = (item) => {
  //   console.log(item.complete, "before")

  //   !item.complete ? item.complete = true : item.complete = false

  //   console.log(item.complete)
  // }
  const styles = {
    pill: {
      cursor: 'pointer',
    }
  }

  return (
    <>
      { props.values.map((item, idx) => (
          <Toast key={item.id}>
            <Toast.Header>
            <Badge pill style={styles.pill} variant={item.complete ? 'danger' : 'success'} onClick={() => props.completeHandler(item.id) }>
                {!item.complete ? 'Pending' : 'Complete'}
              </Badge>
              <strong className="mr-auto">{item.person}</strong>
            </Toast.Header>
          <Toast.Body>{item.task}</Toast.Body>
          </Toast>
      ))};
    </>
  );
}

export default ToDoList;
