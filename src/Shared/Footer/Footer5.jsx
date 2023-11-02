import { BiLogoLinkedin, BiMessageRounded } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

import { Link } from "react-router-dom";
const Footer5 = () => {
  return (
    <footer className="relative   bg-[url('/images/home-5/footer-bg.jpg')] bg-cover bg-center bg-no-repeat pt-10">
      <div className="Container grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-[30px] px-5  py-20 2xl:pt-[120px]">
        {/* logo and text */}
        <div className="px-5">
          <img src="/images/home-2/dark_footer_logo.png" className="" alt="" />
          <p className="text-sm sm:text-base leading-[26px] font-Lora font-normal text-[#f7f9fb] mt-6 lg:mt-[35px]">
            Show beauty your location, showse design your rooms, present the
            facities an todays features of your hotel and offer tos recove
            method to book a room.
          </p>
          <div className="mt-5 lg:mt-[30px]">
            <ul className="flex space-x-3">
              <li className="hover:bg-khaki group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#" className="">
                  <FaFacebookF className="text-[#f7f9fb] group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>

              <li className="hover:bg-khaki group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaTwitter className="text-[#f7f9fb] group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
              <li className="hover:bg-khaki group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <BiLogoLinkedin className="text-[#f7f9fb] group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
              <li className="hover:bg-khaki group transition-all duration-300 w-[35px] h-[35px] md:w-[40px] md:h-[40px] grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaPinterestP className="text-[#f7f9fb] group-hover:text-slateBlue-0 w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Home info */}
        <div className="px-5">
          <h1
            className="text-[22px] text-lg sm:text-xl md:text-[22px] lg:text-2xl 2xl:text-3xl
          leading-6 md:leading-[26px] font-medium text-[#f7f9fb] relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10  "
          >
            Home
          </h1>
          <div className=" mt-5 lg:mt-[30px] overflow-hidden">
            <ul
              className="text-[#f7f9fb] font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
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
          leading-6 md:leading-[26px] font-medium text-[#f7f9fb] relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10  "
          >
            General
          </h1>
          <div className=" mt-5 lg:mt-[30px] overflow-hidden">
            <ul
              className="text-[#f7f9fb] font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
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
        {/* contact*/}
        <div className="px-5">
          <h1
            className="text-[22px] text-lg sm:text-xl md:text-[22px] lg:text-2xl 2xl:text-3xl
          leading-6 md:leading-[26px] font-medium text-[#f7f9fb] relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10  "
          >
            Get In Touch
          </h1>

          <div className="mt-5 lg:mt-[35px] ">
            <div>
              <div className="flex items-start">
                <IoLocationSharp size={17} className="text-khaki mt-[6px]" />
                <div className="ml-[10px]">
                  <p className="text-lg sm:text-xl leading-[27px] text-[#f7f9fb] font-bold font-Garamond ">
                    Location:{" "}
                  </p>
                  <p className="text-sm sm:text-base leading-[27px] text-[#f7f9fb] font-normal font-Lora">
                    2976 Sunrise Avenue, Las Vegas
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-start">
                <BiMessageRounded size={17} className="text-khaki mt-[6px]" />
                <div className="ml-[10px]">
                  <p className="text-lg sm:text-xl leading-[27px] text-[#f7f9fb] font-bold font-Garamond ">
                    Email:
                  </p>
                  <p className="text-sm sm:text-base leading-[27px] text-[#f7f9fb] font-normal font-Lora">
                    example@mail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-start">
                <IoIosCall size={17} className="text-khaki mt-[6px]" />
                <div className="ml-[10px]">
                  <p className="text-lg sm:text-xl leading-[27px] text-[#f7f9fb] font-bold font-Garamond ">
                    Phone:
                  </p>
                  <p className="text-sm sm:text-base leading-[27px] text-[#f7f9fb] font-normal font-Lora">
                    +8 91230 456 789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Container ">
          <hr className="bg-gray text-gray " />
          <p className="text-lg sm:text-xl leading-[27px] text-[#f7f9fb] font-semibold font-Garamond text-center py-[30px]">
            Royella @2023. Royella All Rights Reserved By{" "}
            <span className="text-khaki">Dream IT</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
