import React from 'react';
import TodoItem from './TodoItem'; // Asegúrate de que esta ruta sea correcta

const TodoList = () => {
  return (
    <ul className="todo-list">
      <li>
        <TodoItem titulo="Estudiar React">
          <p>Revisar los conceptos de componentes y props.</p>
        </TodoItem>
      </li>
      <li>
        <TodoItem titulo="Completar ejercicio de componentización">
          <p>Asegúrate de que todos los componentes estén bien estructurados.</p>
        </TodoItem>
      </li>
      <li>
        <TodoItem titulo="Revisar la estructura de componentes">
          <p>Verifica que todos los componentes tengan su respectiva lógica.</p>
        </TodoItem>
      </li>
      <li>
        <TodoItem titulo="Repasar conceptos de props y children">
          <p>Práctica cómo pasar props y utilizar children en los componentes.</p>
        </TodoItem>
      </li>
    </ul>
  );
};

export default TodoList;

