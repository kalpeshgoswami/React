import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BlogContext } from "../context/BlogContext";
import Navbar from "../components/Navbar";

const AddBlog = () => {
  const navigate = useNavigate();

  const { handleAddBlog } = useContext(BlogContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setError("Please select blog image");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const blogData = new FormData();

      blogData.append("title", formData.title);
      blogData.append("description", formData.description);
      blogData.append("category", formData.category);
      blogData.append("image", image);

      await handleAddBlog(blogData);

      navigate("/", { replace: true });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to publish blog",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="add-blog-container">
        <form className="add-blog-form" onSubmit={handleSubmit}>
          <h2>Create New Blog</h2>

          <p>Share your thoughts with the world</p>

          {error && <div className="error-message">{error}</div>}

          <label>Blog Title</label>

          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Description</label>

          <textarea
            name="description"
            placeholder="Write your blog..."
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label>Category</label>

          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <label>Blog Image</label>

          <input type="file" accept="image/*" onChange={handleImage} required />

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Blog Preview" />
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Publishing..." : "Publish Blog"}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
