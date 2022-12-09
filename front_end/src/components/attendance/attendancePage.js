import React, { useState } from 'react';
import axios from 'axios';
import Attendance from './attendanceForm';

function AttendancePage() {
    const [last_name, setLast_name] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [middle_name, setMiddle_name] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");

    const handleLast_name = (event) => {
        setLast_name(event.target.value);
    };
    
    const handleFirst_name = (event) => {
        setFirst_name(event.target.value);
    }

    const handleMiddle_name = (event) => {
        setMiddle_name(event.target.value);
    }

    const handleDate = (event) => {
        setDate(event.target.value);
    }

    const handleHour = (event) => {
        setHour(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
    axios.post("http://localhost:8000/attendance", {
        last_name: last_name,
        first_name: first_name,
        middle_name: middle_name,
        date: date,
        hour: hour
    }, config)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    }) 
    };
    
    return (
        <div>
            <h1>Attendance Monitoring</h1>
            <Attendance 
                handleLast_name={handleLast_name}
                handleFirst_name={handleFirst_name}
                handleMiddle_name={handleMiddle_name}
                handleDate={handleDate}
                handleHour={handleHour}
                handleSubmit={handleSubmit}
                last_name={last_name}
                first_name={first_name}
                middle_name={middle_name}
                date={date}
                hour={hour}
            /> 
        </div>
    )
}

export default AttendancePage 