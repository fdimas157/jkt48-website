import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Member from "./pages/Member.jsx";
import Merchandise from "./pages/Merchandise.jsx";
import Schedule from "./pages/Schedule.jsx";
import Theater from "./pages/Theater.jsx";

const router = createBrowserRouter([
  {
    path: "/jkt48",
    element: <App />,
    children: [
      {
        path: "/jkt48/home",
        element: <Home />,
      },
      {
        path: "/jkt48/member",
        element: <Member />,
      },
      {
        path: "/jkt48/merchandise",
        element: <Merchandise />,
      },
      {
        path: "/jkt48/schedule",
        element: <Schedule />,
      },
      {
        path: "/jkt48/theater",
        element: <Theater />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
