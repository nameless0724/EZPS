import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeProfile from './employeeProfForm';

function EmployeeProfilePage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [last_name, setLast_name] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [middle_name, setMiddle_name] = useState("");
    const [date_hired, setDate_hired] = useState("");
    const [sss_num, setSss_num] = useState("");
    const [pagibig_num, setPagibig_num] = useState("");
    const [philhealth_num, setPhilhealth_num] = useState("");
    const [tax_num, setTax_num] = useState("");

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    }; 

    const handleLast_name = (event) => {
        setLast_name(event.target.value);
    };

    const handleFirst_name = (event) => {
        setFirst_name(event.target.value);
    };

    const handleMiddle_name = (event) => {
        setMiddle_name(event.target.value);
    };

    const handleDate_hired = (event) => {
        setDate_hired(event.target.value);
    };

    const handleSss_num = (event) => {
        setSss_num(event.target.value);
    };

    const handlePagibig_num = (event) => {
        setPagibig_num(event.target.value);
    };

    const handlePhilhealth_num = (event) => {
        setPhilhealth_num(event.target.value);
    };

    const handleTax_num = (event) => {
        setTax_num(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();     
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };      
 
    axios.post("http://localhost:8000/employee", {
        empoyee_id: employee_id,
        last_name: last_name,
        first_name: first_name,
        middle_name: middle_name,
        date_hired: date_hired,
        sss_num: sss_num,
        pagibig_num: pagibig_num,
        philhealth_num: philhealth_num,
        tax_num: tax_num
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
            <h1>Employee Profile</h1>
            <EmployeeProfile
                handleEmployee_id={handleEmployee_id}
                handleLast_name={handleLast_name}
                handleFirst_name={handleFirst_name}
                handleMiddle_name={handleMiddle_name}
                handleDate_hired={handleDate_hired}
                handleSss_num={handleSss_num}
                handlePagibig_num={handlePagibig_num}
                handlePhilhealth_num={handlePhilhealth_num}
                handleTax_num={handleTax_num}
                handleSubmit={handleSubmit}
                employee_id={employee_id}
                last_name={last_name}
                first_name={first_name}
                middle_name={middle_name}
                date_hired={date_hired}
                sss_num={sss_num}
                pagibig_num={pagibig_num}
                philhealth_num={philhealth_num}
                tax_num={tax_num}
            /> 
        </div>
    ) 
}

export default EmployeeProfilePage