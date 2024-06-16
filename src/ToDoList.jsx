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
      setTasks((tasks) => [{ title: newTasks }, ...tasks]);
      setNewTask("");
    } else {
      setNewTask("");
    }
  }

  function deleteTodo(index) {
    const todoDeletedList = tasks.filter((todoElement, i) => i !== index);
    setTasks(todoDeletedList);
  }

  function editTodo(index) {
    console.log(index);
  }

  function handleTodoUpdateChange(index) {
    console.log(index);
    console.log(tasks);
  }

  function completedTodo(todo) {
    // console.log(todo);
    const todoDeletedList = tasks.map((task, i) => {
      if (task.id == todo.id) {
        return { ...task, completed: true };
      } else {
        return task;
      }
    });
    // console.log(todoDeletedList);
    setTasks(todoDeletedList);
  }

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
                <span
                  style={
                    todo.completed
                      ? {
                          textDecoration: "line-through",
                          cursor: "not-allowed",
                        }
                      : {}
                  }
                >
                  {todo.title}
                </span>
                <label htmlFor="completed">Completed</label>
                <input
                  id="completed"
                  type="checkbox"
                  onClick={() => completedTodo(todo)}
                />
                <button
                  className="edit"
                  id="edit"
                  onClick={() => editTodo(todoIndex)}
                >
                  Edit
                </button>
                <button
                  id="delete"
                  className="delete"
                  onClick={() => deleteTodo(todoIndex)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
        <div className="todos">
          <input
            type="text"
            value={newTasks}
            onChange={handleTodoUpdateChange}
            // placeholder="Add a new task..."
          />
          <br />
          <button
            className="add_new_task"
            onClick={() => handleTodoUpdateChange(todoIndex)}
          >
            Update Task
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
