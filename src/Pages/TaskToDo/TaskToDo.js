import React, { useState } from "react";

function TaskToDo() {
    const[tasks, setTasks] = useState(["Read", "Code", "Sleep"]);

  return (
    <div>
      <div style={{display: "flex", justifyContent: "left", flexDirection: "column" }}>
        <h1 style={{textAlign: "left"}}>My Tasks</h1>
        <div style={{display: "flex", justifyContent: "left", }}>
          <ol>
            {tasks.map((task, index) => 
            <li key={index}>{task}</li>)}
          </ol>
        </div>
        <input type="text" />
      </div>
    </div>
  );
}

export default TaskToDo;
