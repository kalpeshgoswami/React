import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import Navbar from "../components/Navbar";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { blogs, handleUpdateBlog } = useContext(BlogContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });

  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const blog = blogs.find((item) => item._id === id);

    if (blog) {
      setFormData({
        title: blog.title || "",
        description: blog.description || "",
        category: blog.category || "",
        image: null,
      });

      setPreview(blog.image || "");
    }
  }, [blogs, id]);

  useEffect(() => {
    return () => {
      if (preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];

      if (file) {
        setFormData((prev) => ({
          ...prev,
          image: file,
        }));

        setPreview(URL.createObjectURL(file));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       setLoading(true);
  //       setError("");

  //       const data = new FormData();

  //       data.append("title", formData.title);
  //       data.append("description", formData.description);
  //       data.append("category", formData.category);

  //       if (formData.image) {
  //         data.append("image", formData.image);
  //       }

  //       await handleUpdateBlog(id, data);

  //       navigate("/", { replace: true });
  //     } catch (error) {
  //       setError(
  //         error.response?.data?.message ||
  //           error.message ||
  //           "Failed to update blog",
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("UPDATE BUTTON CLICKED");
    console.log("BLOG ID:", id);
    console.log("FORM DATA:", formData);

    try {
      setLoading(true);
      setError("");

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);

      if (formData.image) {
        data.append("image", formData.image);
      }

      console.log("SENDING UPDATE REQUEST");

      const response = await handleUpdateBlog(id, data);

      console.log("UPDATE RESPONSE:", response);

      alert("Update API called successfully");

      navigate("/", { replace: true });
    } catch (error) {
      console.log("UPDATE FAILED:", error);
      console.log("SERVER RESPONSE:", error.response?.data);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to update blog",
      );
    } finally {
      setLoading(false);
    }
  };
  if (!blogs.some((blog) => blog._id === id)) {
    return (
      <>
        <Navbar />
        <div className="edit-blog-container">
          <h2>Blog not found</h2>
          <button onClick={() => navigate("/")}>Go Home</button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="edit-blog-container">
        <h2>Edit Blog</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Blog Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Politics">Politics</option>
          </select>

          {preview && <img src={preview} alt="Blog Preview" width="200" />}

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Blog"}
          </button>

          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBlog;
