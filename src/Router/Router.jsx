import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import Main2 from "../Main/Main2";
import Home2 from "../Pages/Home2/Home2";

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
]);

export default router;
