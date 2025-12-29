import "./AdminAbout.scss";
import AdminNavbar from "../../components/admin/AdminNavbar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "../../components/admin/CardModal.jsx";
import Pagination from "../../components/Pagination.jsx";
import ViewModal from "../../components/admin/AdminViewModal.jsx";
import { MdModeEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";

function AdminAbout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditNameClicked, setIsEditNameClicked] = useState(false);
  const [isEditBioClicked, setIsEditBioClicked] = useState(false);
  const [about, setAbout] = useState(null);

  const fetchAbout = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/about/admin`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setAbout(response.data[0]);
        console.log("about:", response.data);
      }
    } catch (error) {
      console.error("error:", error);
    }
  };
  const updateAbout = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/about/${about._id}`,
        about,
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

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="Container-Admin-About">
        <div className="Admin-About-Container">
          <div className="Admin-About-Content">
            <div className="Admin-About-Username">
              {isEditNameClicked ? (
                <>
                  <input
                    value={about?.username}
                    onChange={(e) =>
                      setAbout({ ...about, username: e.target.value })
                    }
                  />
                  <FaSave
                    className="icon"
                    onClick={() => {
                      updateAbout();
                      setIsEditNameClicked(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <span>{about?.username || ""}</span>
                  <MdModeEdit
                    className="icon"
                    onClick={() => setIsEditNameClicked(true)}
                  />
                </>
              )}
            </div>
            <div className="Admin-About-Bio">
              {isEditBioClicked ? (
                <>
                  <textarea
                    value={about?.bio}
                    onChange={(e) =>
                      setAbout({ ...about, bio: e.target.value })
                    }
                  />
                  <FaSave
                    className="icon"
                    onClick={() => {
                      updateAbout();
                      setIsEditBioClicked(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <span>{about?.bio || ""}</span>
                  <MdModeEdit
                    className="icon"
                    onClick={() => setIsEditBioClicked(true)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAbout;
