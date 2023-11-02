// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div className="">
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
          <div className="bg-[url('/images/home-1/hero-bg.jpg')] w-full h-screen sm:h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-16 xl:pb-0 ">
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
              <button className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16">
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
          <div className="bg-[url('/images/home-1/hero-bg2.jpg')] w-full h-screen sm:h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-20 xl:pb-0">
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
              <button className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16">
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
          <div className="bg-[url('/images/home-1/hero-bg.jpg')] w-full h-screen sm:h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-20 xl:pb-0">
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
              <button className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16">
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
          <div className="bg-[url('/images/home-1/hero-bg2.jpg')] w-full h-screen sm:h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-20 xl:pb-0">
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
              <button className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16">
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
    </div>
  );
};

export default HeroSection;
