import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.css";
import Profile from "./sites/profile/Profile";

// The site is one scrolling profile; React Router still moves between the
// Bio, Experience, and Projects sections (each route scrolls the same page).
const profileRouter = createBrowserRouter([
  { path: "/", element: <Profile /> },
  { path: "experience/", element: <Profile /> },
  { path: "projects/", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={profileRouter} />
  </React.StrictMode>,
);
