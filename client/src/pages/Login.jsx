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
      const response = await axios.get(
        "/admin",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("Succesfully logged in!");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="Main-Container">
      <div className="Containerr">
      <div className="Login-container">
        <form>
          <div className="input-group">
            <label>Email: </label>

            <input type="text" name="email" />
          </div>

          <div className="input-group">
            <label> Password: </label>

            <input type="text" name="password"></input>
          </div>
          <button type="submit" onClick={handleSubmit} />
        </form>
        <div className="login-button-container">
          <button className="login-button">Login</button>
        </div>
      </div>
      <div className="Google-container">
        <GoogleLogin
          onSuccess={(credentialsResponse) => console.log(credentialsResponse)}
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
