import { NavLink } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home">
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Log In</NavLink>
        </div>
    )
}

export default HomePage 