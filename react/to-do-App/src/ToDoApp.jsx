import { useState } from "react";
export default function ToDoApp() {
  let [tasks, settasks] = useState(["task1"]);
  let [newTask, setnewTask] = useState("");
  let addTask = () => {
    settasks([...tasks,newTask]);
    setnewTask("");
  };

  let updateTask = (event) => {
    setnewTask(event.target.value);
};

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
      <ul>
        {tasks.map((task) => {
          return <li>{task}</li>;
        })}
      </ul>
    </>
  );
}
