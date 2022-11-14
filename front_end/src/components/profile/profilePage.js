import { useState } from 'react';
import Profile from './profileForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
    let navigate = useNavigate;
    const [full_name, setFull_name] = useState("");
    const [salary_amount, setSalary_amount] = useState("");
    const [allowance_amount, setAllowance_amount] = useState("");
    const [bonus_amount, setBonus_amount] = useState("");
    const [sss_num, setSss_num] = useState("");
    const [sss_contribution, setSss_contribution] = useState("");
    const [pagibig_num, setPagibig_num] = useState("");
    const [pagibig_contribution, setPagibig_contribution] = useState("");
    const [philhealth_num, setPhilhealth_num] = useState("");
    const [philhealth_contribution, setPhilhealth_contribution] = useState("");
    const [tax_num, setTax_num] = useState("");
    const [tax_contribution, setTax_contribution] = useState("");
    const [email, setEmail] = useState("");

    const handleFull_name = (event) => {
        setFull_name(event.target.value);
    };

    const handleSalary_amount = (event) => {
        setSalary_amount(event.target.value);
    };

    const handleAllowance_amount = (event) => {
        setAllowance_amount(event.target.value);
    }

    const handleBonus_amount = (event) => {
        setBonus_amount(event.target.value);
    }

    const handleSss_num = (event) => {
        setSss_num(event.target.value);
    }

    const handleSss_contribution = (event) => {
        setSss_contribution(event.target.value);
    }

    const handlePagibig_num = (event) => {
        setPagibig_num(event.target.value);
    }

    const handlePagibig_contribution = (event) => {
        setPagibig_contribution(event.target.value);
    }

    const handlePhilhealth_num = (event) => {
        setPhilhealth_num(event.target.value);
    }

    const handlePhilhealth_contribution = (event) => {
        setPhilhealth_contribution(event.target.value);
    }

    const handleTax_num = (event) => {
        setTax_num(event.target.value);
    }

    const handleTax_contribution = (event) => {
        setTax_contribution(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
    axios.post("http://localhost:8000/profile", {
        full_name: full_name,
        salary_amount: salary_amount,
        allowance_amount: allowance_amount,
        bonus_amount: bonus_amount,
        sss_num: sss_num,
        sss_contribution: sss_contribution,
        pagibig_num: pagibig_num,
        pagibig_contribution: pagibig_contribution,
        philhealth_num: philhealth_num,
        philhealth_contribution: philhealth_contribution,
        tax_num: tax_num,
        tax_contribution: tax_contribution,
        email: email
    }, config)
    .then((response) => {
        console.log(response)
        navigate("/payslip");
    })
    .catch((error) => {
        console.log(error)
    }) 
    };

    return (
        <div>
            <h1>User Profile</h1>
            <Profile 
                handleFull_name={handleFull_name}
                handleSalary_amount={handleSalary_amount}
                handleAllowance_amount={handleAllowance_amount}
                handleBonus_amount={handleBonus_amount}
                handleSss_num={handleSss_num}
                handleSss_contribution={handleSss_contribution}
                handlePagibig_num={handlePagibig_num}
                handlePagibig_contribution={handlePagibig_contribution}
                handlePhilhealth_num={handlePhilhealth_num}
                handlePhilhealth_contribution={handlePhilhealth_contribution}
                handleTax_num={handleTax_num}
                handleTax_contribution={handleTax_contribution}
                handleEmail={handleEmail}
                handleSubmit={handleSubmit}
                full_name={full_name}
                salary_amount={salary_amount}
                allowance_amount={allowance_amount}
                bonus_amount={bonus_amount}
                sss_num={sss_num}
                sss_contribution={sss_contribution}
                pagibig_num={pagibig_num}
                pagibig_contribution={pagibig_contribution}
                philhealth_num={philhealth_num}
                philhealth_contribution={philhealth_contribution}
                tax_num={tax_num}
                tax_contribution={tax_contribution}
                email={email}                
            />
        </div>
    )
}

export default ProfilePage