import "./Home.scss";
import Navbar from "../components/Navbar.jsx";

function Home() {
  return (
    <div className="Container-Public-Home">
      <Navbar />
      <div className="stock-ticker">
        <ul aria-hidden="true">
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
        </ul>

        <ul aria-hidden="true">
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
          <li>
            <span className="scroll-text"> I Draw</span>
          </li>
        </ul>
      </div>

      <div className="Main-text">
        <h1>LEMONHUE</h1>
        <h2>LEMONHUE</h2>
      </div>
    </div>
  );
}

export default Home;
