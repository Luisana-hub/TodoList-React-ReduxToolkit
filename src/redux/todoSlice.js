import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

const initialState = {
  todoList: []
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

    //toggleCheckAction: (state, action) => {
      
   //},

    setTodoList: (state, action) =>{
      state.todoList= action.payload
    }
 }
});

export const { setTodoList } = todoSlice.actions;

// peticiones a la Api
export const getTodosAction = () => (dispatch) => {
    axios.get('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos')
         .then((response) => {
            dispatch(setTodoList(response.data));
           }) 
         .catch((error) => 
         toast.warn("Error en la peticion GET a https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos ")
         ); 
}
export const postTodosAction = (state) => () => {
    const request = {
      method:'POST',
      body: JSON.stringify(state),
      headers: {"Content-type":"application/json; charset=UTF-8"}
    };
    axios.post('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos', request)
          .then(response => 
                response.json())
          .catch((error) => 
          console.log(error),
          toast.warn("Error en la peticion POST a https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos ")
          ); 
}

export const {addTodos, deleteTodo} = todoSlice.actions
export default todoSlice.reducer