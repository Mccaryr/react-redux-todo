import { createSlice} from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],

    reducers: {
        createTodo: (state, action) => {
           const newTodo = {
             id: Date.now(),
             title: action.payload.title,
             completed: false
           }
           state.push(newTodo)
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id)

            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            debugger;
            state.splice(index,1)
        }

        }
    }
)

export const {createTodo, toggleComplete, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;


