import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Deduction from './deductionForm';
import SidenavNew from '../sidenav/sidenavnew';


function DeductionPage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [absent_amount, setAbsent_amount] = useState("");
    const [sss_contribution, setSss_contribution] = useState("");
    const [pagibig_contribution, setPagibig_contribution] = useState("");
    const [philhealth_contribution, setPhilhealth_contribution] = useState("");
    const [tax_contribution, setTax_contribution] = useState("");
    const [other, setOther] = useState("")

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

    const handleOther = (event) => {
        setOther(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();     
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };      
 
    axios.post("http://localhost:8000/deduction", {
        employee_id: employee_id,
        absent_amount: absent_amount,
        sss_contribution: sss_contribution,
        pagibig_contribution: pagibig_contribution,
        philhealth_contribution: philhealth_contribution,
        tax_contribution: tax_contribution,
        other: other
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
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">DEDUCTIONS</h1><br />
            <Deduction
                handleEmployee_id={handleEmployee_id}
                handleAbsent_amount={handleAbsent_amount}
                handleSss_contribution={handleSss_contribution}
                handlePagibig_contribution={handlePagibig_contribution}
                handlePhilhealth_contribution={handlePhilhealth_contribution}
                handleTax_contribution={handleTax_contribution}
                handleOther={handleOther}
                handleSubmit={handleSubmit}
                employee_id={employee_id}
                absent_amount={absent_amount}
                sss_contribution={sss_contribution}
                pagibig_contribution={pagibig_contribution}
                philhealth_contribution={philhealth_contribution}
                tax_contribution={tax_contribution}       
                other={other}         
            /> 
        </div>
    ) 
}

export default DeductionPage