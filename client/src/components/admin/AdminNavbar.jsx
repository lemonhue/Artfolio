import "./AdminNavbar.scss";
import { Link, NavLink } from "react-router-dom";

function AdminNavbar() {
  return (
    <>
      <nav className="nav">
        <NavLink exact="true" activeclassname="active" to="/AdminProjects">
          Projects
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/AdminAbout">
          About
        </NavLink>
      </nav>
    </>
  );
}

export default AdminNavbar;
