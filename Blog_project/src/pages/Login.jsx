import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await loginUser(formData);

      if (response.success) {
        login(response.user, response.token);

        navigate("/", { replace: true });
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Invalid Email or Password",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p>Login to your Blog Account</p>

        {message && <div className="login-message">{message}</div>}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
