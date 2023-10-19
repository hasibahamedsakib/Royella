import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Footer4 from "../Shared/Footer/Footer4";
import Navbar4 from "../Shared/Navbar/Navbar4";

const Main4 = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar4 />
      <div>
        <Outlet />
      </div>
      <Footer4 />
    </>
  );
};

export default Main4;
