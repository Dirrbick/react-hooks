import React, {useState, useContext} from "react";
import {SettingsContext} from "../../context/settings/context.js";
import {PaginatedList} from 'react-paginated-list';

import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";

function ToDoList(props) {
  const settings = useContext(SettingsContext);
  console.log(settings);

  const maxItems = settings.maxVisible;

  const styles = {
    pill: {
      cursor: "pointer",
    },
  };

  const sortedList = props.values.sort((a, b) => a.difficulty - b.difficulty)

  return (
    <PaginatedList
      list={sortedList}
      itemsPerPage={maxItems}
      renderList={ (list) => (
        <>
          {list.map((item) => (
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
              <Toast.Body>
                {item.text}
                difficulty:{item.difficulty}
              </Toast.Body>
            </Toast>
          ))}
        </>
      )}
    />
  );
}

export default ToDoList;
