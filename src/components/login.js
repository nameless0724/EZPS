 import React, { useState } from "react";

 function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("State and methods updating state are sent as props");
  };

  return(
    <div>
      <LogIn
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        Email={email}
        Password={password}
      />

      <form onSubmit={props.handleSubmit}>
        <label htmlFor="email">Email</label><br />
        <input type="email" value={props.Email} placeholder="Email" onChange={props.handleEmail} /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" value={props.Password} placeholder="Password" onChange={props.handlePassword} /><br />
        <button>Submit</button>
      </form> 
    </div>
  )
 }

 export default LogIn