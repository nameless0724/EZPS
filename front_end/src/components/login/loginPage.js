import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from './loginForm';
import TopBar from '../topbar/topbar';

function LoginPage() {
    let navigate = useNavigate;
    const [login, setLogin] = useState({
        username: "",
        password: "",
    })

    const handleLogin = (event) => {
        setLogin(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }//, body: JSON.stringify(login)
        };
    
    axios.post("http://localhost:8000/login", {
        ...login
    }, config)
    .then((response) => {
        console.log(response)
        navigate("/");
    })
    .catch((error) => {
        console.log(error)
        alert("Invalid input");
    })
    };

    return (
        <div className="bg-gray-700">
            <TopBar />
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">LOGIN</h1><br />
            <br />
            <LoginForm
                handleLogin={handleLogin}
                handleSubmit={handleSubmit}
                login={login}
            />
        </div>
    )

}
export default LoginPage