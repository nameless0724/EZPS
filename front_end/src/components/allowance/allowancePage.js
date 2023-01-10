import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Allowance from './allowanceForm';
import SidenavNew from '../sidenav/sidenavnew';

function AllowancePage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [rice, setRice] = useState("");
    const [medical, setMedical] = useState("");
    const [clothing, setClothing] = useState("");
    const [transportation, setTransportation] = useState("");
    const [other, setOther] = useState("");

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    }; 

    const handleRice = (event) => {
        setRice(event.target.value);
    };

    const handleMedical = (event) => {
        setMedical(event.target.value);
    };

    const handleClothing = (event) => {
        setClothing(event.target.value);
    };

    const handleTransportation = (event) => {
        setTransportation(event.target.value)
    }

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
 
    axios.post("http://localhost:8000/allowance", {
        employee_id: employee_id,
        rice: rice,
        medical: medical,
        clothing: clothing,
        transportation: transportation,
        other: other
    }, config)
    .then((response) => {
        console.log(response)
        navigate("")
    })
    .catch((error) => {
        console.log(error.response.data)
        alert("Invalid input.");
    })
    }; 

    return (
        <div className="bg-gray-700">
            <SidenavNew />
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">ALLOWANCES</h1><br />
            <Allowance
                handleEmployee_id={handleEmployee_id}
                handleRice={handleRice}
                handleMedical={handleMedical}
                handleClothing={handleClothing}
                handleTransportation={handleTransportation}
                handleOther={handleOther}
                handleSubmit={handleSubmit}
                employee_id={employee_id}
                rice={rice}
                medical={medical}
                clothing={clothing}
                transportation={transportation}
                other={other}
            />
        </div>
    ) 
}

export default AllowancePage