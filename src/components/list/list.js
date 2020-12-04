import React from "react";

import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";

function ToDoList(props) {
  const styles = {
    pill: {
      cursor: "pointer",
    },
  };

  // useEffect( () => {

  // }, []);

  return (
    <>
      {props.values.map((item) => (
        <Toast key={item._id} onClose={ () => props.deleteHandler(item._id)}>
          <Toast.Header>
            <Badge
              pill
              style={styles.pill}
              variant={item.complete ? "danger" : "success"}
              onClick={() => props.completeHandler(item._id)}
            >
              {!item.complete ? "Pending" : "Complete"}
            </Badge>
            <strong className="mr-auto">{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body classname='textBody'>
            {item.text}
            <small className='difficulty'>difficulty:{item.difficulty}</small>
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
}

export default ToDoList;
