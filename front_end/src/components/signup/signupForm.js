import React, { useState } from 'react';
import SignUp from './signupPage';

function SignupPage() {
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
        alert("You are required to enter your email and password.");
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <SignUp
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleSubmit={handleSubmit}
                Email={email}
                Password={password}
            /> 
        </div>
    )
}

export default SignupPage