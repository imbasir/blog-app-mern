import React, { useContext } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./App";
import axios from "axios";

const Navbar = () => {
  const user = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("http://localhost:3000/logout")
      .then((res) => {
        if (res.data === "Success") navigate("/login");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar-header">
      <div>Blog App</div>
      <div>
        <Link to="/" className="link">
          Home
        </Link>
        {user.username ? (
          <Link to="/create" className="link">
            Create
          </Link>
        ) : (
          <></>
        )}

        <a href="" className="link">
          Contact
        </a>
      </div>
      {user.username ? (
        <div>
          <input
            className="btn_input"
            onClick={handleLogout}
            type="button"
            value="Logout"
          />
        </div>
      ) : (
        <div>
          <h5>
            <Link to="/register" className="link">
              Register/login
            </Link>
          </h5>
        </div>
      )}
    </div>
  );
};

export default Navbar;
