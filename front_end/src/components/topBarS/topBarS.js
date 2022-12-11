import "./topBarS.css";
import { NavLink } from "react-router-dom";

function TopBarS() {
  return (
    <div className="topnav">
      <NavLink to="/" end>
        EZ<br>PS</br>
      </NavLink>
    </div>
  );
}

export default TopBarS;
 