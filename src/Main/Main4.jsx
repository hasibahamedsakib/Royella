import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Footer4 from "../Shared/Footer/Footer4";
import Navbar4 from "../Shared/Navbar/Navbar4";
import GoToTop from "../Shared/GoToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main4 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <ScrollToTop />
      <GoToTop />
      <Navbar4 />
      <div>
        <Outlet />
      </div>
      <Footer4 />
    </>
  );
};

export default Main4;
