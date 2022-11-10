import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LogIn from './loginForm'

function LoginPage() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
       
    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };     
  
    axios.post("http://localhost:8000/login", {
        email: email,
        password: password
    }, config)
    .then((response) => {
        console.log(response)
        navigate("/payslip");
    })
    .catch((error) => {
        console.log(error)
        alert("Invalid email or password.");
    })
    };

    return (
        <div>
            <h1>Log In</h1>
            <LogIn 
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleSubmit={handleSubmit}
                email={email}
                password={password}
            />
        </div>
    )
}

export default LoginPage