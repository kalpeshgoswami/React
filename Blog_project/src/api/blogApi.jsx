import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export async function getAllBlogs() {
  try {
    const res = await axios.get(`${BASE_URL}/blog/allBlog`, getAuthConfig());

    return res.data;
  } catch (error) {
    console.error("GET BLOGS ERROR:", error.response?.data || error);
    throw error;
  }
}

export async function addBlog(data) {
  try {
    const res = await axios.post(`${BASE_URL}/blog/add`, data, getAuthConfig());

    return res.data;
  } catch (error) {
    console.error("ADD BLOG ERROR:", error.response?.data || error);
    throw error;
  }
}

export async function updateBlog(id, data) {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.patch(`${BASE_URL}/blog/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log("UPDATE ERROR:", error.response?.data || error);
    throw error;
  }
}

export async function deleteBlog(id) {
  try {
    const res = await axios.delete(
      `${BASE_URL}/blog/delete/${id}`,
      getAuthConfig(),
    );

    return res.data;
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error.response?.data || error);
    throw error;
  }
}
