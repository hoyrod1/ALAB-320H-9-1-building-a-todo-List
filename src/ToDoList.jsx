import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [NewTasks, setNewTask] = useState("");

  function handleTodoInputChange(e) {}

  function addTodo() {}

  function deleteTodo(index) {}

  function moveTodosUp(index) {}

  function moveTodosDown(index) {}

  return (
    <>
      <div className="todos"></div>
    </>
  );
}

export default TodoList;
