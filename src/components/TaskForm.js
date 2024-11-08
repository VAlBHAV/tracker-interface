import React, { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Pending');
  const [importantDate, setImportantDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status,
      importantDate,
      createdAt: new Date().toISOString(),
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setStatus('Pending');
    setImportantDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <input
        type="date"
        placeholder="Important Date"
        value={importantDate}
        onChange={(e) => setImportantDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
