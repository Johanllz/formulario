// src/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group mb-3">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nombre de la tarea"
          className="form-control rounded-left"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary rounded-right">
            Agregar tarea
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
