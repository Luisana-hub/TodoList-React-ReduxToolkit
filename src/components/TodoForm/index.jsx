import { useState } from "react";
import {useDispatch} from 'react-redux';
import { addTodos } from "redux/todoSlice";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodos({
            id: new Date().getTime(),
            ...newTodo
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="label" type="text" placeholder="Enter now to do" onChange={handleChange} />
            <button>ADD TO DO</button>
        </form>
    )
};

export default TodoForm;