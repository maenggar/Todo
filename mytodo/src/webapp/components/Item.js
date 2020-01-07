import React, { Fragment, useContext } from "react";
import { TaskContext } from "../../StoreContext/TaskContext";

function Item() {
  const { task, removeTask, updateTask } = useContext(TaskContext);
  console.log(task);

  // const handleUpdate = (index, todo) => {
  //   updateTask(task.id - 1, "new Unicorn");
  // };

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
                onDoubleClick={() => updateTask(item.id - 1, "new Unicorn")}
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
