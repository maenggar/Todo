import React, { useState, useContext } from "react";
import { TaskContext } from "../../StoreContext/TaskContext";

function Header() {
  const { addTask } = useContext(TaskContext);
  const [todo, setTodo] = useState("");

  const handleSubmit = ({ key }) => {
    if (key === "Enter") {
      addTask(todo);
    }
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        onKeyDown={handleSubmit}
        autoFocus
      />
    </div>
  );
}
export default Header;
