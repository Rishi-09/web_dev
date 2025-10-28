import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/slice";


export default function AddForm(){
    let [task,setTask] = useState("");
    const dispatch = useDispatch();
    let handleInputChange = (event) =>{
        setTask(event.target.value)
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        console.log("Dispatch:",dispatch)
        dispatch(addTodo(task));
        setTask("");
    }
    return (
        <>
        <form action="" onSubmit={handleSubmit} >
            <input type="text" placeholder="Enter Task to Add" onChange={handleInputChange} value={task} />
            <br /><br />
            <button>Submit</button>
        </form>
        </>)
}