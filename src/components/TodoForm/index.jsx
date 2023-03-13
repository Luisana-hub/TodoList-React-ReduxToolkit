import { useState } from "react";
import "./style.css";
import {useDispatch} from 'react-redux';
import { addTodos, postTodosAction } from "redux/todoSlice";

const TodoForm = () => {
    const [newTodo, setTodo] = useState ({
        label: "",
        checked: false
    });
    
    const handleChange = (e) => {
        setTodo({
            ...newTodo, [e.target.name]: e.target.value
        })
    }; 

    const dispatch = useDispatch()
// uso de las acciones para agregar todo y post a la api
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodos({
            id: new Date().getTime(),
            ...newTodo
        }));
        dispatch(postTodosAction());
    };

    return (
        <div className="form">
            <form className="form-content" onSubmit={handleSubmit}>
                <input name="label" type="text" placeholder="Enter new to do" onChange={handleChange} />
                <button className="buttom-form" >ADD TO DO</button>
            </form>
            
        </div>
        
    )
};

export default TodoForm;