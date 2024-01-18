import React, { useState } from "react";
import Header from "./todo/Header";
import TodoList from "./todo/TodoList";

export default function App() {
  return (
    <div>
      <Header></Header>
      <TodoList></TodoList>
    </div>
  );
}
