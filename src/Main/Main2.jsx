import { Outlet } from "react-router-dom";
import Navbar2 from "../Shared/Navbar/Navbar2";
import ScrollToTop from "../ScrollToTop";

const Main2 = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar2 />
      <div>
        <Outlet />
      </div>
      <h1 className="text-2xl text-black text-right">Footer</h1>
    </>
  );
};

export default Main2;
