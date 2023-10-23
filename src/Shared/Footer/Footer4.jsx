import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
const Footer4 = () => {
  return (
    <footer className=" py-20 2xl:py-[120px] bg-normalBlack ">
      <div className="Container grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-[30px] px-5">
        {/* logo and text */}
        <div className="px-5">
          <img src="/images/home-2/dark_footer_logo.png" className="" alt="" />
          <p className="text-sm sm:text-base leading-[26px] font-Lora font-normal text-lightGray mt-6 lg:mt-[35px]">
            Show beauty your location, showse design your rooms, present the
            facities an todays features of your hotel and offer tos recove
            method to book a room.
          </p>
          <div className="mt-5 lg:mt-[30px]">
            <ul className="flex space-x-3">
              <li className="hover:bg-khaki group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#" className="">
                  <FaFacebookF className="text-white group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>

              <li className="hover:bg-khaki group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaTwitter className="text-white group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
              <li className="hover:bg-khaki group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <BiLogoLinkedin className="text-white group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
              <li className="hover:bg-khaki group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaPinterestP className="text-white group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Home info */}
        <div className="px-5">
          <h1
            className="text-[22px] text-lg sm:text-xl md:text-[22px] lg:text-2xl 2xl:text-3xl
          leading-6 md:leading-[26px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10  "
          >
            Home
          </h1>
          <div className=" mt-5 lg:mt-[30px] overflow-hidden">
            <ul
              className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
                 "
            >
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                About Us
              </li>
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                Activities
              </li>
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                Contact Us
              </li>
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                News & Blogs
              </li>
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                Checkout
              </li>
            </ul>
          </div>
        </div>
        {/* General info*/}
        <div className="px-5">
          <h1
            className="text-[22px] text-lg sm:text-xl md:text-[22px] lg:text-2xl 2xl:text-3xl
          leading-6 md:leading-[26px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10  "
          >
            General
          </h1>
          <div className=" mt-5 lg:mt-[30px] overflow-hidden">
            <ul
              className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
                 "
            >
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                Accommodation
              </li>
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                Dine & Drink
              </li>
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                Spa & Leisure
              </li>
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                Services
              </li>
              <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                Our Location
              </li>
            </ul>
          </div>
        </div>
        {/* gallery*/}
        <div className="px-5">
          <h1
            className="text-[22px] text-lg sm:text-xl md:text-[22px] lg:text-2xl 2xl:text-3xl
          leading-6 md:leading-[26px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10  "
          >
            Instagram
          </h1>

          <div className="mt-5 lg:mt-[30px] grid grid-cols-3 gap-x-[10px] gap-y-[10px] py-[30px] content-center w-[250px]">
            <img src="/images/home-4/gallery-1.jpg" alt="" />
            <img src="/images/home-4/gallery-2.jpg" alt="" />
            <img src="/images/home-4/gallery-3.jpg" alt="" />
            <img src="/images/home-4/gallery-4.jpg" alt="" />
            <img src="/images/home-4/gallery-5.jpg" alt="" />
            <img src="/images/home-4/gallery-1.jpg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
