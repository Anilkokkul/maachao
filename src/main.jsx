import { createRoot } from "react-dom/client";
import "./index.css"; // Importing global CSS styles
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mobile from "./components/mobile/Mobile.jsx";

// Creating a router with defined routes
const router = createBrowserRouter([
  {
    path: "/", // Defining the root path
    element: <App />, // Rendering the App component at the root path
  },
  {
    path: "/mobile",
    element: <Mobile />,
  },
]);

// Rendering the application into the root DOM element
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider> // Providing the router to the application
);
