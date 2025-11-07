import "./Home.scss";
import Navbar from "../components/navbar.jsx";

function Home() {
  return (
    <div className="Container">
      <Navbar />
      <div className="Home">
        <div className="Main-text">
          <span>KK</span>
          <span>GU</span>
          <span>RR</span>
          <span>EN</span>
          <span>KK</span>
          <span>GU</span>
          <span>RR</span>
          <span>EN</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
