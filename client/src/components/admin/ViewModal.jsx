import "./ViewModal.scss";
import ReactDom from "react-dom";

function ViewModal({ card, open, onClose }) {
  if (!open) return null;

  const handleDelete = async (e) => {
    try {
      const response = await axios.delete("/", {
        withCredentials: true,
      });
      if (response.status === 200 || response.status === 201) {
        console.log("Card deleted succesfully!");
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay"/>
      <div className="container-view-modal">
        <div className="container-view">
          <div className="container-delete-button">
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <img src={card.image} />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default ViewModal;
