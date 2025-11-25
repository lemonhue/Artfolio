import "./CardModal.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function CreateCardModal({ isOpen, onClose }) {
  const [isValid, setIsValid] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
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

    const FormData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", formData.title);
    formData.append("description", formData.description);

    try {
      const response = await axios.post("/card", formData, {
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

  return (
    <div className="container-modal">
      <form onSubmit={handleSubmit}>
        <div className="input-group-image">
          <label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="input-group-text1">
          <label>
            <input name="title" type="text" onChange={handleInputChange} />
          </label>
        </div>

        <div className="input-group-text2">
          <label>
            <input
              name="description"
              type="text"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateCardModal;
