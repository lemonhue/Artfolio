import "./CardModal.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactDom from "react-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";

function CreateCardModal({ children, open, onClose }) {
  if (!open) return null;

  const [isValid, setIsValid] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "image") {
      setImageFile(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = imageFile && formData.title && formData.description;

    if (!isFormValid) {
      console.log("Required fields missing!");
      setIsValid(false);
      return;
    }

    setIsValid(true);

    const fd = new FormData();
    fd.append("image", imageFile);
    fd.append("title", formData.title);
    fd.append("description", formData.description);
    console.log(fd);

    try {
      const response = await axios.post("http://localhost:5000/card", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (response.status === 200 || response.status === 201) {
        console.log("Card succesfully added!");
        setIsValid(false);
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="container-modal">
        <form onSubmit={handleSubmit}>
          <div className="input-group-image">
            <input
              className="input-image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleInputChange}
            />
          </div>

          <div className="section2">
            {/* <div className="input-group-title"> */}
            <input
              className="title"
              name="title"
              type="text"
              onChange={handleInputChange}
            />
            {/* </div> */}

            {/* <div className="input-group-description"> */}
            <input
              className="description"
              name="description"
              type="text"
              onChange={handleInputChange}
            />
            {/* </div> */}
            <div className="Container-submit">
              <button>cancel</button>
              <button type="submit" onClick={handleSubmit}>
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default CreateCardModal;
