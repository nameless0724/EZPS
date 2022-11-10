import { useState } from 'react';
import Profile from './profileForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
    let navigate = useNavigate;
    const [user, setUser] = useState("");
    const [sss, setSss] = useState("");
    const [pagibig, setPagIbig] = useState("");
    const [philhealth, setPhilhealth] = useState("");
    const [tax, setTax] = useState("");

    const handleUser = (event) => {
        setUser(event.target.value);
    };
    const handleSss = (event) => {
        setSss(event.target.value);
    };
    const handlePagIbig = (event) => {
        setPagIbig(event.target.value);
    };
    const handlePhilhealth = (event) => {
        setPhilhealth(event.target.value);
    };
    const handleTax = (event) => {
        setTax(event.target.value); 
    };
    const handleSubmit = (event) => {
        event.preventDefault(); 
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
    axios.post("http://localhost:8000/newprofile", {
        user: user,
        sss: sss,
        pagibig: pagibig,
        philhealth: philhealth, 
        tax: tax,
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
                handleUser={handleUser}
                handleSss={handleSss}
                handlePagIbig={handlePagIbig}
                handlePhilhealth={handlePhilhealth}
                handleTax={handleTax}
                handleSubmit={handleSubmit}
                user={user}
                sss={sss}
                pagibig={pagibig}
                philhealth={philhealth}
                tax={tax}
            />
        </div>
    )
}

export default ProfilePage