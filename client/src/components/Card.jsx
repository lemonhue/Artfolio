import "./Card.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Card({ image, title, description }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/",
        { image, title, description },
        {
          headers: { "Content-Type": "applicataion/json" },
          withCredentials: true,
        }
      );

      if (response === 200 || response.status === 201) {
        console.log("Card successfuly create!");
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  return <div className="Card-Container"></div>;
}

export default Card;
