import "./Register.scss";
import Navbar from "../components/navbar.jsx";
import { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/",
        JSON.stringify({ firstName, lastName, userName, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="Container">
      <Navbar />

      <div className="Register-Container">
        <form onSubmit={handleSubmit}>
          <label> First Name:</label>
          <Input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label> Last Name:</label>
          <Input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label> UserName:</label>
          <Input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label> Email:</label>
          <Input
            type="text"
            id="email"
            value={lastName}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label> Password:</label>
          <Input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
