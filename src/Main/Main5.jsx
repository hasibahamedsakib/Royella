import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Navbar5 from "../Shared/Navbar/Navbar5";
import Footer5 from "../Shared/Footer/Footer5";

const Main5 = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar5 />
      <div>
        <Outlet />
      </div>
      <Footer5 />
    </>
  );
};

export default Main5;
