// src/TaskList.js
import React from 'react';

function TaskList({ tasks, deleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span>{task}</span>
          <button
            onClick={() => deleteTask(index)}
            className="btn btn-danger btn-sm"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
