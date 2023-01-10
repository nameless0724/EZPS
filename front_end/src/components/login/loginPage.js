import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LogIn from './loginForm'

function LoginPage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [user_name, setUser_name] = useState("");
    const [password, setPassword] = useState("");

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    }

    const handleUser_name = (event) => {
        setUser_name(event.target.value);
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
        employee_id: employee_id,
        user_name: user_name,
        password: password
    }, config)
    .then((response) => {
        console.log(response)
        navigate("");
    })
    .catch((error) => {
        console.log(error)
        alert("Invalid input.");
    })
    };

    return (
        <div className="bg-gray-700">
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">LOG IN</h1> 
            <LogIn 
                handleEmployee_id={handleEmployee_id}
                handleUser_name={handleUser_name}
                handlePassword={handlePassword}
                handleSubmit={handleSubmit}
                employee_id={employee_id}
                user_name={user_name}
                password={password}
            />
        </div>
    )
}

export default LoginPage