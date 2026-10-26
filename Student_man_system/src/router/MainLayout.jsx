import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
