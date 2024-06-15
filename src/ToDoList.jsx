import { useState } from "react";
import { InitialState } from "./data/InitialState.jsx";
import "./ToDoList.css";

function TodoList() {
  const [tasks, setTasks] = useState(InitialState);
  const [newTasks, setNewTask] = useState("");

  function handleTodoInputChange(e) {
    setNewTask(e.target.value);
  }

  function addNewTodo() {
    // console.log("Add new todo");
    // console.log(newTasks);
    if (newTasks.trim() !== "") {
      setTasks((tasks) => [...tasks, { title: newTasks }]);
      setNewTask("");
    } else {
      setNewTask("");
    }
  }

  function deleteTodo(index) {
    const todoDeletedList = tasks.filter((todoElement, i) => i !== index);
    setTasks(todoDeletedList);
  }

  function moveTodosUp(index) {}

  function moveTodosDown(index) {}

  // console.log(tasks);
  return (
    <>
      <div className="todos">
        <input
          type="text"
          value={newTasks}
          onChange={handleTodoInputChange}
          placeholder="Add a new task..."
        />
        <br />
        <button className="add_new_task" onClick={addNewTodo}>
          Add Task
        </button>
      </div>
      <div className="todos-list">
        <ol>
          {tasks.map((todo, todoIndex) => {
            return (
              <li key={todoIndex}>
                <span>{todo.title}</span>
                <label htmlFor="delete">Delete</label>
                <input
                  id="delete"
                  type="checkbox"
                  onClick={() => deleteTodo(todoIndex)}
                />
                <label htmlFor="Move Up">Move Up</label>
                <input
                  id="Move Up"
                  type="checkbox"
                  onClick={() => deleteTodo(todoIndex)}
                />
                <label htmlFor="Move Down">Move Down</label>
                <input type="checkbox" onClick={() => deleteTodo(todoIndex)} />
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
