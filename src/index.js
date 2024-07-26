import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import InboxPage from "./pages/InboxPage";
import SearchPage from "./pages/SearchPage";
import EmployeesPage from "./pages/EmployeesPage";
import AutomationsPage from "./pages/AutomationsPage";
import reportWebVitals from "./setup/reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app/App";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <App/>,
  },
  {
    path: "login",
    element: < LoginPage/>,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "inbox",
    element: <InboxPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "employees",
    element: <EmployeesPage />,
  },
  {
    path: "automations",
    element: <AutomationsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
