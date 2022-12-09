import React, { useState } from 'react';
import SignUp from './signupForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [user_name, setUser_name] = useState("");
    const [password, setPassword] = useState("");    

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    };

    const handleUser_name = (event) => {
        setUser_name(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();     
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };      
 
    axios.post("http://localhost:8000/signup", {
        empoyee_id: employee_id,
        user_name: user_name,
        password: password
    }, config)
    .then((response) => {
        console.log(response)
        navigate("/") 
    })
    .catch((error) => {
        console.log(error)
        alert("Invalid input.");
    })
    }; 

    return (
        <div>
            <h1>Sign Up</h1>
            <SignUp
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

export default SignupPage 