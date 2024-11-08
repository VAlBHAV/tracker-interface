import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskTrendChart from '../components/TaskTrendChart';
import '../styles/GlobalStyles.css';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState(''); // 'asc' for ascending, 'desc' for descending

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedTasks = [...tasks].sort((a, b) => {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return order === 'asc'
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    setTasks(sortedTasks);
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <TaskForm addTask={addTask} />
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={() => handleSort('asc')}>Sort by Priority (Asc)</button>
        <button onClick={() => handleSort('desc')}>Sort by Priority (Desc)</button>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <TaskTrendChart tasks={tasks} />
    </div>
  );
}
