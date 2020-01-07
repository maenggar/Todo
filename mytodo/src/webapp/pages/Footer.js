import React, { Fragment, useContext } from "react";
import { TaskContext } from "../../StoreContext/TaskContext";

function Footer() {
  const { task } = useContext(TaskContext);
  const allTask = task.length;
  //const activeTask = task.find(x => x.active === true);
  //console.log(activeTask);

  return (
    <Fragment>
      {/* <!-- This footer should hidden by default and shown when there are todos --> */}
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count">
          <strong>{allTask}</strong> item left
        </span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          <li>
            <a className="selected" href="#/">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button className="clear-completed">Clear completed</button>
      </footer>

      <footer className="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </Fragment>
  );
}
export default Footer;
