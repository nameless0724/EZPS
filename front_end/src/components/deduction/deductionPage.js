import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Deduction from './deductionForm';

function DeductionPage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [absent_amount, setAbsent_amount] = useState("");
    const [sss_contribution, setSss_contribution] = useState("");
    const [pagibig_contribution, setPagibig_contribution] = useState("");
    const [philhealth_contribution, setPhilhealth_contribution] = useState("");
    const [tax_contribution, setTax_contribution] = useState("")

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    }; 

    const handleAbsent_amount = (event) => {
        setAbsent_amount(event.target.value);
    };

    const handleSss_contribution = (event) => {
        setSss_contribution(event.target.value);
    };

    const handlePagibig_contribution = (event) => {
        setPagibig_contribution(event.target.value);
    };

    const handlePhilhealth_contribution = (event) => {
        setPhilhealth_contribution(event.target.value);
    };

    const handleTax_contribution = (event) => {
        setTax_contribution(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();     
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };      
 
    axios.post("http://localhost:8000/deduction", {
        empoyee_id: employee_id,
        absent_amount: absent_amount,
        sss_contribution: sss_contribution,
        pagibig_contribution: pagibig_contribution,
        philhealth_contribution: philhealth_contribution,
        tax_contribution: tax_contribution
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
            <h1>Deductions</h1>
            <Deduction
                handleEmployee_id={handleEmployee_id}
                handleAbsent_amount={handleAbsent_amount}
                handleSss_contribution={handleSss_contribution}
                handlePagibig_contribution={handlePagibig_contribution}
                handlePhilhealth_contribution={handlePhilhealth_contribution}
                handleTax_contribution={handleTax_contribution}
                handleSubmit={handleSubmit}
                employee_id={employee_id}
                absent_amount={absent_amount}
                sss_contribution={sss_contribution}
                pagibig_contribution={pagibig_contribution}
                philhealth_contribution={philhealth_contribution}
                tax_contribution={tax_contribution}                
            /> 
        </div>
    ) 
}

export default DeductionPage