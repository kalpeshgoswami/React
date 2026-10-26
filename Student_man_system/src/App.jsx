import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./router/MainLayout";
import Student from "./components/Student";
import AddStudent from "./components/AddStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Student />,
      },
      {
        path: "add",
        element: <AddStudent />,
      },
      {
        path: "update/:id",
        element: <AddStudent />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
