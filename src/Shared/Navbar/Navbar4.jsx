import { Link, NavLink } from "react-router-dom";
// import useScrollPosition from "./useScrollPosition";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown, BiSun } from "react-icons/bi";
import { IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar4 = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);
  // dark mode toggle bar
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  // scrolling tracker
  // const scrollPosition = useScrollPosition();
  // background color add and remover
  // const navbarBgColor =
  //   scrollPosition > 100 ? "lg:white " : "lg:bg-transparent";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={` w-full lg:fixed font-Lora z-10 transition-all duration-300 bg-white dark:bg-lightBlack h-20 md:h-[100px]  grid items-center `}
    >
      <div className="Container3 ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* website Logo */}
          <div className=" w-48 lg:w-40   lg:p-4 hidden lg:block">
            <Link to="/">
              <img
                src="/images/home-4/logo.png"
                className="dark:hidden"
                alt="website_logo"
              />
              <img
                src="/images/home-4/logo-2.png"
                className=" hidden dark:block"
                alt="website_logo"
              />
            </Link>
          </div>

          {/* small screen size */}
          <div className="px-3 w-full lg:hidden flex justify-between items-center text-white bg-white dark:bg-lightBlack h-[80px] p-3">
            <div className=" w-28  ">
              <Link to="/">
                <img
                  src="/images/home-4/logo.png"
                  className="dark:hidden"
                  alt="website_logo"
                />
                <img
                  src="/images/home-4/logo-2.png"
                  className=" hidden dark:block"
                  alt="website_logo"
                />
              </Link>
            </div>

            {/* toggle bar and dark and light mode. */}
            <div className="flex items-center ">
              <span onClick={handleClick} className="mr-3 cursor-pointer">
                {isDarkMode ? (
                  <BiSun
                    className="text-lightBlack dark:text-white"
                    title="Apply Light Mode"
                    size={20}
                  />
                ) : (
                  <IoMoonSharp
                    size={20}
                    className="text-lightBlack dark:text-white"
                    title="Apply Dark Mode"
                  />
                )}
              </span>
              <button
                className="lg:hidden block focus:outline-none "
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className="w-6 h-6  text-lightBlack dark:text-white" />
                ) : (
                  <FaBars className="w-5 h-5  text-lightBlack dark:text-white" />
                )}
              </button>
            </div>
          </div>

          {/* All navLink are hear with active */}

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center  lg:space-x-5 space-x-0 flex items-center flex-col lg:flex-row text-sm text-lightBlack   uppercase font-normal bg-white dark:bg-normalBlack z-10 lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 `}
          >
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white border-b-2 lg:border-b-0 border-normalBlack px-3 py-2 w-full block transition-all duration-300 group relative`}
              to="/home4"
            >
              <span className="flex items-center">
                Home
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm bg-white dark:bg-lightBlack text-black dark:text-white w-60 text-left transition-all duration-500 text-sm py-4 ">
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/">home 1</NavLink>
                    </li>
                  </div>
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home2">Home 2</NavLink>
                    </li>
                  </div>
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home3">Home 3</NavLink>
                    </li>
                  </div>

                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home5">Home 5</NavLink>
                    </li>
                  </div>
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/home6">Home 6</NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white border-b-2 lg:border-b-0 border-normalBlack px-3 py-2 w-full transition-all duration-300 `}
              to="/services"
            >
              Rooms
              {/* pages menu and submenu link */}
            </NavLink>

            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white border-b-2 lg:border-b-0 border-normalBlack px-3 py-2 w-full block transition-all duration-300`}
              to="/about"
            >
              Events
            </NavLink>

            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white border-b-2 lg:border-b-0 border-normalBlack px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                Blog
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm bg-white text-black w-60 text-left transition-all duration-500 text-sm py-4 ">
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/about">ABOUT US</NavLink>
                    </li>
                  </div>
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/services">SERVICE</NavLink>
                    </li>
                  </div>
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/team">TEAM MEMBER</NavLink>
                    </li>
                  </div>
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                  </div>
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/faq">FAQ</NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            {/* blog sub menu link */}
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white border-b-2 lg:border-b-0 border-normalBlack px-3 py-2 w-full block transition-all duration-300 `}
              to="#"
            >
              Location
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/contact"
            >
              Contact
            </NavLink>
            {/* large device visible button and search icon */}
            <div className="hidden lg:flex items-center ml-5">
              <span onClick={handleClick} className="mx-3 cursor-pointer">
                {isDarkMode ? (
                  <BiSun
                    className="text-lightBlack dark:text-white "
                    title="Apply Light Mode"
                    size={30}
                  />
                ) : (
                  <IoMoonSharp
                    className="text-lightBlack dark:text-white "
                    title="Apply Dark Mode"
                    size={30}
                  />
                )}
              </span>
              <Link to="#" className=" pr-3">
                <button className="btn-primary">More About</button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar4;
