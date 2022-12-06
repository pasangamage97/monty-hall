import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PageLayout from "./layouts/PageLayout";
import Config from "./pages/Config";
import Home from "./pages/Home";
import Results from "./pages/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/config",
    element: <Config />,
  },
  {
    path: "/results",
    element: <Results />
  }
]);

function App() {
  return (
    <PageLayout>
      <RouterProvider router={router} />
    </PageLayout>
  );
}

export default App;
