import "./homepage.css";
import main from '../image/main.svg';
import signup from '../image/signup.svg';
import login from '../image/login.svg';

function HomePage() {
    return (
        <div className="home">
            <h1>EZPS</h1>
            <p>Easy Payslip access anytime. Anywhere. In your most convenient.</p>
            <div className="home_img">
                <img src={main} width="97%" height="97%" alt="pics" id="img"></img>
            </div>
            <div className="service">
                <h1>WELCOME!</h1>
                <div className="service_container">
                    <div className="service_card">
                        <img src={signup} width="300" height="300" alt="pics" id="img"></img>
                        <p>Haven't sign yet? Register here.</p>
                        <a href="/signup"><button>Sign Up</button></a>
                    </div>
                    <div className="service_card">
                        <img src={login} width="300" height="300" alt="pics" id="img"></img>
                        <p>Greetings!<br />Please log in.</p>
                        <a href="/login"><button>Log In</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage 