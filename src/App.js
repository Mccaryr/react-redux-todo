import { React, useState } from 'react'; 
import './App.scss';
import TodoCardList from './components/TodoCardList/TodoCardList';
import { useDispatch } from 'react-redux'
import { createTodo } from './features/Todo/TodoSlice'

const App = () => {
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
    <div className="App">
      <div className='Header'>
        <h1>React-Redux Todo App</h1>
      </div>
      <div className='todo-input'>
          <label>To Do
          <input type="text" placeholder='Enter your To do' onChange={e => setTodoInput(e.target.value)} value={todoInput}/>
          </label>
          <button onClick={createTodoHandler}>Add To Do</button>
      </div>
      <div className="todo-container">
      <TodoCardList />
      </div>
    </div>
  );
}

export default App;
