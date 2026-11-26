import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();

  const { blogs, loading, error, handleDeleteBlog } = useContext(BlogContext);

  const { user } = useContext(AuthContext);

  console.log("LOGGED IN USER:", user);
  console.log("ALL BLOGS:", blogs);

  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmDelete) return;

    try {
      await handleDeleteBlog(id);
      alert("Blog deleted successfully!");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.message ||
          "Unable to delete blog",
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-header">
          <div>
            <h1>Welcome to Blog App</h1>
            <p>Hello, {user?.name || "User"}! Explore the latest blogs.</p>
          </div>

          <button
            className="add-blog-btn"
            onClick={() => navigate("/add-blog")}
          >
            + Add Blog
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {loading ? (
          <h3 className="loading-text">Loading Blogs...</h3>
        ) : blogs.length === 0 ? (
          <div className="no-blogs">
            <h2>No Blogs Found</h2>
            <p>Start by creating your first blog.</p>
          </div>
        ) : (
          <div className="blog-grid">
            {blogs.map((blog) => {
              const isOwner = blog.author?.email === user?.email;

              return (
                <div className="blog-card" key={blog._id}>
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                    />
                  )}

                  <div className="blog-content">
                    <span className="blog-category">{blog.category}</span>

                    <h2>{blog.title}</h2>

                    <p className="blog-description">{blog.description}</p>

                    <p className="blog-author">
                      Author: {blog.author?.name || "Unknown"}
                    </p>

                    {isOwner && (
                      <div className="blog-actions">
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(blog._id)}
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(blog._id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
