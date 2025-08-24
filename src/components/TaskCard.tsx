import React, { useState } from 'react';
import { Task } from '../context/TaskContext';

interface TaskCardProps {
  task: Task;
  removeTask: (id: string) => void;
  updateTask: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, removeTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {
    if (!name.trim()) return; 
    updateTask({ ...task, name, description });
    setIsEditing(false);
  };

  // Toggle completed status handler
  const toggleCompleted = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="task-card" style={{ opacity: task.completed ? 0.6 : 1 }}>
      {isEditing ? (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label>Task Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ marginBottom: '8px', padding: '6px', fontSize: '16px' }}
          />
          <label>Task Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
            style={{ marginBottom: '8px', padding: '6px', fontSize: '14px' }}
          />
          <button
            onClick={handleSave}
            style={{ marginBottom: '8px', backgroundColor:"green", border:"none", color:"white", padding:"6px 12px", borderRadius:"4px", cursor:"pointer" }}
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            style={{ marginBottom: '8px', backgroundColor:"red", border:"none", color:"white", padding:"6px 12px", borderRadius:"4px", cursor:"pointer" }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={toggleCompleted}
              style={{ marginRight: '8px' }}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
          </label>
          <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.description}
          </p>
          <button
            onClick={() => removeTask(task.id)}
            style={{
              marginRight: '8px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Delete
          </button>
          <button
            onClick={() => setIsEditing(true)}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default TaskCard;
