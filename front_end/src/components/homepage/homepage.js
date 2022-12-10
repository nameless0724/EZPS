import { NavLink } from 'react-router-dom';
import "./homepage.css";

function HomePage() {
    return (
        <div className="home">
            <h1>EZPS</h1>
            <p>Easy Payslip access anytime. Anywhere. In your most convenient.</p>
            <div className="home_img">
                <img src="" width="97%" height="97%" alt="pics" id="img" />
            </div>
            <div className="service_container">
                <div className="service_card">
                <NavLink to="/signup">Sign Up</NavLink>
                </div>
                <div className="service_card">
                <NavLink to="/login">Log In</NavLink>
                </div>
            </div>
        </div>
    )
}

export default HomePage 