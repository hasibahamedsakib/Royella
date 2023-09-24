import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
