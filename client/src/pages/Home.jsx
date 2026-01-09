import "./Home.scss";
import Navbar from "../components/Navbar.jsx";
import BG from "../assets/BG.jpg";

function Home() {
  return (
    <div className="Container-Home">
      <Navbar />
      <div className="Home-Text">
        <h1>I DRAW</h1>
      </div>
      <div className="Home-Background-Gradient"></div>
    </div>
  );
}

export default Home;
