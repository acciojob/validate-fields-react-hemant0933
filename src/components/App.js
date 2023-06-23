
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && password){
      setError("");
    }else{
      setError("Both username and password are required");
    }
  }

  return (
    <div>
        <form>
          <label for="name">Username: </label>
          <input type="text" placeholder="Name" onChange = {(e)=>setName(e.target.value)}/><br/>
          <label for="password">Password: </label>
          <input type="password" placeholder="password" onChange = {(e)=>setPassword(e.target.value)}/><br/>
          {(name === "" || password === "") && 
            <p id="errorMessage" style={{color:'red'}}>{error}</p>}
          <button  onClick={handleSubmit}>Submit</button>
        </form>

    </div>
  )
}

export default App
