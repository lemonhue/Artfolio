import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <NavLink exact="true" activeclassname="active" to="/Projects">
          Projects
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/About">
          About
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
