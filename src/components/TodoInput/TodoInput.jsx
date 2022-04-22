import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../../features/Todo/TodoSlice'

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState('')
  const dispatch = useDispatch()

  const createTodoHandler = (event) => {
    event.preventDefault();
    console.log(`Adding ${todoInput}`)
    dispatch(createTodo({
      title: todoInput
    }));
    setTodoInput('')
  }


  return (
    <div className='todo-input'>
          <label>To Do
          <input type="text" placeholder='Enter your To do' onChange={e => setTodoInput(e.target.value)} value={todoInput}/>
          </label>
          <button onClick={createTodoHandler}>Add To Do</button>
      </div>
  )
}

export default TodoInput

