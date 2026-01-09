import "./AdminHome.scss";
import AdminNavbar from "../../components/admin/AdminNavbar";

function Home() {
  return (
    <div className="Container-Home">
      <AdminNavbar />
      <div className="Home-Text">
        <h1>I DRAW</h1>
      </div>

      <div className="Home-Background"></div>
    </div>
  );
}

export default Home;
