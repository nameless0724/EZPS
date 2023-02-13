import { NavLink } from 'react-router-dom';
function TopBar() {
    return(
        <div className="bg-gray-700">
            <h1 className="pl-5 text-3xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500"><NavLink to="/">EZ<br />PS</NavLink></h1>
        </div>
    )
}
export default TopBar