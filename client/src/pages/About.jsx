import "./About.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar.jsx";

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [about, setAbout] = useState(null);

  const fetchAbout = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/about`);
      if (response.status === 200) {
        console.log("About fetched successfully");
        setAbout(response.data[0]);
        console.log(response.data);
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <>
      <Navbar />
      <div className="Container-Public-About">
        <div className="Public-About-Container">
          <div className="Public-About-Content">
            <div className="Public-About-Username"> {about?.username}</div>
            <div className="Public-About-Bio">{about?.bio}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
