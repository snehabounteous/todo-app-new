import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';

function App() {
  return (
    <TaskProvider>
      <Navbar />
      <div className="app-container">
        <h1>React To-Do List</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
