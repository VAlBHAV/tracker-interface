import React from 'react';

export default function TaskList({ tasks, deleteTask }) {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-card ${
              task.priority === 'High'
                ? 'high-priority'
                : task.priority === 'Medium'
                ? 'medium-priority'
                : 'low-priority'
            }`}
          >
            <h3>{task.title}</h3>
            <p>Description: {task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <p>Important Date: {task.importantDate}</p>
            <p>Created At: {new Date(task.createdAt).toLocaleDateString()}</p>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
