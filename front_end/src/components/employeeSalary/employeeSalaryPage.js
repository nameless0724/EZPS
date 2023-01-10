import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeSalary from './employeeSalaryForm';
import SidenavNew from '../sidenav/sidenavnew';

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
        employee_id: employee_id,
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
        <div className="bg-gray-700">
            <SidenavNew />
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">EMPLOYEE SALARY INFORMATION</h1><br />
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