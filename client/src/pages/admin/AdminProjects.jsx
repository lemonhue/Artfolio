import "./AdminProjects.scss";
import AdminNavbar from "../../components/admin/AdminNavbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "../../components/admin/CardModal";
import Pagination from "../../components/Pagination.jsx";
import ViewModal from "../../components/admin/AdminViewModal";

function AdminProjects() {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(11);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = cards.slice(firstPostIndex, lastPostIndex);

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/card/admin`,

        {
          withCredentials: true,
        }
      );

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

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 480px)");

    const updatePosts = () => {
      setPostsPerPage(mq.matches ? 5 : 11);
    };

    updatePosts(); 
    mq.addEventListener("change", updatePosts);

    return () => mq.removeEventListener("change", updatePosts);
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="Container-Admin-Projects">
        <Sidebar />
        <div className="Projects-List-Container">
          <div className="Cards-List-Container">
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
              <Modal open={isOpen} onClose={() => setIsOpen(false)} />
              <ViewModal
                card={selectedCard}
                setCard={setSelectedCard}
                open={isViewOpen}
                onClose={() => setIsViewOpen(false)}
              />
            </ul>
          </div>
          <div className="Bottom-Section">
            <div className="Cards-Categories-Container"></div>
            <div className="Card-Info-Container">
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
          <div className="container-pagination">
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

export default AdminProjects;
