import "./Register.scss";
import Navbar from "../components/navbar.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user",
        { firstName, lastName, userName, email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("Account successfully created!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error.response.data.message);
    }
  };

  useEffect(() => {
    if (firstName && lastName && userName && email && password) {
      setShowButton(true);
    }
  }, [firstName, lastName, userName, email, password]);

  return (
    <div className="Container">
      <div className="Register-Container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label> First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label> Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label> Username:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label> Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label> Password:</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="container-button">
            <a href="./Login">cancel</a>
            <button
              type="button"
              className="submit-button"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
