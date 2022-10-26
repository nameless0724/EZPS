import { useState } from 'react';
import Payslip from './payslipForm';

function PayslipPage() {
    const [user, setUser] = useState("");
    const [salary, setSalary] = useState("");
    const [sss, setSss] = useState("");
    const [pagIbig, setPagIbig] = useState("");
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
        alert("This area is required.");
    };

    return (
        <div>
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
                User={user}
                Salary={salary}
                Sss={sss}
                Pagibig={pagIbig}
                Philhealth={philhealth}
                Tax={tax}
                Netpay={netpay}
            />
        </div>
    )
}

export default PayslipPage