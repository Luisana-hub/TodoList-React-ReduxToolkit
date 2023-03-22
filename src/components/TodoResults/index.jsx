import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const TodoResults = () => {
  // Fix an ability to calculate completed tasks
  const initialTodo = useSelector(state => state.todos)
  const result = initialTodo.todoList.filter(item => item.checked === true)

  return  <div className="todo-results">Done: {result.length} </div>
     
};

export default TodoResults;
