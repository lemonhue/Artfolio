import "./Login.scss";
import { useState } from "react";
import Navbar from "../components/navbar.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import MyGoogleButton from "../components/MyGoogleButton.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const errorMessage = "User does not exist";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        { email, password },
        { withCredentials: true } 
      );

      console.log("Successfully logged in!");
      navigate("/AdminHome");
    } catch (error) {
      console.error("Error during login:", error.response.data.message);
      setError(true);
    }
  };

  return (
    <div className="Page-Container">
      <div className="Login-Container">
        <h1> Login</h1>
        <div className="Form-Container">
          <form>
            <div className="input-group">
              <label>Email: </label>

              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label> Password: </label>

              <input
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="error-container">
            {error && <p>{errorMessage}</p>}
          </div>
          <div className="login-button-container">
            <button className="login-button" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>

        <MyGoogleButton />
        <div className="Signin-container">
          <a href="./Register" className="register-button">
            Don't have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
