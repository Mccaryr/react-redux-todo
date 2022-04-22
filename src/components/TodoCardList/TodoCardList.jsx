import React from 'react'
import TodoCard from '../TodoCard/TodoCard'
import { useSelector } from 'react-redux'

const TodoCardList = () => {
  const todos = useSelector((state) => state.todos)

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id}/>
      ))}
    </div>
  )
}

export default TodoCardList