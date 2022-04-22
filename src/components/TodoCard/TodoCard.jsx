import { useDispatch } from "react-redux"
import { toggleComplete, deleteTodo } from "../../features/Todo/TodoSlice"

const TodoCard = ({todo}) => {
    const dispatch = useDispatch()

    const handleCompletedTodo = () => {
      dispatch(toggleComplete({id: todo.id, completed: !todo.completed}))
    }

    const deleteTodoHandler = () => {
      dispatch(deleteTodo({id: todo.id}))
    }

  return (
    <div>
        <input 
        type="checkbox"
        checked={todo.completed}
        onChange={handleCompletedTodo}>
        </input>
        {todo.title}
        <button onClick={deleteTodoHandler}>Delete</button>
    </div>
  )
}

export default TodoCard