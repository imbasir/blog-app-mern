import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        if (res.data === "Success") {
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup_container">
      <div className="signup_form">
        <h2 className="">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="signup_btn">Login</button>
        </form>
        <br></br>
        <p>Not Regitered?</p>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
