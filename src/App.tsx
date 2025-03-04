import { StrictMode, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/PageContents/about.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Project from "./pages/project.tsx";
import Home from "./pages/index.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  // { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/project", element: <Project /> },
]);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
