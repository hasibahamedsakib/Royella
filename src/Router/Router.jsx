import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import Main2 from "../Main/Main2";
import Home2 from "../Pages/Home2/Home2";
import Main3 from "../Main/Main3";
import Home3 from "../Pages/Home3/Home3";
import Main4 from "../Main/Main4";
import Home4 from "../Pages/Home4/Home4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
    ],
  },
  // second homepage
  {
    path: "/home2",
    element: <Main2 />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: "/home2",
        element: <Home2 />,
      },
    ],
  },
  // Third home router
  {
    path: "/home3",
    element: <Main3 />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: "/home3",
        element: <Home3 />,
      },
    ],
  },
  // forth home router
  {
    path: "/home4",
    element: <Main4 />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: "/home4",
        element: <Home4 />,
      },
    ],
  },
]);

export default router;
