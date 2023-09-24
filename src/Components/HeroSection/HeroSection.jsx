// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaCalendarPlus } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div className="relative">
      <Swiper
        centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide>
          <div
            className="bg-[url('/images/home-1/hero-bg.jpg')] w-full h-screen 2xl:h-[
            850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center justify-center text-white relative pb-[150px] lg:pb-0 "
          >
            <div className="font-Garamond space-y-2 sm:space-y-4 md:space-y-6 3xl:space-y-10 2xl:w-[720px] text-center">
              <div className="flex space-x-2 items-center justify-center">
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
              </div>
              <h4 className="text-base">LUXURY HOTEL AND RESORT</h4>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                  THE BEST LUXURY HOTEL
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] ">
                  IN CALIFORNIA
                </h1>
              </div>
              <button className="w-[185px] h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16">
                Discover More
              </button>
              {/* contact info */}
            </div>
            <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
              <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> +980 123 4567
              890
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div
            className="bg-[url('/images/home-1/hero-bg2.jpg')] w-full h-screen 2xl:h-[
            850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center justify-center text-white relative pb-[150px] lg:pb-0"
          >
            <div className="font-Garamond space-y-2 sm:space-y-4 md:space-y-6 2xl:space-y-10 2xl:w-[720px] text-center">
              <div className="flex space-x-2 items-center justify-center">
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
              </div>
              <h4 className="text-base">LUXURY HOTEL AND RESORT</h4>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                  THE BEST LUXURY HOTEL
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] ">
                  IN CALIFORNIA
                </h1>
              </div>
              <button className="w-[185px] h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16">
                Discover More
              </button>
              {/* contact info */}
            </div>
            <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
              <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> +980 123 4567
              890
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div
            className="bg-[url('/images/home-1/hero-bg.jpg')] w-full h-screen 2xl:h-[
            850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center justify-center text-white relative pb-[150px] lg:pb-0"
          >
            <div className="font-Garamond space-y-2 sm:space-y-4 md:space-y-6 2xl:space-y-10 2xl:w-[720px] text-center">
              <div className="flex space-x-2 items-center justify-center">
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
              </div>
              <h4 className="text-base">LUXURY HOTEL AND RESORT</h4>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                  THE BEST LUXURY HOTEL
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] ">
                  IN CALIFORNIA
                </h1>
              </div>
              <button className="w-[185px] h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16">
                Discover More
              </button>
              {/* contact info */}
            </div>
            <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
              <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> +980 123 4567
              890
            </div>
          </div>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <div
            className="bg-[url('/images/home-1/hero-bg2.jpg')] w-full h-screen 2xl:h-[
            850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center justify-center text-white relative pb-[150px] lg:pb-0"
          >
            <div className="font-Garamond space-y-2 sm:space-y-4 md:space-y-6 2xl:space-y-10 2xl:w-[720px] text-center">
              <div className="flex space-x-2 items-center justify-center">
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
                <FaStar className="w-[14px] h-[14px] text-khaki" />
              </div>
              <h4 className="text-base">LUXURY HOTEL AND RESORT</h4>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                  THE BEST LUXURY HOTEL
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] ">
                  IN CALIFORNIA
                </h1>
              </div>
              <button className="w-[185px] h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16">
                Discover More
              </button>
              {/* contact info */}
            </div>
            <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
              <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> +980 123 4567
              890
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* booking area start */}
      <section className="Container-Hero bg-lightBlack grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 items-center justify-center font-Lora py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki absolute left-0 right-0 -bottom-12 z-[1]">
        <div className="p-3">
          <p className="text-sm text-lightGray">Check In</p>
          <div className="flex items-center pt-[18px] ">
            <input
              type="text"
              className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white focus:border-none outline-0 w-[140px] sm:w-[160px] text-sm sm:text-base focus:ring-transparent"
              defaultValue="26 August, 2023"
            />
            <FaCalendarPlus className="w-4 h-4 text-khaki ml-20" />
          </div>
        </div>
        <div className="p-3">
          <p className="text-sm text-lightGray">Check In</p>
          <div className="flex items-center pt-[18px] ">
            <input
              type="text"
              className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white focus:border-none outline-0 w-[140px] sm:w-[160px] text-sm sm:text-base focus:ring-transparent"
              defaultValue="26 August, 2023"
            />
            <FaCalendarPlus className="w-4 h-4 text-khaki ml-20" />
          </div>
        </div>
        <div className="p-3">
          <p className="text-sm text-lightGray">Rooms</p>
          <div className="flex items-center pt-[18px]">
            <select className="w-[140px] sm:w-[200px] bg-transparent border-0 outline-0 text-sm sm:text-base text-white focus:border-khaki focus:outline-none focus:border-none focus:ring-transparent">
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 ">
                01 Rooms
              </option>
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 ">
                02 Rooms
              </option>
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 ">
                03 Rooms
              </option>
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 ">
                04 Rooms
              </option>
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 ">
                05 Rooms
              </option>
            </select>
          </div>
        </div>

        <div className="p-3">
          <p className="text-sm text-lightGray">Guests</p>
          <div className="flex items-center pt-[18px]">
            <select className="border-0 w-[145px] sm:w-[200px] bg-transparent  outline-0 text-sm sm:text-base focus:outline-none focus:border-none focus:ring-transparent text-white">
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 text-white">
                01 Adult, 0 Child
              </option>
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 text-white">
                02 Adult, 0 Child
              </option>
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 text-white">
                02 Adult, 1 Child
              </option>
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 text-white">
                02 Adult, 2 Child
              </option>
              <option className="bg-lightBlack text-sm sm:text-base px-3 py-1 text-white">
                05 Adult, 0 Child
              </option>
            </select>
          </div>
        </div>
        <button className="w-[142px] h-[50px] text-[15px] bg-khaki font-Garamond text-white">
          Checkout Now
        </button>
      </section>
      {/* booking area end */}
    </div>
  );
};

export default HeroSection;
