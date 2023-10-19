import { Link, NavLink } from "react-router-dom";
import useScrollPosition from "./useScrollPosition";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown, BiSun } from "react-icons/bi";
import { IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import "./navbar.css";

const Navbar4 = () => {
  // modal openar
  const [click, setClick] = useState(false);

  const handleModalClick = () => setClick(!click);
  // dark mode toggle bar
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  // scrolling tracker
  const scrollPosition = useScrollPosition();
  // background color add and remover
  const navbarBgColor =
    scrollPosition > 100 ? "lg:bg-lightBlack" : "lg:bg-transparent";

  // handling dark mode setter function
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
      className={`navbar w-full lg:fixed font-Lora z-10  lg:px-5 lg:py-2  transition-all duration-300  bg-red-300`}
    >
      <div className="Container flex items-center justify-between ">
        <Link exact to="/" className="nav-logo">
          <img src="/images/home-3/logo.png" alt="" />
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleModalClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleModalClick}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={handleModalClick}
            >
              Room
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={handleModalClick}
            >
              Hotel
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={handleModalClick}
            >
              Pages
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleModalClick}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div>
          {/* large device visible button and search icon */}
          <div className="hidden lg:flex items-center ml-5">
            <span onClick={handleClick} className="mx-3 cursor-pointer">
              {isDarkMode ? (
                <BiSun
                  className="text-white"
                  title="Apply Light Mode"
                  size={30}
                />
              ) : (
                <IoMoonSharp
                  className="text-white"
                  title="Apply Dark Mode"
                  size={30}
                />
              )}
            </span>
            <Link to="#">
              <FaBars size={28} />
            </Link>
          </div>
          {/*  mobile menu*/}
          <div className="nav-icon" onClick={handleModalClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <IoMdClose className="w-6 h-6  text-white" />
            ) : (
              <FaBars className="w-5 h-5 text-white" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar4;
