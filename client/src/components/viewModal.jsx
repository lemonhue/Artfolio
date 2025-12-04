import "./ViewModal.scss";
import ReactDom from "react-dom";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

function ViewModal({ card, open, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="container-public-view-modal">
        <img src={card.image} />
        {/* 
        <div className="container-buttons">
          <div className="container-delete-button">
            <button onClick={onClose} />
          </div>
        </div> */}
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default ViewModal;
