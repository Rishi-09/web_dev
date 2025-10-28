import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/slice";
import { markAsDone } from "../features/todo/slice";
export default function Todo(){

    const todos = useSelector((state)=>state.todos);
    const disPatch = useDispatch();
    let removeTodo = (id) =>{
        disPatch(deleteTodo(id));
    }
    let markDoneTodo = (id) =>{
        disPatch(markAsDone(id));
    }
    return (
        <>
        <h1>Todo</h1>
        <AddForm />
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}  >
                   <span style={todo.isDone?{textDecorationLine:"line-through"}:{}} >
                    {todo.task} &nbsp;&nbsp;
              </span>
                <button onClick={()=>removeTodo(todo.id)} >Delete</button>&nbsp;&nbsp;
                <button onClick={()=>markDoneTodo(todo.id)} >Mark As Done</button>
                </li>
            ))}
        </ul>
        
        </>
    )
}