import React from "react";
import "./App.css";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <div className="App">
      <div className="bg-cyan-300">
          <h1 className="text-center font-bold">Enter Your today's works to do</h1>
        <div className="App h-screen flex justify-center items-center">
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
