import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  return (
    <div>
      <div className="flex justify-center space-x-4 mt-16">
        <form>
          <div className="flex items-center justify-center ">
            <input
              type="text"
              value={todoTitle}
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
        <div>
          <select name="todo" id="" className="w-48 h-10 outline-none px-2">
            <option value="all">ALL</option>
            <option value="completed">COMPLETED</option>
            <option value="uncompleted">UNCOMPLETED</option>
          </select>
        </div>
      </div>
      <div>
        <ul>
          <Todo />
        </ul>
      </div>
    </div>
  );
}
