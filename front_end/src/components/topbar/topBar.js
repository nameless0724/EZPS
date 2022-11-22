import './topBar.css'
import { NavLink } from 'react-router-dom'

function TopBar() {
    return (
        <div className="topnav">
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">New User</NavLink>
            <NavLink to="/profilelist">Summary</NavLink>
        </div>
    )
}

export default TopBar 