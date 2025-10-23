import { useState } from "react";

export default function Form() {
    let [formData,setFormData] = useState({
        fullName:"",
        userName:"",
        password:""
    })

    let handleInputChange = (event) =>{
        setFormData( (currData)=>{
            return { ...currData,[event.target.name]:event.target.value}
        }

        )
    } 

    return (
    <>
      <h1>Form in React</h1>
      <form action="">
        <div>
          <label htmlFor="fullName">Name:</label>
          <input type="text" placeholder="Enter Name" id="fullName" value={formData.fullName}  name="fullName" onChange={handleInputChange} />
        </div>
        <br />
        <div>
          <label htmlFor="userName">Username:</label>
          <input type="text" placeholder="Enter Username" id="userName" value={formData.userName} name="userName"  onChange={handleInputChange} />
        </div>
        <br />
        <div>
          <label htmlFor="password">password:</label>
          <input type="password" placeholder="Enter password" id="password" value={formData.password} name="password"  onChange={handleInputChange} />
        </div>
        <br />
        <button>Submit</button>
      </form>   
    </>
  );
}
