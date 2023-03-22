import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const TodoResults = () => {
  // Fix an ability to calculate completed tasks
  const initialTodo = useSelector(state => state.todos)

  return (
           <div className="todo-results">Done:</div>
  )       
};

export default TodoResults;
