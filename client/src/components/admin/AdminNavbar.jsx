import "./AdminNavbar.scss";
import { Link, NavLink } from "react-router-dom";

function AdminNavbar() {
  return (
    <>
      <nav className="nav">
        <div className="Name">
          <h1>Lemonhue</h1>
        </div>
        <div className="nav-links">
          <NavLink exact="true" activeclassname="active" to="/AdminProjects">
            Projects
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/AdminAbout">
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
