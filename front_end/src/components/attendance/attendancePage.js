import React, { useState } from 'react';
import axios from 'axios';
import Attendance from './attendanceForm';

function AttendancePage() {
    const [user, setUser] = useState("");
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("");

    const handleUser = (event) => {
        setUser(event.target.value);
    };
    const handleDate = (event) => {
        setDate(event.target.value);
    };
    const handleHour = (event) => {
        setHour(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
    axios.post("http://localhost:8000/attendance", {
        user: user,
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
                handleUser={handleUser}
                handleDate={handleDate}
                handleHour={handleHour}
                handleSubmit={handleSubmit}
                user={user}
                date={date}
                hour={hour}
            />
        </div>
    )
}

export default AttendancePage