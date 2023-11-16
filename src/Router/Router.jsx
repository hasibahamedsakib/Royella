import { createBrowserRouter } from "react-router-dom";

// Home And Main Home1
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
// Home And Main Home2
import Main2 from "../Main/Main2";
import Home2 from "../Pages/Home2/Home2";
// Home And Main Home3
import Main3 from "../Main/Main3";
import Home3 from "../Pages/Home3/Home3";
// Home And Main Home4
import Main4 from "../Main/Main4";
import Home4 from "../Pages/Home4/Home4";
// Home And Main Home-5
import Home5 from "../Pages/Home5/Home5";
import Main5 from "../Main/Main5";

// All InnerPage
import About from "../Pages/InnerPage/About";
import Room from "../Pages/InnerPage/Room";
import FindRoom from "../Pages/InnerPage/FindRoom";
import RoomDetails from "../Pages/InnerPage/RoomDetails";
import Services from "../Pages/InnerPage/Services";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails";
import Team from "../Pages/InnerPage/Team";
import Pricing from "../Pages/InnerPage/Pricing";
import Blog from "../Pages/InnerPage/Blog";
import BlogDetails from "../Pages/InnerPage/BlogDetails";
import Contact from "../Pages/InnerPage/Contact";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

// Starting React Router.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // second homepage
  {
    path: "/home2",
    element: <Main2 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home2",
        element: <Home2 />,
      },
      {
        path: "/home2/about",
        element: <About />,
      },

      {
        path: "/home2/room",
        element: <Room />,
      },
      {
        path: "/home2/find_room",
        element: <FindRoom />,
      },
      {
        path: "/home2/room_details",
        element: <RoomDetails />,
      },
      {
        path: "/home2/services",
        element: <Services />,
      },
      {
        path: "/home2/service_details",
        element: <ServiceDetails />,
      },
      {
        path: "/home2/our_team",
        element: <Team />,
      },
      {
        path: "/home2/pricing",
        element: <Pricing />,
      },
      {
        path: "/home2/blog",
        element: <Blog />,
      },
      {
        path: "/home2/blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/home2/contact",
        element: <Contact />,
      },
    ],
  },
  // Third home router
  {
    path: "/home3",
    element: <Main3 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home3",
        element: <Home3 />,
      },
      {
        path: "/home3/about",
        element: <About />,
      },
      {
        path: "/home3/room",
        element: <Room />,
      },
      {
        path: "/home3/find_room",
        element: <FindRoom />,
      },
      {
        path: "/home3/room_details",
        element: <RoomDetails />,
      },
      {
        path: "/home3/services",
        element: <Services />,
      },
      {
        path: "/home3/service_details",
        element: <ServiceDetails />,
      },
      {
        path: "/home3/our_team",
        element: <Team />,
      },
      {
        path: "/home3/pricing",
        element: <Pricing />,
      },
      {
        path: "/home3/blog",
        element: <Blog />,
      },
      {
        path: "/home3/blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/home3/contact",
        element: <Contact />,
      },
    ],
  },
  // forth home router
  {
    path: "/home4",
    element: <Main4 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home4",
        element: <Home4 />,
      },
      {
        path: "/home4/about",
        element: <About />,
      },
      {
        path: "/home4/room",
        element: <Room />,
      },
      {
        path: "/home4/find_room",
        element: <FindRoom />,
      },
      {
        path: "/home4/room_details",
        element: <RoomDetails />,
      },
      {
        path: "/home4/services",
        element: <Services />,
      },
      {
        path: "/home4/service_details",
        element: <ServiceDetails />,
      },
      {
        path: "/home4/our_team",
        element: <Team />,
      },
      {
        path: "/home4/pricing",
        element: <Pricing />,
      },
      {
        path: "/home4/blog",
        element: <Blog />,
      },
      {
        path: "/home4/blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/home4/contact",
        element: <Contact />,
      },
    ],
  },
  // five home router
  {
    path: "/home5",
    element: <Main5 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home5",
        element: <Home5 />,
      },
      {
        path: "/home5/about",
        element: <About />,
      },
      {
        path: "/home5/room",
        element: <Room />,
      },
      {
        path: "/home5/find_room",
        element: <FindRoom />,
      },
      {
        path: "/home5/room_details",
        element: <RoomDetails />,
      },
      {
        path: "/home5/services",
        element: <Services />,
      },
      {
        path: "/home5/service_details",
        element: <ServiceDetails />,
      },
      {
        path: "/home5/our_team",
        element: <Team />,
      },
      {
        path: "/home5/pricing",
        element: <Pricing />,
      },
      {
        path: "/home5/blog",
        element: <Blog />,
      },
      {
        path: "/home5/blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/home5/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
