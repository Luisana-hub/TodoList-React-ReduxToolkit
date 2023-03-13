import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import "./App.css";
import TodoForm from "components/TodoForm";
import { ToastContainer } from "react-toastify";

const App = () => {

  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />

      
{/* Se agrega en este componente el contenedor del toastify */}
      <ToastContainer/>
    </div>
  );
};

export default App;
