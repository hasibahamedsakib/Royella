import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Brand from "../../Components/Brand/Brand";
import { BiEnvelope, BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Brand />
      <footer className="">
        {/* footer content */}
        <div className="bg-lightBlack   ">
          <div className="Container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 ga-5 md:gap-[30px] py-14 lg:py-[100px]">
            {/* Footer Content one. */}
            <div className="2xl:mt-[-195px] 2xl:col-span-2">
              <div className="bg-[#272727] py-4 md:py-7 lg:py-[50px] px-10 2xl:mr-10   ">
                <img src="/images/home-1/logo-1.png" alt="" />
                <div className="py-[50px] ">
                  <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10">
                    CONTACT INFO
                  </h1>
                  <div className="space-y-4 py-[30px]">
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                      <IoIosCall
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      +980 (1234) 567 220
                    </p>
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                      <BiEnvelope
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      example@yahoo.com
                    </p>
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                      <IoLocationSharp
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      102/B New Elephant Rd <br />
                      Dhaka - 1212
                    </p>
                  </div>
                </div>
                <div>
                  <ul className="flex space-x-3">
                    <li className="hover:bg-khaki group transition-all duration-300 p-3 rounded-full border border-white hover:border-khaki cursor-pointer">
                      <Link to="#" className="">
                        <FaFacebookF className="text-white group-hover:text-slateBlue-0 w-4 h-4 md:h-5 md:w-5" />
                      </Link>
                    </li>

                    <li className="hover:bg-khaki group transition-all duration-300 p-3 rounded-full border border-white hover:border-khaki cursor-pointer">
                      <Link to="#">
                        <FaTwitter className="text-white group-hover:text-slateBlue-0 w-4 h-4 md:h-5 md:w-5" />
                      </Link>
                    </li>
                    <li className="hover:bg-khaki group transition-all duration-300 p-3 rounded-full border border-white hover:border-khaki cursor-pointer">
                      <Link to="#">
                        <BiLogoLinkedin className="text-white group-hover:text-slateBlue-0 w-4 h-4 md:h-5 md:w-5" />
                      </Link>
                    </li>
                    <li className="hover:bg-khaki group transition-all duration-300 p-3 rounded-full border border-white hover:border-khaki cursor-pointer">
                      <Link to="#">
                        <FaPinterestP className="text-white group-hover:text-slateBlue-0 w-4 h-4 md:h-5 md:w-5" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* footer content-2 */}

            <div className="py-4 md:py-7 lg:py-[50px] overflow-x-hidden ">
              <h1 className=" text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                UseFul Links
              </h1>
              <div className=" py-[30px]">
                <ul
                  className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
                 "
                >
                  <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                    About Hotel
                  </li>
                  <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                    Rooms & Suites
                  </li>
                  <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                    Reservations
                  </li>
                  <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                    News & Blogs
                  </li>
                  <li className="hover:ml-4 transition-all duration-500 hover:text-khaki leading-[46px]">
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
            {/* footer content-3 */}

            <div className="py-4 md:py-7 lg:py-[50px]">
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                GALLERY
              </h1>
              <div className="grid grid-cols-3 gap-x-[10px] gap-y-[10px] py-[30px] content-center w-[250px]">
                <img src="/images/home-1/gallery-1.jpg" alt="" />
                <img src="/images/home-1/gallery-2.jpg" alt="" />
                <img src="/images/home-1/gallery-3.jpg" alt="" />
                <img src="/images/home-1/gallery-4.jpg" alt="" />
                <img src="/images/home-1/gallery-5.jpg" alt="" />
                <img src="/images/home-1/gallery-6.jpg" alt="" />
              </div>
            </div>
            {/* footer content-4 */}

            <div className="py-4 md:py-7 lg:py-[50px] overflow-x-hidden ">
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                NEWSLETTER
              </h1>
              <div className="space-y-4 py-[30px]">
                <p className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                  Subscribe our Newsletter
                </p>
                <form action="" className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="placeholder:text-gray placeholder:font-Lora placeholder:font-normal placeholder:text-[15px] text-center h-[56px] w-full px-10 placeholder:leading-[26px] text-[15px] text-gray"
                    required
                  />
                  <button className="btn-subscribe">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
