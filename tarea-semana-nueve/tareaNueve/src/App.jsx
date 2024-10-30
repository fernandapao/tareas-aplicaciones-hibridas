import './App.css'
import Header from './componentes/Header'
import TodoList from './componentes/TodoList'
import Footer from './componentes/Footer'
import React from 'react'


function TodoApp() {

  return (
      <div>
        <Header/>
        <TodoList/>
        <Footer/>
      </div>
  )
}

export default TodoApp

