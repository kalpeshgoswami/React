import React, { Suspense, lazy } from "react";
import MainLayout from "./router/MainLayout";
import Loading from "./components/loading";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Service = lazy(() => import("./components/Server"));
const About = lazy(() => import("./components/About"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
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
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;