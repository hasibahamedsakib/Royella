import { Link, NavLink } from "react-router-dom";
import { SlEnvolope } from "react-icons/sl";
import {
  FaBars,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoIosCall, IoIosSend, IoMdClose } from "react-icons/io";
import { BiChevronDown, BiSun } from "react-icons/bi";
import { IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import useScrollPosition from "./useScrollPosition";

const Navbar6 = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);
  // dark mode toggle bar
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  // scrolling tracker
  // scrolling tracker
  const scrollPosition = useScrollPosition();
  // background color add and remover
  const navbarBgColor =
    scrollPosition > 120
      ? "lg:bg-lightBlack"
      : "bg-normalBlack lg:bg-transparent ";
  const topbarHide = scrollPosition > 120 ? "hidden" : "";

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
    <nav className="z-10">
      <div
        className={` w-full lg:fixed font-Lora z-10 transition-all duration-300  h-20 md:h-[100px]  grid items-center  ${navbarBgColor}`}
      >
        <div className="bg-khaki">
          {/* Top Navbar */}
          <div
            className={`flex flex-col lg:flex-row items-center justify-between ${topbarHide} py-2 sm:py-3 md:py-[18px] space-y-2 lg:space-y-0 Container`}
          >
            {/* location and payment */}
            <div className="flex items-center flex-col sm:flex-row">
              <div className="flex items-center">
                <SlEnvolope className="w-[15px] h-[15px] text-white" />
                <p className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora ml-2">
                  needhelp@tripo.com
                </p>
              </div>
              <div className="flex items-center ml-5 2xl:ml-8">
                <IoIosCall className="w-[15px] h-[15px] text-white" />
                <p className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora ml-2">
                  666-999-0000
                </p>
              </div>
              <div className="flex items-center ml-5 2xl:ml-8">
                <IoIosSend className="w-[15px] h-[15px] text-white" />
                <p className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora ml-2">
                  184 Main Collins Street
                </p>
              </div>
            </div>
            {/* topbar menu */}
            <div className="hidden sm:block">
              <ul className="flex items-center space-x-4 lg:space-x-[22px] 2xl:space-x-[25px]">
                <li className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora ">
                  Follow us :
                </li>

                <Link to="#">
                  <FaFacebookF className="w-[15px] h-[15px] text-white " />
                </Link>
                <Link to="#">
                  <FaTwitter className="w-[15px] h-[15px] text-white " />
                </Link>
                <Link to="#">
                  <FaInstagram className="w-[15px] h-[15px] text-white " />
                </Link>
                <Link to="#">
                  <FaDribbble className="w-[15px] h-[15px] text-white " />
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="Container3 z-[1]">
          {/* Main navbar start */}
          <div className="flex flex-col lg:flex-row items-center justify-between ">
            {/* website Logo */}
            <div className=" w-48 lg:w-40   lg:p-4 hidden lg:block">
              <Link to="/">
                <img
                  src="/images/home-5/logo.png"
                  className=""
                  alt="website_logo"
                />
              </Link>
            </div>

            {/* small screen size */}
            <div className="px-3 w-full lg:hidden flex justify-between items-center text-white bg-normalBlack h-[80px] p-3">
              <div className=" w-28  ">
                <Link to="/">
                  <img
                    src="/images/home-5/logo.png"
                    className=""
                    alt="website_logo"
                  />
                </Link>
              </div>

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
                    <IoMdClose className="w-6 h-6  text-white" />
                  ) : (
                    <FaBars className="w-5 h-5  text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* All navLink are hear with active */}

            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-3 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px] flex flex-col lg:flex-row text-sm text-lightBlack lg:text-white dark:text-white uppercase font-normal bg-white dark:bg-normalBlack lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 `}
            >
              <NavLink
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative`}
                to="/"
              >
                <span className="flex items-center">
                  Home
                  <BiChevronDown className="ml-1" />
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/home2" className="py-2 block">
                          Resort
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/home3" className="py-2 block">
                          Hostel
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/home4" className="py-2 block">
                          City Hotel
                        </NavLink>
                      </li>
                    </div>

                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/home5" className="py-2 block">
                          Apartment
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/home6" className="py-2 block">
                          Tourist
                        </NavLink>
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
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
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
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
                to="#"
              >
                <span className="flex items-center">
                  Rooms
                  <BiChevronDown className="ml-1" />
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/room" className="block py-2">
                          Room
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/find_room" className="block py-2">
                          Find Room
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/room_details" className="block py-2">
                          Room Details
                        </NavLink>
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
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
                to="#"
              >
                <span className="flex items-center">
                  Page
                  <BiChevronDown className="ml-1" />
                </span>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/about" className="py-2 block">
                          ABOUT US
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/services" className="py-2 block">
                          SERVICE
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/service_details" className="py-2 block">
                          SERVICE DETAILS
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/our_team" className="py-2 block">
                          OUR TEAM
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <NavLink to="/pricing" className="py-2 block">
                          PRICING
                        </NavLink>
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
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
                to="#"
              >
                <span className="flex items-center">
                  BLOG
                  <BiChevronDown className="ml-1" />
                </span>
                <div className="absolute pt-4 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm  py-4">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300 ">
                        <NavLink to="/blog" className="py-2 block">
                          BLOG
                        </NavLink>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300 ">
                        <NavLink to="/blog_details" className="py-2 block">
                          BLOG DETAILS
                        </NavLink>
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
                    : ""} text-lightBlack lg:text-white dark:text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
                to="/contact"
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar6;
