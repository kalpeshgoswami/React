import React from "react";
import Home from "./components/Home";
import Service from "./components/Server";
import MainLayout from "./router/MainLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path:"/",
          element: <Home />,
        },
        {
          path: "service",
          element: <Service />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;