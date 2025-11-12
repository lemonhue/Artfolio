import "./Login.scss";
import Navbar from "../components/navbar.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login() {
  return (
    <div className="Container">
      {/* <Navbar /> */}

      <GoogleLogin
        onSuccess={(credentialsResponse) => console.log(credentialsResponse)}
        onError={() => console.log("Login failed")}
      />
    </div>
  );
}

export default Login;
