import "./AdminProjects.scss";
import AdminNavbar from "../../components/admin/AdminNavbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function AdminProjects() {
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
    <>
      <AdminNavbar />
      <div className="Container">
        <Sidebar />
        <div className="Projects-List-Container">
          <div className="Cards-List-Container">
            <ul>
              {(!cards || cards.length === 0) && (
                <div className="Cards-Placeholder"> </div>
              )}

              {cards &&
                cards.map((card) => (
                  <li
                    key={card.id}
                    onMouseEnter={() => setHoveredCard(card)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <img src={card.image} />
                  </li>
                ))}
            </ul>
          </div>
          <div className="Bottom-Section">
            <div className="Cards-Categories-Container"></div>
            <div className="Card-Info-Container">
              {hoveredCard && (
                <>
                  <h2>{hoveredCard.title}</h2>
                  <p>{hoveredCard.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProjects;
