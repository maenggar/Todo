import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || [
      { id: 1, todo: "Running Test", active: true, complete: true },
      { id: 2, todo: "Buy Unicorn", active: true, complete: false },
      { id: 3, todo: "Task no 3", active: false, complete: false }
    ]
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  //adding task function
  const addTask = newTodo => {
    setTask([
      ...task,
      {
        id: task.length + 1,
        todo: `${newTodo}`,
        active: true,
        complete: false
      }
    ]);
  };

  //Removing task Function
  const removeTask = id => {
    setTask(task.filter(task => task.id !== id));
  };

  //updating task function
  const updateTask = (index, newTodo) => {
    const newTask = [...task];
    newTask[index].todo = newTodo;
    setTask(newTask);
  };

  // changing complete object to true
  const isCompleted = index => {
    const newTask = [...task];
    newTask[index].complete = true;
    setTask(newTask);
  };

  //context provider
  return (
    <TaskContext.Provider
      value={{ task, addTask, removeTask, updateTask, isCompleted }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
export default TaskContextProvider;
