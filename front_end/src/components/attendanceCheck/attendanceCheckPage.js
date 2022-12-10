import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AttendanceChecking from './attendanceCheckingForm';

function AttendanceCheckingPage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [hours_rendered, setHours_rendered] = useState("");
    const [period_start, setPeriod_start] = useState("");
    const [period_end, setPeriod_end] = useState("");

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    }; 

    const handleHours_rendered = (event) => {
        setHours_rendered(event.target.value);
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
 
    axios.post("http://localhost:8000/attendance", {
        empoyee_id: employee_id,
        hours_rendered: hours_rendered,
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
            <h1>Employee Attendance</h1>
            <AttendanceChecking
                handleEmployee_id={handleEmployee_id}
                handleHours_rendered={handleHours_rendered}
                handlePeriod_start={handlePeriod_start}
                handlePeriod_end={handlePeriod_end}
                handleSubmit={handleSubmit}
                employee_id={employee_id}
                
            /> 
        </div>
    ) 
}

export default AttendanceCheckingPage