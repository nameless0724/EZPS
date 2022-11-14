import React, { useState } from 'react';
import SignUp from './signupForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    let navigate = useNavigate();
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
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };     
 
    axios.post("http://localhost:8000/signup", {
        email: email,
        password: password
    }, config)
    .then((response) => {
        console.log(response)
        navigate("/newprofile")
    })
    .catch((error) => {
        console.log(error)
        alert("Invalid email or password.");
    })
    }; 

    return (
        <div>
            <h1>Sign Up</h1>
            <SignUp
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleSubmit={handleSubmit}
                email={email}
                password={password}
            /> 
        </div>
    ) 
}

export default SignupPage