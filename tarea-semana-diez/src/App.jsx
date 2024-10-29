import './App.css'
import Header from './componentes/Header'
import TodoList from './componentes/TodoList'
import Footer from './componentes/Footer'
import React, { useState } from 'react';




const TodoApp = () => {
  const [tasks, setTasks] = useState([]); // Estado para la lista de tareas
  const [taskInput, setTaskInput] = useState(''); // Estado para el input de nueva tarea

  // Función para añadir una nueva tarea
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), title: taskInput, completed: false }]);
      setTaskInput(''); // Limpiar el input después de añadir
    }
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Función para marcar una tarea como completada
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-app">
      <Header 
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        addTask={addTask} 
      />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
      <Footer tasks={tasks} />
    </div>
  );
};

export default TodoApp;


