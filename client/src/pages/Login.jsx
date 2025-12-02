import "./Login.scss";
import { useState } from "react";
import Navbar from "../components/navbar.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      if (response.status === 200 || response.status === 201) {
        console.log("Succesfully logged in!");
        navigate("/AdminHome");
      }
    } catch (error) {
      console.error("Error during login:", error.response.data.message);
    }
  };

  return (
    <div className="Main-Container">
      <div className="Containerr">
        <div className="Login-container">
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
              ></input>
            </div>
          </form>
          <div className="login-button-container">
            <button className="login-button" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
        <div className="Google-container">
          <GoogleLogin
            onSuccess={(credentialsResponse) =>
              console.log(credentialsResponse)
            }
            onError={() => console.log("Login failed")}
          />
        </div>
        <div className="Signin-container">
          <button className="register-button">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
