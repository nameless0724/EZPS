import axios from 'axios';
import React, { useState } from 'react';
import Payslip from './payslipForm';

function PayslipPage() {
    const [user, setUser] = useState("");
    const [salary, setSalary] = useState("");
    const [sss, setSss] = useState("");
    const [pagibig, setPagIbig] = useState("");
    const [philhealth, setPhilhealth] = useState("");
    const [tax, setTax] = useState("");
    const [netpay, setNetpay] = useState("");
    
    const handleUser = (event) => {
        setUser(event.target.value);
    };
    const handleSalary = (event) => {
        setSalary(event.target.value);
    }
    const handleSss = (event) => {
        setSss(event.target.value);
    };
    const handlePagIbig = (event) => {
        setPagIbig(event.target.value);
    };
    const handlePhilhealth = (event) => {
        setPhilhealth(event.target.value);
    };
    const handleTax =(event) => {
        setTax(event.target.value);
    }; 
    const handleNetpay = (event) => {
        setNetpay(event.target.value);
    }
    const handleSubmit = (event) => {
        event.prentDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
    axios.post("http://localhost:8000/payslip", {
        user: user,
        salary: salary,
        sss: sss,
        pagibig: pagibig,
        philhealth: philhealth,
        tax: tax,
        netpay: netpay
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
            <br />
            <h1>Payslip</h1>
            <Payslip 
                handleUser={handleUser} 
                handleSalary={handleSalary}
                handleSss={handleSss}
                handlePagIbig={handlePagIbig}
                handlePhilhealth={handlePhilhealth}
                handleTax={handleTax}
                handleNetpay={handleNetpay}
                handleSubmit={handleSubmit}
                user={user}
                salary={salary}
                sss={sss}
                pagibig={pagibig}
                philhealth={philhealth}
                tax={tax}
                netpay={netpay}
            />  
        </div>
    )
}

export default PayslipPage