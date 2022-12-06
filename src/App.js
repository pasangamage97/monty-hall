import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PageLayout from "./layouts/PageLayout";
import Config from "./pages/Config";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/config",
    element: <Config />,
  },
]);

function App() {
  return (
    <PageLayout>
      <RouterProvider router={router} />
    </PageLayout>
  );
}

export default App;
