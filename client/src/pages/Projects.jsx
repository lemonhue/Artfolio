import "./Projects.scss";
import Navbar from "../components/admin/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import Pagination from "../components/Pagination.jsx";

function Projects() {
  const [cards, setCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(11);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = cards.slice(firstPostIndex, lastPostIndex);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/card`);

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
      <Navbar />
      <div className="Container-Public-Projects">
        <Sidebar />
        <div className="Public-Projects-List-Container">
          <div className="Public-Cards-List-Container">
            <ul>
              {cards &&
                currentPosts.map((card, index) => (
                  <li
                    key={card.id}
                    onMouseEnter={() => setHoveredCard(card)}
                    onMouseLeave={() => setHoveredCard(null)}
                    // className={index === 0 && "featured"}
                  >
                    <img
                      src={card.image}
                      onClick={() => {
                        setSelectedCard(card);
                        setIsViewOpen(true);
                      }}
                    />
                  </li>
                ))}
              <div className="Cards-Placeholder">
                <button onClick={() => setIsOpen(true)}>
                  <IoIosAddCircleOutline />
                </button>
              </div>
            </ul>
          </div>
          <div className="Public-Bottom-Section">
            <div className="Public-Cards-Categories-Container"></div>
            <div className="Public-Card-Info-Container">
              {(!hoveredCard || hoveredCard === null) && (
                <>
                  <h2> No Projects</h2>
                </>
              )}

              {hoveredCard && (
                <>
                  <h2>{hoveredCard.title}</h2>
                  <p>{hoveredCard.description}</p>
                </>
              )}
            </div>
          </div>
          <div className="Public-container-pagination">
            <Pagination
              totalPosts={cards.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
