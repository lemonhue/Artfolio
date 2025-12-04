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
        <div className="container-view-modal-content">
          <div className="container-section1">
            <img src={card.image} />
          </div>

          <div className="container-section2">
            <input
              className="title"
              name="title"
              type="text"
              value={card.title}
              placeholder="Enter Project Title"
            />
            {/* </div> */}

            {/* <div className="input-group-description"> */}
            <textarea
              className="description"
              name="description"
              type="text"
              value={card.description}
              placeholder="Enter Project Description"
            />
            <div className="container-buttons">
              <button onClick={onClose}> close</button>
              <button onClick={handleDelete}> delete</button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default AdminViewModal;
