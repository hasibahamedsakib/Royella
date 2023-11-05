import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import Main2 from "../Main/Main2";
import Home2 from "../Pages/Home2/Home2";
import Main3 from "../Main/Main3";
import Home3 from "../Pages/Home3/Home3";
import Main4 from "../Main/Main4";
import Home4 from "../Pages/Home4/Home4";
import Home5 from "../Pages/Home5/Home5";
import Main5 from "../Main/Main5";
import Main6 from "../Main/Main6";
import Home6 from "../Pages/Home6/Home6";
import About from "../Pages/InnerPage/About";
import Room from "../Pages/InnerPage/Room";
import FindRoom from "../Pages/InnerPage/FindRoom";
import RoomDetails from "../Pages/InnerPage/RoomDetails";
import Services from "../Pages/InnerPage/Services";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails";
import Team from "../Pages/InnerPage/Team";
import Pricing from "../Pages/InnerPage/Pricing";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/find_room",
        element: <FindRoom />,
      },
      {
        path: "/room_details",
        element: <RoomDetails />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service_details",
        element: <ServiceDetails />,
      },
      {
        path: "/our_team",
        element: <Team />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
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
      {
        path: "/home2/about",
        element: <About />,
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
  // five home router
  {
    path: "/home5",
    element: <Main5 />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: "/home5",
        element: <Home5 />,
      },
    ],
  },
  // six home router
  {
    path: "/home6",
    element: <Main6 />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: "/home6",
        element: <Home6 />,
      },
    ],
  },
]);

export default router;
