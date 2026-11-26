
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminRoute = () => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return user?.role === "admin"
        ? <Outlet />
        : <Navigate to="/" replace />;
};

export default AdminRoute;
