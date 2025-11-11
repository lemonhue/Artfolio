import "./Home.scss";
import Navbar from "../components/navbar.jsx";

function Home() {
  return (
    <div className="Container">
      <Navbar />
      <div class="stock-ticker">
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
        <h1>KKGURREN</h1>
        <h1>KKGURREN</h1>
      </div>
    </div>
  );
}

export default Home;
