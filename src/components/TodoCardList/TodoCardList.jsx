import React from 'react'
import TodoCard from '../TodoCard/TodoCard'
import { useSelector } from 'react-redux'
import './TodoCardList.scss'

const TodoCardList = () => {
  const todos = useSelector((state) => state.todos)

  return (
    <div className='todo-container'>
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id}/>
      ))}
    </div>
  )
}

export default TodoCardList