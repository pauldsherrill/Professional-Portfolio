import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Repos from "./components/Repos.jsx";
import Resume from "./components/Resume.jsx";
// import Resume from './components/Resume.jsx'; // Uncomment when the component is ready

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import your custom styles
import "./components/index.css";

import repos from "./repos.js";
import { projects, skills } from "./work.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <About />,
      },
      {
        path: "work",
        element: <Work projects={projects} skills={skills} />,
      },
      {
        path: "repos/:repoId",
        element: <Repos repos={repos} />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
