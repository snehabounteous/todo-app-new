import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from './TaskCard';

const TaskList = () => {
  const { tasks, removeTask, updateTask } = useTasks();

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  if (tasks.length === 0) {
    return <p>No tasks added yet.</p>;
  }

  return (
    <div className="task-list">
      <h3>Pending Tasks</h3>
      {pendingTasks.length === 0 ? <p>No pending tasks</p> : pendingTasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}

      <h3>Completed Tasks</h3>
      {completedTasks.length === 0 ? <p>No completed tasks</p> : completedTasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
