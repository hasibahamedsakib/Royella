import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Navbar6 from "../Shared/Navbar/Navbar6";
import Footer6 from "../Shared/Footer/Footer6";
// import GoToTop from "../Shared/GoToTop";

const Main6 = () => {
  return (
    <>
      <ScrollToTop />
      {/* <GoToTop /> */}
      <Navbar6 />
      <div>
        <Outlet />
      </div>
      <Footer6 />
    </>
  );
};

export default Main6;
