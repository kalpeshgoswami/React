import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h2>Blog App</h2>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/add-blog">Add Blog</Link>

        {user?.role === "admin" && <Link to="/admin">Admin</Link>}

        <span className="user-name">{user?.name || "User"}</span>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
