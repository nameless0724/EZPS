import { useState } from 'react';
import SignUp from './signUp';

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [user, setUser] =useState("");
    const [id, setId] = useState("");
    const [sss, setSss] = useState("");
    const [pagIbig, setPagIbig] = useState("");
    const [philhealth, setPhilhealth] = useState("");
    const [tax, setTax] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleUser = (event) => {
        setUser(event.target.value);
    };
    const handleId = (event) => {
        setId(event.target.value);
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
    const handleTax = (event) => {
        setTax(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Please fill in all the details.");
    };

    return (
        <div>
            <h1> Sign Up</h1>
            <SignUp 
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleUser={handleUser}
                handleId={handleId}
                handleSss={handleSss}
                handlePagIbig={handlePagIbig}
                handlePhilhealth={handlePhilhealth}
                handleTax={handleTax}
                handleSubmit={handleSubmit}
                Email={email}
                Password={password}
                User={user}
                Id={id}
                Sss={sss}
                Pagibig={pagIbig}
                Philhealth={philhealth}
                Tax={tax}
            />
        </div>
    )
}

export default SignUpPage