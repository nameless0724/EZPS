import React, { useState } from 'react';
import axios from 'axios';
import TopBar from '../topbar/topbar';
import PayrollForm from './payrollForm';
import { useNavigate } from 'react-router-dom';

function PayrollPage() {
    let navigate = useNavigate
    const [payroll, setPayroll] = useState({
        user_id: "",
        last_name: "",
        first_name: "",
        net_pay: "",
        allowance: "",
        deduction: "",
        gross_pay: "",
        date_start: "",
        date_end: ""
    })

    const handlePayroll = (event) => {
        setPayroll(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'appllication/json'
            }//, body: JSON.stringify(payroll)
        };
    
    axios.post("http://localhost:8000/payroll", {
        ...payroll
    }, config)
    .then((response) => {
        console.log(response)
        navigate("/payrolllist")
    })
    };

    return (
        <div className="bg-gray-700">
            <TopBar />
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">PAYROLL</h1><br />
            <br />
            <PayrollForm 
                handlePayroll={handlePayroll}
                handleSubmit={handleSubmit}
                payroll={payroll}
            />
        </div>
    )
}
export default PayrollPage