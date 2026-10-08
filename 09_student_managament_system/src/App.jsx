import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./Ui/Error";
import MainLayout from "./router/MainLayout";
import Student from "./components/student";
import AddStudent from "./components/AddStudent";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      // errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Student />,
        },
        {
          path: "add",
          element: <AddStudent />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;