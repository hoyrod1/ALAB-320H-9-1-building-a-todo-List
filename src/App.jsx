import { useState } from "react";
import "./App.css";
import TodoList from "./ToDoList.jsx";

function App() {
  const [count, setCount] = useState(0);

  const style = {
    backgroundColor: "lightgrey",
    width: "800px",
    margin: "20px auto",
    border: "2px solid brown",
  };

  return (
    <>
      <div style={style}>
        <h1>Rodney St Cloud's ToDo List</h1>
        <TodoList />
      </div>
    </>
  );
}

export default App;
