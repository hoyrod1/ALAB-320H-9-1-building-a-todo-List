import { useState } from "react";
import { InitialState } from "./data/InitialState.jsx";
import "./ToDoList.css";

function TodoList() {
  const [tasks, setTasks] = useState(InitialState);
  const [newTasks, setNewTask] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");

  //===============================================================================//
  //------------------ Set New Todo From Input Element Completed ------------------//
  function handleTodoInputChange(e) {
    setNewTask(e.target.value);
  }
  //===============================================================================//
  //---------------- Set Updated Todo From Input Element Completed ----------------//
  function handleTodoUpdate(e) {
    // console.log(e.target.value);
    setUpdatedTask(e.target.value);
  }
  //===============================================================================//
  //----------------- Update Todo ------------------//
  function updateTodo(todoId, todoHidden, todoInputShow) {
    console.log(todoId);
    console.log(todoHidden);
    console.log(todoInputShow);
    const todoUpdattedList = tasks.map((task, i) => {
      if (task.id == todoId) {
        if (updatedTask.trim() !== "") {
          return {
            ...task,
            title: updatedTask,
            hidden: false,
            inputShow: true,
          };
        } else {
          return task;
        }
      } else {
        return task;
      }
    });
    console.log(todoUpdattedList);
    // setTasks(todoDeletedList);
  }
  //===============================================================================//
  //-------------------------- Add A New Todo Completed ---------------------------//
  function addNewTodo() {
    // console.log(tasks.length);
    if (newTasks.trim() !== "") {
      setTasks((tasks) => [
        {
          userId: 1,
          id: tasks.length + 1,
          title: newTasks,
          completed: false,
          disableButton: true,
          hidden: false,
          inputShow: true,
        },
        ...tasks,
      ]);
      setNewTask("");
    } else {
      setNewTask("");
    }
  }
  //===============================================================================//
  //---------------------------- Delete Todo Completed ----------------------------//
  function deleteTodo(index) {
    const todoDeletedList = tasks.filter((todoElement, i) => i !== index);
    setTasks(todoDeletedList);
  }
  //===============================================================================//
  //------------- Edit Button to show input and Save Button Completed -------------//
  function editTodo(todo) {
    // console.log(todo);
    const todoDeletedList = tasks.map((task, i) => {
      if (task.id == todo.id) {
        return { ...task, hidden: true, inputShow: false };
      } else {
        return task;
      }
    });
    // console.log(todoDeletedList);
    setTasks(todoDeletedList);
  }
  //===============================================================================//
  //----------------- Checkbox Completed To Enable Delete Button ------------------//
  function completedTodo(todo) {
    // console.log(todo);
    const todoDeletedList = tasks.map((task, i) => {
      if (task.id == todo.id) {
        return { ...task, completed: true, disableButton: false };
      } else {
        return task;
      }
    });
    console.log(todoDeletedList);
    setTasks(todoDeletedList);
  }
  //===============================================================================//

  //===============================================================================//
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
                  hidden={todo.hidden}
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
                  hidden={todo.hidden}
                  className="edit"
                  id="edit"
                  onClick={() => editTodo(todo)}
                >
                  Edit
                </button>
                <button
                  hidden={todo.hidden}
                  id="delete"
                  className="delete"
                  onClick={() => deleteTodo(todoIndex)}
                  style={
                    todo.completed
                      ? {}
                      : {
                          textDecoration: "line-through",
                          opacity: "0.5",
                          cursor: "not-allowed",
                        }
                  }
                  disabled={todo.disableButton}
                >
                  Delete
                </button>
                <input
                  value={updatedTask}
                  style={{ width: "300px", marginRight: "10px" }}
                  hidden={todo.inputShow}
                  type="text"
                  onChange={handleTodoUpdate}
                  placeholder={todo.title}
                />
                <button
                  hidden={todo.inputShow}
                  onClick={() =>
                    updateTodo(todo.id, todo.hidden, todo.inputShow)
                  }
                >
                  Save Update
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
