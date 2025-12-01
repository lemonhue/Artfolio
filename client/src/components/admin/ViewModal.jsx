import "./ViewModal.scss";
import ReactDom from "react-dom";
import axios from "axios";

function ViewModal({ card, open, onClose }) {
  if (!open) return null;

  const handleDelete = async (e) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/card/${card._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("Card deleted succesfully!");
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="container-view-modal">
        <img src={card.image} />

        <div className="container-buttons">
          <div className="container-delete-button">
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default ViewModal;
