
import React from 'react';
const TodoItem = ({ titulo, completed, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="todo-item">
      <h2 style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {titulo}
      </h2>
      <button onClick={toggleTaskCompletion}>
        {completed ? 'Desmarcar' : 'Completar'}
      </button>
      <button onClick={deleteTask}>Eliminar</button>
    </div>
  );
};

export default TodoItem;

