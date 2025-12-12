import "./AdminViewModal.scss";
import ReactDom from "react-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import { FaTrash } from "react-icons/fa";

function AdminViewModal({ card, setCard, open, onClose }) {
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

  const updateProject = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/card/${card._id}`,
        card,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("error:", error.response?.data || error.message);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="container-admin-view-modal">
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
              onChange={(e) => setCard({ ...card, title: e.target.value })}
            />

            <textarea
              className="description"
              name="description"
              type="text"
              value={card.description}
              onChange={(e) =>
                setCard({ ...card, description: e.target.value })
              }
            />
            <div className="container-buttons">
              <button onClick={onClose}> close</button>
              <button onClick={handleDelete}> delete</button>
              <button onClick={updateProject}> update</button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default AdminViewModal;
