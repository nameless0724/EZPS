import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
       
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/payslip");
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }     
 
    axios.post("http://localhost:8000/login", {
        email: email,
        password: password
    }, config)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error);
      })
    };

    return (
       
        <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label><br/>
              <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
              <label htmlFor="password">Password</label><br/>
              <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/>
              <button>Log In</button>
            </form>
            
            <Link to="/signup">Not registered yet? Click here.</Link>
        </div>
      

    )
}

export default LoginPage