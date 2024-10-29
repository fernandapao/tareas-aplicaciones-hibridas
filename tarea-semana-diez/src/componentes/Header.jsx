import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Lista de tareas para el desafio 9</h1>
      <input 
        type="text" 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
        placeholder="Añadir nueva tarea"
      />
      <button onClick={addTask}>Añadir</button>
    </header>
  );
};

export default Header;
