import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoApp() {
  let [tasks, settasks] = useState([
    { task: "Your Tasks appear Here", id: uuidv4(),isDone:false },
  ]);

  let [newTask, setnewTask] = useState("");
  let addTask = () => {
    settasks((prevTasks) => {
      return [...prevTasks, { task: newTask, id: uuidv4(),isDone:false }];
    });
    setnewTask("");
  };

  let updateTask = (event) => {
    setnewTask(event.target.value);
  };

  let delTask = (id) => {
    let copy = tasks.filter((task)=>task.id!=id);
    settasks((tasks)=>{
       return [...copy];
    });
  };

  let markAllDone=()=>{
    settasks((prevTasks)=>prevTasks.map((task)=>{
        return {
            ...task,
            isDone:true,
        };
    }))
  }

  let markDone=(id)=>{
    settasks((prevTasks)=>prevTasks.map((task)=>{
        if(task.id===id){
            return {
            ...task,
            isDone:true,
        }
        }else{
            return {
                ...task
            }
        }
    }))
  }
  let markAllNotDone=()=>{
    settasks((prevTasks)=>prevTasks.map((task)=>{
        return {
            ...task,
            isDone:false,
        };
    }))
  }

  let markNotDone=(id)=>{
    settasks((prevTasks)=>prevTasks.map((task)=>{
        if(task.id===id){
            return {
            ...task,
            isDone:false,
        }
        }else{
            return {
                ...task
            }
        }
    }))
  }
  return (
    <>
      <input
        type="text"
        id="task"
        placeholder="Add Task"
        value={newTask}
        onChange={updateTask}
      />
      <br /> <br />
      <button onClick={addTask}>Add Task</button>
      <br /> <br />
      <hr />
      <h1>Tasks To Do</h1>
      <ul className="list"  >
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <span style={task.isDone?{textDecorationLine:"line-through"}:{}} >
                {task.task} &nbsp;&nbsp;
              </span>
              <span>
                <button onClick={() => delTask(task.id)}> Delete </button> &nbsp;&nbsp;&nbsp;
                <button onClick={() => markDone(task.id)}> Mark as Done </button> &nbsp;&nbsp;&nbsp;
                <button onClick={() => markNotDone(task.id)}> Mark as Not Done </button> &nbsp;&nbsp;&nbsp;
              </span>
            </li> 
          );
        })}
      </ul>
      <button onClick={markAllDone} >Mark All As Done</button>&nbsp;&nbsp;&nbsp;
      <button onClick={markAllNotDone} >Mark All As Not Done</button>&nbsp;&nbsp;&nbsp;
      
    </>
  );
}
