import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import AuthProvider from "./context/AuthContext";
import BlogProvider from "./context/BlogContext";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./context/EditBlog";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BlogProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/add-blog" element={<AddBlog />} />
              <Route path="/edit-blog/:id" element={<EditBlog />} />
            </Route>

            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<h1>Admin Dashboard</h1>} />
            </Route>
          </Routes>
        </BlogProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
