import { BiLogoLinkedin, BiSolidPhoneCall } from "react-icons/bi";
import {
  FaEnvelope,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer3 = () => {
  return (
    <footer className="bg-lightBlack ">
      <div className="Container">
        <div className="grid items-center justify-center py-20 2xl:py-[120]">
          <img src="/images/home-3/logo.png" className="mx-auto" />
          {/* footer contact */}
          <div className="mt-10 flex items-center justify-center space-x-[68px] ">
            <div className="flex items-center group">
              <span
                className="grid items-center justify-center w-[50px] h-[50px] border-[1px] border-gray
             rounded-full"
              >
                <BiSolidPhoneCall className="text-white" size={15} />
              </span>
              <p className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Lora font-medium ml-4 text-white group-hover:text-khaki transition-all duration-300">
                (+088) 210 - 123 - 4567
              </p>
            </div>
            <div className="flex items-center group">
              <span
                className="grid items-center justify-center w-[50px] h-[50px] border-[1px] border-gray
             rounded-full"
              >
                <FaEnvelope className="text-white" size={15} />
              </span>
              <p className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Lora font-medium ml-4 text-white group-hover:text-khaki transition-all duration-300">
                info@plethorathemes.com
              </p>
            </div>
            <div className="flex items-center group">
              <span
                className="grid items-center justify-center w-[50px] h-[50px] border-[1px] border-gray
             rounded-full"
              >
                <IoLocationSharp className="text-white" size={15} />
              </span>
              <p className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Lora font-medium ml-4 text-white group-hover:text-khaki transition-all duration-300">
                79 Folsom Ave, San Francisco
              </p>
            </div>
          </div>
        </div>
        <hr className="text-white bg-white bg-opacity-10 text-opacity-10 w-full h-[2px]" />
        <div className="py-5 md:py-7 lg:py-8 xl:py-9 2xl:py-10 flex flex-col md:flex-row justify-between">
          <p className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Lora font-medium ml-4 text-white">
            Copyright © <span className="text-khaki">2023 Royella.</span> All
            Rights Reserved.
          </p>
          <div>
            <ul className="flex space-x-3">
              <li className="hover:bg-khaki group transition-all duration-300 p-3 rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#" className="">
                  <FaFacebookF className="text-white group-hover:text-slateBlue-0 h-5 w-5" />
                </Link>
              </li>

              <li className="hover:bg-khaki group transition-all duration-300 p-3 rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaTwitter className="text-white group-hover:text-slateBlue-0 h-5 w-5" />
                </Link>
              </li>
              <li className="hover:bg-khaki group transition-all duration-300 p-3 rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <BiLogoLinkedin className="text-white group-hover:text-slateBlue-0 h-5 w-5" />
                </Link>
              </li>
              <li className="hover:bg-khaki group transition-all duration-300 p-3 rounded-full border border-white hover:border-khaki cursor-pointer">
                <Link to="#">
                  <FaPinterestP className="text-white group-hover:text-slateBlue-0 h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
