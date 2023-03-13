import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  todoList: [
    // {
    //   id: "1",
    //   label: "todo1",
    //   checked: false
    // }
  ]
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) =>{
      state.todoList.push(action.payload)
    },

    deleteTodo: (state, action) => {
      const todoFound= state.todoList.find(item => item.id === action.payload)
      if (todoFound) {
        state.todoList.splice(state.todoList.indexOf(todoFound), 1)
      }
    },

    // toggleCheckAction: () => {

    // },

    setTodoList: (state, action) =>{
      state.todoList= action.payload
    }
 }
});

export const { setTodoList } = todoSlice.actions;

export const getTodosAction = () => (dispatch) => {
    axios.get('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos')
         .then((response) => {
            dispatch(setTodoList(response.data));
           }) 
         .catch((error) => console.log(error)); 
}

export const {addTodos, deleteTodo} = todoSlice.actions
export default todoSlice.reducer