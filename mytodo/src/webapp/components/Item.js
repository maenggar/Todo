import React, { Fragment, useContext, useState } from "react";
import { TaskContext } from "../../StoreContext/TaskContext";

function Item() {
  const { task, removeTask, updateTask, isCompleted } = useContext(TaskContext);
  const [newLabel, setNewLabel] = useState("");
  console.log(task);

  const handleUpdate = index => {
    setNewLabel(prompt("Update your task : ", "update task"));
    updateTask(index - 1, newLabel);
  };
  return (
    <Fragment>
      <ul className="todo-list">
        {/* <!-- These are here just to show the structure of the list items -->
					<!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
        {task.map(item => (
          <li
            key={item.id}
            className={item.complete ? "completed" : "notcompleted"}
          >
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label
                onDoubleClick={() => {
                  handleUpdate(item.id);
                }}
                className="todo-label"
              >
                {item.todo}
              </label>
              <button
                className="destroy"
                onClick={() => removeTask(item.id)}
              ></button>
            </div>
            <input className="edit" value="Rule the web" />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default Item;
