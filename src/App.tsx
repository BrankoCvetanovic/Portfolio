import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/RootPage";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
