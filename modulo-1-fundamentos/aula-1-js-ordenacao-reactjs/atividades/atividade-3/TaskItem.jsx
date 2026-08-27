//src/components/TaskItem.jsx
import React from 'react';

export function TaskItem({ task, onDelete }) {
  return (
    <li className="task-item">
      <span>{task}</span>
      <button onClick={onDelete} className="delete-btn">Remover</button>
    </li>
  );
}