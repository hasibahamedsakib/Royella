import { Outlet } from "react-router-dom";

const Main2 = () => {
  return (
    <>
      <h1 className="text-2xl ">Navbar</h1>
      <div>
        <Outlet />
      </div>
      <h1 className="text-2xl text-black text-right">Footer</h1>
    </>
  );
};

export default Main2;
