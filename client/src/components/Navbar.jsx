import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="Name">
          <h1>Lemonhue</h1>
        </div>
        <div className="nav-links">
          <NavLink exact="true" activeclassname="active" to="/Projects">
            Projects
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/About">
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
