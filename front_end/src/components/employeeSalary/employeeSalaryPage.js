import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeSalary from './employeeSalaryForm';

function EmployeeSalaryPage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [salary, setSalary] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("");
    const [effective_date, setEffective_date] = useState("");

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    }; 

    const handleSalary = (event) => {
        setSalary(event.target.value);
    };

    const handlePosition = (event) => {
        setPosition(event.target.value);
    };

    const handleStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleEffective_date = (event) => {
        setEffective_date(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();     
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };      
 
    axios.post("http://localhost:8000/employeesalary", {
        empoyee_id: employee_id,
        salary: salary,
        position: position,
        status: status,
        effective_date: effective_date
    }, config)
    .then((response) => {
        console.log(response)
        navigate("")
    })
    .catch((error) => {
        console.log(error)
        alert("Invalid input.");
    })
    }; 

    return (
        <div>
            <h1>Employee Salary Information</h1>
            <EmployeeSalary
                handleEmployee_id={handleEmployee_id}
                handleSalary={handleSalary}
                handlePosition={handlePosition}
                handleStatus={handleStatus}
                handleEffective_date={handleEffective_date}
                handleSubmit={handleSubmit}
                employee_id={employee_id}
                salary={salary}
                position={position}
                status={status}
                effective_date={effective_date}
            /> 
        </div>
    ) 
}

export default EmployeeSalaryPage  