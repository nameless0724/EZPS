import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignupForm from './signupForm';
import TopBar from '../topbar/topbar';

function SignupPage() {
    let navigate = useNavigate;
    const [signup, setSignup] = useState({
        username: "",
        password: ""
    })

    const handleSignup = (event) => {
        setSignup(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
    
    axios.post("http://localhost:8000/signup", {
        ...signup
    }, config)
    .then((response) => {
        console.log(response)
        navigate("/payroll")
    })
    .catch((error) => {
        console.log(error)
        alert("Invalid input");
    })
    };

    return (
        <div className="bg-gray-700">
            <TopBar />
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">SIGN UP</h1><br />
            <br />
            <SignupForm
                handleLogin={handleSignup}
                handleSubmit={handleSubmit}
                signup={signup}
            />
        </div>
    )
}
export default SignupPage