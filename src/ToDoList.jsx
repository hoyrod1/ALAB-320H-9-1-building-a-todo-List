import { useState } from "react";
import { InitialState } from "./data/InitialState.jsx";

function TodoList() {
  const [tasks, setTasks] = useState(InitialState);
  const [newTasks, setNewTask] = useState("");

  function handleTodoInputChange(e) {
    setNewTask(e.target.value);
  }

  function addNewTodo() {}

  function deleteTodo(index) {}

  function moveTodosUp(index) {}

  function moveTodosDown(index) {}

  return (
    <>
      <div className="todos">
        <input
          type="text"
          value={newTasks}
          onChange={handleTodoInputChange}
          placeholder="Add a new task..."
        />
        <button className="add_new_task" onClick={addNewTodo}>
          Add Task
        </button>
      </div>
    </>
  );
}

export default TodoList;
