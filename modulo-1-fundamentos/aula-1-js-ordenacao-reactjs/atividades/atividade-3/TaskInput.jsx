//src/components/TaskInput.jsx
import React, { useState } from 'react';

export function TaskInput({ onAddTask }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        onAddTask(text);
        setText(''); // Limpa o input
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Digite uma nova tarefa..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}