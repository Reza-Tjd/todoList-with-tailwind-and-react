import React, { useState } from "react";

export default function Todo(props) {
  return (
    <div className="mt-7">
      <div className="flex items-center justify-center ">
        <li
          className={`w-60 flex items-center justify-between pl-2 bg-white h-8 ${
            props.completed ? "opacity-60 line-through transition-all" : ""
          }`}
        >
          {props.title}
        </li>
        <div className="flex">
          {/* icon tick */}
          <button
            className="w-8 h-8 bg-indigo-400 flex justify-center items-center"
            onClick={() => {
              props.onEdit(props.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>{" "}
            {/* icon trash */}
          </button>
          <button
            className="bg-violet-900 w-8 h-8 flex justify-center items-center "
            onClick={() => {
              props.onRemove(props.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
