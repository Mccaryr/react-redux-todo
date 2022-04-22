import { React } from 'react'; 
import './App.scss';
import TodoCardList from './components/TodoCardList/TodoCardList';
import TodoInput from './components/TodoInput/TodoInput';

const App = () => {

  return (
    <div className="App">
      <div className='Header'>
        <h1>React-Redux Todo App</h1>
      </div>
      <TodoInput />
      <div className="todo-container">
      <TodoCardList />
      </div>
    </div>
  );
}

export default App;
