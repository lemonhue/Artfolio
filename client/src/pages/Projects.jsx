import "./Projects.scss";
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [cards, setCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState();

  const fetchCards = async () => {
    try {
      const response = await axios.get("http://localhost:5000/card");

      if (response.status === 200) {
        setCards(response.data);
        console.log("cards:", response.data);
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="Container">
      <Navbar />
      <Sidebar />
      <div className="Projects-List">
        <div className="Cards-List">
          <ul>
            {cards.map((card) => (
              <li
                key={card.id}
                onMouseEnter={() => setHoveredCard(card)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {card.image}
              </li>
            ))}
          </ul>
        </div>
        <div className="Card-Info">
          {hoveredCard && (
            <>
              <h2>{hoveredCard.title}</h2>
              <p>{hoveredCard.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
