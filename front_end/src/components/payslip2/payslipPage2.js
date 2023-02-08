import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SidenavNew from '../sidenav/sidenavnew';
import Payslip2 from './payslipForm2';

function PayslipPage2() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [pay_run_date, setPay_run_date] = useState("");
    const [gross_income, setGross_income] = useState("");
    const [net_amount, setNet_amount] = useState("");

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    }; 

    const handlePay_run_date = (event) => {
        setPay_run_date(event.target.value);
    };

    const handleGross_income = (event) => {
        setGross_income(event.target.value);
    };

    const handleNet_amount = (event) => {
        setNet_amount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();     
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };      
 
    axios.post("http://localhost:8000/payslip", {
        employee_id: employee_id,
        pay_run_date:pay_run_date,
        gross_income: gross_income,
        net_amount: net_amount
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
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">PAYSLIP</h1><br />
            <Payslip
                handleEmployee_id={handleEmployee_id}
                handlePay_run_date={handlePay_run_date}
                handleGross_income={handleGross_income}
                handleNet_amount={handleNet_amount}
                handleSubmit={handleSubmit}
                employee_id={employee_id}
                pay_run_date={pay_run_date}
                gross_income={gross_income}
                net_amount={net_amount}
            /> 
        </div>
    ) 
}

export default PayslipPage2