import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";

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
]);

export default router;
