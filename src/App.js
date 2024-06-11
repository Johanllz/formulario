// src/App.js
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Tareas</h1>
      <div className="row">
        <div className="col-md-4">
          <TaskForm addTask={addTask} />
        </div>
        <div className="col-md-8">
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
