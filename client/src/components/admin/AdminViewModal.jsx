import "./AdminViewModal.scss";
import ReactDom from "react-dom";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

function AdminViewModal({ card, open, onClose }) {
  if (!open) return null;

  const handleDelete = async () => {
        try {
      const response = await axios.delete(
        `http://localhost:5000/card/${card._id}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Card succesfully deleted!");
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="container-public-view-modal">
        <img src={card.image} />

        <div className="container-buttons">
          <div className="container-delete-button">
            <button onClick={onClose}> close</button>
            <button onClick={handleDelete}> delete</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default AdminViewModal;
