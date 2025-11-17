import "./Login.scss";
import { useState } from "react";
import Navbar from "../components/navbar.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  handleSubmit = async (event) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="Container">
      <Navbar />

      <div className="Login-container">
        <form>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="text" name="password"></input>
          </label>
          <button type="submit" onClick={handleSubmit} />
        </form>
        <div className="Google-container">
          <GoogleLogin
            onSuccess={(credentialsResponse) =>
              console.log(credentialsResponse)
            }
            onError={() => console.log("Login failed")}
          />
        </div>

        <div className="Signin-container"></div>
      </div>
    </div>
  );
}

export default Login;
