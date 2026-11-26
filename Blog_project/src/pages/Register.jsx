import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    userPhoto: null,
  });

  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "userPhoto") {
      const file = files?.[0] || null;

      setFormData((prev) => ({
        ...prev,
        userPhoto: file,
      }));

      setPreview(file ? URL.createObjectURL(file) : "");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const userData = new FormData();

      userData.append("name", formData.name);
      userData.append("email", formData.email);
      userData.append("password", formData.password);
      userData.append("phone", formData.phone);
      userData.append("address", formData.address);

      if (formData.userPhoto) {
        userData.append("userPhoto", formData.userPhoto);
      }

      console.log("FORM DATA:");

      for (const [key, value] of userData.entries()) {
        console.log(key, value instanceof File ? value.name : value);
      }

      const result = await registerUser(userData);

      console.log("REGISTER SUCCESS:", result);

      alert(result.message || "Registration successful!");

      navigate("/login");
    } catch (err) {
      console.error("REGISTER ERROR:", err);
      console.log("SERVER MESSAGE:", err.response?.data);

      setError(
        err.response?.data?.message || "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Create Account</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>

                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>

                <textarea
                  name="address"
                  className="form-control"
                  placeholder="Enter address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Profile Image (Optional)</label>

                <input
                  type="file"
                  name="userPhoto"
                  className="form-control"
                  accept="image/*"
                  onChange={handleChange}
                />

                {preview && (
                  <div className="mt-3">
                    <img
                      src={preview}
                      alt="Profile Preview"
                      width="100"
                      height="100"
                      className="rounded-circle"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>

            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
