import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [task, setTask] = useState([
    { id: 1, todo: "Running Test", active: true, complete: true },
    { id: 2, todo: "Buy Unicorn", active: true, complete: false },
    { id: 3, todo: "Task no 3", active: false, complete: false }
  ]);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const addTask = newTodo => {
    const localData = JSON.parse(localStorage.getItem("task"));

    console.log(localData, "dari local data");

    setTask([
      ...localData,
      {
        id: task.length + 1,
        todo: `${newTodo}`,
        active: true,
        complete: false
      }
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

  const isCompleted = index => {
    const newTask = [...task];
    newTask[index].complete = false;
    setTask(newTask);
  };

  return (
    <TaskContext.Provider
      value={{ task, addTask, removeTask, updateTask, isCompleted }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
export default TaskContextProvider;
