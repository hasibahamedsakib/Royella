import { Link, NavLink } from "react-router-dom";
import useScrollPosition from "./useScrollPosition";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown, BiSun } from "react-icons/bi";
import { IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);
  // dark mode toggle bar
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  // scrolling tracker
  const scrollPosition = useScrollPosition();
  // background color add and remover
  const navbarBgColor =
    scrollPosition > 100 ? "lg:bg-lightBlack" : "lg:bg-transparent";

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
      className={` w-full lg:fixed font-Lora z-10  lg:px-5 lg:py-2  transition-all duration-300 ${navbarBgColor} `}
    >
      <div className="lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* website Logo */}
          <div className=" w-48 lg:w-40   lg:p-4 ">
            <Link to="/">
              <img
                src="/images/home-1/logo-1.png"
                className="hidden lg:block"
                alt="website_logo"
              />
            </Link>
          </div>
          {/* small screen size */}
          <div className="px-3 w-full lg:hidden flex justify-between text-white bg-khaki p-3">
            <Link to="/">
              <div className=" w-28  ">
                <Link to="/">
                  <img
                    src="/images/home-1/brand-1.png"
                    className="block lg:hidden "
                    alt="Zomia_website_logo"
                  />
                </Link>
              </div>
            </Link>
            {/* toggle bar and dark and light mode. */}
            <div className="flex items-center ">
              <span onClick={handleClick} className="mr-3 cursor-pointer">
                {isDarkMode ? (
                  <BiSun
                    className="text-white"
                    title="Apply Light Mode"
                    size={20}
                  />
                ) : (
                  <IoMoonSharp
                    size={20}
                    className="text-white"
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
                  <IoMdClose className="w-6 h-6 text-white" />
                ) : (
                  <FaBars className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
          {/* All navLink are hear with active */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center  lg:space-x-3 space-x-0 flex flex-col lg:flex-row text-sm text-lightBlack uppercase font-normal bg-normalBlack lg:bg-transparent py-3 lg:py-0 `}
          >
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
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
                  : ""} text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                Page
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
                  : ""} text-white border-b-2 lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                Hotel
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-4 lg:pt-8 z-20">
                <ul className="shadow-lg hidden group-hover:block rounded-sm bg-white text-black w-60 text-left transition-all duration-500 text-sm  py-4">
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog_list">BLOG LIST</NavLink>
                    </li>
                  </div>
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog_grid">BLOG GRID</NavLink>
                    </li>
                  </div>
                  <div className="py-2 px-5 group">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog_details">BLOG DETAILS</NavLink>
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
                  : ""} text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>

          {/* large device visible button and search icon */}
          <div className="hidden lg:flex items-center">
            <span onClick={handleClick} className="mr-2 cursor-pointer">
              {isDarkMode ? (
                <BiSun
                  className="text-white"
                  title="Apply Light Mode"
                  size={35}
                />
              ) : (
                <IoMoonSharp
                  className="text-white"
                  title="Apply Dark Mode"
                  size={35}
                />
              )}
            </span>
            <Link to="/booking">
              {" "}
              <button className="btn-secondary">Booking Online</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
