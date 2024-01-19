import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [status, setStatus] = useState("all");
  const removeTodo = (todoId) => {
    let newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  const editTodo = (todoId) => {
    let newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(newTodos);
    console.log(todoId);
  };

  const addtodo = (event) => {
    event.preventDefault();
    let newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
    setTodoTitle("");
  };

  return (
    // the whole items
    <div>
      {/* the input and dropdown */}
      <div className="flex justify-center space-x-4 mt-16">
        {/* the input */}
        <form onSubmit={addtodo}>
          <div className="flex items-center justify-center ">
            <input
              type="text"
              value={todoTitle}
              onChange={(event) => {
                setTodoTitle(event.target.value);
              }}
              className="w-72 h-10 bg-slate-200 pl-2 outline-none"
            />
            <button className="w-10 h-10 bg-white" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-5 h-5 mx-auto bg-violet-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </form>
        {/* the dropdown */}
        <div>
          <select
            name="todo"
            id=""
            className="w-48 h-10 outline-none px-2"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option value="all">ALL</option>
            <option value="completed">COMPLETED</option>
            <option value="uncompleted">UNCOMPLETED</option>
          </select>
        </div>
      </div>
      {/* todo */}
      <div>
        <ul>
          {status === "completed" &&
            todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onRemove={removeTodo}
                  onEdit={editTodo}
                />
              ))}

          {status === "uncompleted" &&
            todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onRemove={removeTodo}
                  onEdit={editTodo}
                />
              ))}

          {status === "all" &&
            todos.map((todo) => (
              <Todo
                key={todo.id}
                {...todo}
                onRemove={removeTodo}
                onEdit={editTodo}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
