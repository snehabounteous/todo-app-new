import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { useInput } from '../hooks/useInput';

const TaskForm: React.FC = () => {
  const nameInput = useInput('');
  const descInput = useInput('');
  const { addTask } = useTasks();
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (!nameInput.value.trim()) {
      setError('Task name is required.');
      return;
    }
    setError('');
    addTask(nameInput.value, descInput.value);
    nameInput.reset();
    descInput.reset();
  };

  return (
    <div className="task-form">
      <input type="text" placeholder="Task Name" {...nameInput.bind} />
      <input type="text" placeholder="Task Description" {...descInput.bind} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
