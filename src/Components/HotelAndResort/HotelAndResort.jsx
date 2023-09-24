import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hotel.css";
const HotelAndResort = () => {
  return (
    <div className="Container py-[115px] mt-[100px] sm:overflow-hidden lg:overflow-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Slider */}
        <div
          className="w-screen px-5 md:w-[50%] 2xl:w-[580px] mt-[120px] md:mt-0 
"
        >
          <Swiper
            centeredSlides={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper1 sm:mt-16 lg:mt-0"
          >
            {/* slider 1 */}
            <SwiperSlide>
              <div className="">
                <img
                  src="/images/home-1/Hotel.png"
                  className="h-[85%] lg:h-[90%]"
                  alt="Hotel-slider-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src="/images/home-1/Hotel.png"
                  className="h-[85%] md:h-[100%] lg:h-[90%]"
                  alt="Hotel-slider-image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* text */}
        <div className=" lg:ml-[110px] lg:mt-[110px] xl:mt-0 font-Garamond space-y-5 mt-10  p-5">
          <h5 className="text-base text-khaki leading-[26px] font-medium">
            LUXURY HOTEL AND RESORT
          </h5>
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack font-semibold ">
            LUXURY BEST HOTEL IN CITY CALIFORNIA, USA
          </h1>
          <p className="text-sm sm:text-base font-Lora text-gray font-normal leading-[26px]">
            Rapidiously myocardinate cross-platform intellectual capital after
            marketing model. Appropriately create interactive infrastructures
            after maintainable are Holisticly facilitate stand-alone inframe
            Compellingly create premier open data through economically.
          </p>
          <div className="flex items-center space-x-10">
            <div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                250 +
              </h1>
              <p className="text-base leading-[26px] text-gray font-normal font-Lora pt-7">
                Luxury Rooms
              </p>
            </div>
            <div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                4.9
              </h1>
              <p className="text-base leading-[26px] text-gray font-normal font-Lora pt-7">
                Customer Ratings
              </p>
            </div>
          </div>
          <div className="relative overflow-x-hidden">
            <hr className="w-full h-[2px] bg-[#ddd] text-[#ddd]" />
            <span className="w-[60px] h-[2px] bg-khaki rounded-full absolute -top-[0px] animation-move"></span>
          </div>
          <button className="btn-primary">More About</button>
        </div>
      </div>
    </div>
  );
};

export default HotelAndResort;
