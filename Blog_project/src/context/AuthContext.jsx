
import React, { createContext, useEffect, useState } from "react";
import { authLogin, logoutUser } from "../api/authApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("user")) || null;
        } catch {
            return null;
        }
    });

    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setUser(null);
            setLoading(false);
            return;
        }

        try {
            const response = await authLogin();

            const userData = response.user;

            setUser(userData);

            localStorage.setItem(
                "user",
                JSON.stringify(userData)
            );

        } catch (error) {
            console.log("AUTH CHECK ERROR:", error);

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            setUser(null);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = (userData, token) => {
        localStorage.setItem("token", token);

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        setUser(userData);
    };

    const logout = async () => {
        try {
            await logoutUser();

        } catch (error) {
            console.log("LOGOUT ERROR:", error);

        } finally {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            setUser(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                login,
                logout,
                checkAuth,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
