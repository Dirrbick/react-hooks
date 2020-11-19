import React, { useState } from "react";
import ToDoForm from "./components/form/form.js";
import ToDoNavbar from "./components/navbar/navbar.js";
import ToDoHeader from "./components/header/header.js";
import ToDoList from "./components/list/list.js";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [values, setValues] = useState([]);

  function getFormData(data) {
    setValues([...values, data]);
  }

  return (
    <>
      <ToDoNavbar />
      <main>
        <ToDoHeader />
        <div>
          <ToDoForm getData={getFormData} />
        </div>
        <div>
          <ToDoList values={values} />
        </div>
      </main>
    </>
  );
}

export default App;
