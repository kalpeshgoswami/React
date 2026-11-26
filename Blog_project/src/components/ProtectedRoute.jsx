
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {

    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
