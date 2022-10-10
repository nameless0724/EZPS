import './topBar.css'
import { NavLink } from 'react-router-dom'

function TopBar() {
    return (
        <div className="topnav">
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </div>
    )
}

export default TopBar