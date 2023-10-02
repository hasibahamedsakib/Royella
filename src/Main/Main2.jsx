import { Outlet } from "react-router-dom";
import Navbar2 from "../Shared/Navbar/Navbar2";
import ScrollToTop from "../ScrollToTop";
import Footer2 from "../Shared/Footer/Footer2";

const Main2 = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar2 />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};

export default Main2;
