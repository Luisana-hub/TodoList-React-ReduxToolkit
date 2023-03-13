import React, {useEffect} from "react";
import "./styles.css";
import TodoListItem from "components/TodoListItem";
import {useSelector, useDispatch} from 'react-redux'; 
import { deleteTodo, getTodosAction } from "redux/todoSlice";

const TodoList = () => {
  
 const initialTodo = useSelector(state => state.todos)
 
 const dispatch = useDispatch()

 useEffect(() => {
      dispatch(getTodosAction())
 }, [dispatch])


  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    dispatch(deleteTodo(todoId))
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        <ul >
          {initialTodo.todoList.map((item)=>(
            <li key={item.id}>
              <div >
                <TodoListItem 
                  label={item.label} 
                  onDelete={() => handleDelete(item.id)} 
                  />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
