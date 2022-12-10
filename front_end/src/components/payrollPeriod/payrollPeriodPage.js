import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PayrollPeriod from './payrollPeriodForm';

function PayrollPeriodPage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [period_start, setPeriod_start] = useState("");
    const [period_end, setPeriod_end] = useState("");

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    }; 

    const handlePeriod_start = (event) => {
        setPeriod_start(event.target.value);
    };

    const handlePeriod_end = (event) => {
        setPeriod_end(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();     
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };      
 
    axios.post("http://localhost:8000/payrollperiod", {
        empoyee_id: employee_id,
        period_start: period_start,
        period_end: period_end
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
            <h1>Payroll Period</h1>
            <PayrollPeriod
                handleEmployee_id={handleEmployee_id}
                handlePeriod_start={handlePeriod_start}
                handlePeriod_end={handlePeriod_end}
                handleSubmit={handleSubmit}
                employee_id={employee_id}
                period_start={period_start}
                period_end={period_end}
            /> 
        </div>
    ) 
}

export default PayrollPeriodPage