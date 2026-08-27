//src/App.jsx
import React, { useState } from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskItem } from './components/TaskItem';
import './App.css';

export function App() {
  // Passo 7: Hook useState para gerenciar a lista de tarefas
  const [tasks, setTasks] = useState(['Estudar Componentes', 'Praticar Props e State']);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app-container">
      <Header title="Gerenciador ByteClass" />
      <TaskInput onAddTask={addTask} />
      
      <ul className="task-list">
        {tasks.map((task, index) => (
          <TaskItem 
            key={index} 
            task={task} 
            onDelete={() => removeTask(index)} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;