import "./AdminAbout.scss";
import AdminNavbar from "../../components/admin/AdminNavbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "../../components/admin/CardModal.jsx";
import Pagination from "../../components/Pagination.jsx";
import ViewModal from "../../components/admin/AdminViewModal.jsx";

function AdminAbout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);

  return (
    <>
      <AdminNavbar />
      <div className="Container-Admin-About">
        {/* <Sidebar /> */}
        <div className="Admin-About-Container">
          <div className="Admin-About-Content">
            {/* <h1>KKGURREN</h1> */}
            <p>I am an artist based in PH</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAbout;
