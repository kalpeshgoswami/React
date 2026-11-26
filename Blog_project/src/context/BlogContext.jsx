import React, { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";

import { getAllBlogs, addBlog, updateBlog, deleteBlog } from "../api/blogApi";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const { isAuthenticated, loading: authLoading } = useContext(AuthContext);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getAllBlogs();

      setBlogs(response.blogs || []);

      return response;
    } catch (error) {
      console.error("FETCH BLOGS ERROR:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to load blogs",
      );

      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authLoading) return;

    if (isAuthenticated) {
      fetchBlogs().catch(() => {});
    } else {
      setBlogs([]);
      setError(null);
      setLoading(false);
    }
  }, [isAuthenticated, authLoading]);

  const handleAddBlog = async (data) => {
    try {
      const response = await addBlog(data);

      await fetchBlogs();

      return response;
    } catch (error) {
      console.error("ADD BLOG ERROR:", error);
      throw error;
    }
  };

  const handleUpdateBlog = async (id, data) => {
    try {
      const response = await updateBlog(id, data);

      await fetchBlogs();

      return response;
    } catch (error) {
      console.error("UPDATE BLOG ERROR:", error);
      throw error;
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      const response = await deleteBlog(id);

      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));

      return response;
    } catch (error) {
      console.error("DELETE BLOG ERROR:", error);
      throw error;
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        loading,
        error,
        fetchBlogs,
        handleAddBlog,
        handleUpdateBlog,
        handleDeleteBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
