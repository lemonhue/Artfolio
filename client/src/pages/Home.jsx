import "./Home.scss";
import Navbar from "../components/Navbar.jsx";

function Home() {
  return (
    <div className="Container-Home">
      <Navbar />
      <div className="Home-Text">
        <h1>I DRAW</h1>
      </div>

      <div className="Home-Background"></div>
    </div>
  );
}

export default Home;
