import React, { useState } from 'react';
import axios from 'axios';
import PayslipForm from './payslipForm';


function PayslipPage() {
    const [payslip, setPayslip] = useState({
        employee_id: "",
        last_name: "",
        first_name: "",
        middle_name: "",
        salary: "",
        allowance: "",
        deduction: "",
        net_pay: "",
    })

    const handlePayslip = (e) => {
        setPayslip(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
    axios.post("http://localhost:8000/payslip", {
        ...payslip
    }, config)
    .then((response) => {
    console.log(response)
    })
    .catch((error) => {
        console.log(error)
        alert("Invalid input");
    })
    };

    return (
        <div className="bg-gray-700">
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">PAYSLIP</h1><br />
            <PayslipForm
                handlePayslip={handlePayslip}
                handleSubmit={handleSubmit}
                payslip={payslip}

            />
        </div>
    )
}
export default PayslipPage