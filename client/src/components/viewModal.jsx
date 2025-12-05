import "./viewModal.scss";
import ReactDom from "react-dom";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

function ViewModal({ card, open, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="view-overlay" />
      <div className="container-public-view-modal">
        <div className="image-container-button">
          <button onClick={onClose}>
            <IoMdClose className="close-btn"></IoMdClose>
          </button>
        </div>
        <div className="image-container">
          <img src={card.image} />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default ViewModal;
