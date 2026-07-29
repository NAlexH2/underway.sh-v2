import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.css";
import Profile from "./sites/profile/Profile";
import { resolveSite, type Site } from "./sites/siteFromHost";
import Landing from "./sites/landing/Landing";
// Revision 03 ("identity as a version-controlled file") is the live Querium
// page. The other variants and the preview gallery stay in the repo as the
// design history, but this is what q.underway.sh serves.
import Querium from "./sites/querium/variants/QueriumV3";
import queriumIcon from "./assets/querium-icon.svg";

// Alex's profile is one scrolling page; React Router still moves between the
// Bio, Experience, and Projects sections (each route scrolls the same page).
const profileRouter = createBrowserRouter([
  { path: "/", element: <Profile /> },
  { path: "experience/", element: <Profile /> },
  { path: "projects/", element: <Profile /> },
]);

const site = resolveSite();

// All three hostnames share one index.html, so the tab has to be named here
// rather than in the document head.
const TITLES: Record<Site, string> = {
  landing: "underway.sh",
  profile: "alex.underway.sh",
  querium: "About Querium — Q",
};
document.title = TITLES[site];

// Same reason as the title: the favicon lives in the shared index.html, so the
// per-site icon is swapped here. Only Querium gets the mint "Q"; the other two
// keep Alex's beard mark from index.html untouched.
if (site === "querium") {
  const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (link) {
    link.type = "image/svg+xml";
    link.href = queriumIcon;
  }
}

const app =
  site === "profile" ? (
    <RouterProvider router={profileRouter} />
  ) : site === "querium" ? (
    <Querium />
  ) : (
    <Landing />
  );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{app}</React.StrictMode>,
);
