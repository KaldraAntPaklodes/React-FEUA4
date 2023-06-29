import React, { useEffect, useState } from "react";

const App = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'))
  const [tasks, addTasks] = useState(storedTasks);
  
  const addTask = (event) => {
    event.preventDefault();
    const taskInput = document.querySelector("#taskInput");
    const newTask = taskInput.value;
    if (newTask.trim() !== "") {
      addTasks((prevTasks) => [...prevTasks, newTask]);
      taskInput.value = "";
    }
  };

  const taskDelete = (index) => {
    addTasks((tasks) => tasks.filter((_, i) => i !== index));
  };

  useEffect(() => {   
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="container">
        <div className="mainBox">
            <h2>You have {tasks.length} Todos</h2>
            <div className="tasks">
              {tasks.map((task, index) => (
                <div key={index} className="task">
                  <p>task {index+1}: {task}</p>
                  <button
                    className="taskDeleteButton"
                    onClick={() => taskDelete(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <form onSubmit={addTask}>
              <input type="text" id="taskInput" placeholder="Enter item" />
              <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
  );
};

export default App;
