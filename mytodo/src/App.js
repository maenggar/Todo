import React from "react";
import Home from "./webapp/pages/Home";
import TaskContextProvider from "./StoreContext/TaskContext";
function App() {
  return (
    <div>
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </div>
  );
}

export default App;
