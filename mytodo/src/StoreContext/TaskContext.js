import React, { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [task, setTask] = useState([
    { id: 1, todo: "Running Test", active: true, complete: true },
    { id: 2, todo: "Buy Unicorn", active: true, complete: false },
    { id: 3, todo: "Task no 3", active: false, complete: false }
  ]);

  const addTask = newTodo => {
    setTask([
      ...task,
      { id: task.length + 1, todo: `${newTodo}`, active: true, complete: false }
    ]);
  };

  const removeTask = id => {
    setTask(task.filter(task => task.id !== id));
  };

  const updateTask = (index, newTodo) => {
    const newTask = [...task];
    newTask[index].todo = newTodo;
    setTask(newTask);
  };

  //// for diplay
  //   const displayTask = condition => {
  //     if ((condition = "all")) {
  //       task.length;
  //     } else if ((condition = "activate")) {
  //       task.active.length;
  //     } else {
  //       task.complete.length;
  //     }
  //   };

  return (
    <TaskContext.Provider value={{ task, addTask, removeTask, updateTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
export default TaskContextProvider;
