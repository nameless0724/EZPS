import { useState } from 'react';
import Profile from './profileForm';

function ProfilePage() {
    const [user, setUser] = useState("");
    const [sss, setSss] = useState("");
    const [pagIbig, setPagIbig] = useState("");
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
        alert("Please fill in all the details.");
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
                User={user}
                Sss={sss}
                Pagibig={pagIbig}
                Philhealth={philhealth}
                Tax={tax}
            />
        </div>
    )
}

export default ProfilePage