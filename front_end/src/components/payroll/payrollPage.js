import React, { useState } from 'react';
import axios from 'axios';
import TopBar from '../topbar/topbar';
import PayrollForm from './payrollForm';
import { useNavigate } from 'react-router-dom';

function PayrollPage() {
    let navigate = useNavigate
    const [user_id, setUser_id] = useState("");
    const [last_name, setLast_name] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [net_pay, setNet_pay] = useState("");
    const [allowance, setAllowance] = useState("");
    const [deduction, setDeduction] = useState("");
    const [gross_net, setGross_net] = useState("");
    const [date_start, setDate_start] = useState("");
    const [date_end, setDate_end] = useState("");

    const handleUser_id = (event) => {
        setUser_id(event.target.value)
    }

    const handleLast_name = (event) => {
        setLast_name(event.target.value)
    }

    const handleFirst_name = (event) => {
        setFirst_name(event.target.value)
    }

    const handleNet_pay = (event) => {
        setNet_pay(event.target.value)
    }

    const handleAllowance = (event) => {
        setAllowance(event.target.value)
    }

    const handleDeduction = (event) => {
        setDeduction(event.target.value)
    }

    const handleGross_net = (event) => {
        setGross_net(event.target.value)
    }

    const handleDate_start = (event) => {
        setDate_start(event.target.value)
    }

    const handleDate_end= (event) => {
        setDate_end(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'appllication/json'
            }
        };
    
    axios.post("http://localhost:8000/payroll", {
        user_id: user_id,
        last_name: last_name,
        first_name: first_name,
        net_pay: net_pay,
        allowance: allowance,
        deduction: deduction,
        gross_net: gross_net,
        date_start: date_start,
        date_end: date_end
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
                handleUser_id={handleUser_id}
                handleLast_name={handleLast_name}
                handleFirst_name={handleFirst_name}
                handleNet_pay={handleNet_pay}  
                handleAllowance={handleAllowance}
                handleDeduction={handleDeduction}
                handleGross_net={handleGross_net}
                handleDate_start={handleDate_start}
                handleDate_end={handleDate_end}
                handleSubmit={handleSubmit}
                user_id={user_id}
                last_name={last_name}
                first_name={first_name}
                net_pay={net_pay}
                allowance={allowance}
                deduction={deduction}
                gross_net={gross_net}
                date_start={date_start}
                date_end={date_end}
            />
        </div>
    )
}
export default PayrollPage