import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./offers.css";
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Offers = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    620: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    993: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <section className="bg-[#f8f6f3] ">
      <div className="Container py-[120px]">
        <div className="flex items-center justify-between relative">
          <div className="space-y-5 w-[450px] font-Garamond">
            <h5 className="text-base text-khaki leading-[26px] font-medium">
              OFFERS
            </h5>
            <h1 className="text-[38px] leading-[44px] text-lightBlack font-semibold">
              ROYELLA’S LIMITED PERIOD BEST OFFERS
            </h1>
          </div>
          <div className="flex space-x-5 items-center">
            <button className="w-[50px] h-[50px] flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki hover:border-none group">
              <BsChevronLeft className="w-5 h-5 text-[#cccbc8] group-hover:text-white " />
            </button>
            <button
              className="w-[50px] h-[50px] flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki
             hover:border-none group"
            >
              <BsChevronRight className="w-5 h-5 text-[#cccbc8]  group-hover:text-white" />
            </button>
          </div>
        </div>

        <hr className="text-white my-[40px]" />
        {/* offers carusal */}
        <div className="">
          <Swiper
            spaceBetween={30}
            breakpoints={breakpoints}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper3 "
          >
            {/* card one */}
            <SwiperSlide>
              <div className="overflow-x-hidden  group">
                <div className="relative">
                  <img
                    src="/images/home-1/offers-1.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond">
                  <div className="px-6 3xl:px-7 py-2 flex items-center justify-center text-white absolute top-[10px] left-[10px] border-[1px] border-white    group-hover:bg-khaki transition-all duration-300">
                    <span className="text-[22px] leading-[26px] font-Garamond ">
                      25% off
                    </span>
                  </div>

                  <div className="bg-white">
                    <div className="py-[30px] text-center">
                      <Link to="#">
                        <h2
                          className="text-[24px] leading-[26px] font-semibold text-lightBlack hover:underline hover:underline-offset-2
                        "
                        >
                          Double Suite Rooms
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card two */}
            <SwiperSlide>
              <div className="overflow-x-hidden  group">
                <div className="relative">
                  <img
                    src="/images/home-1/offers-2.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond">
                  <div className="px-6 3xl:px-7 py-2 flex items-center justify-center text-white absolute top-[10px] left-[10px] border-[1px] border-white group-hover:bg-khaki transition-all duration-300">
                    <span className="text-[22px] leading-[26px] font-Garamond ">
                      25% off
                    </span>
                  </div>

                  <div className="bg-white">
                    <div className="py-[30px] text-center">
                      <Link to="#">
                        <h2 className="text-[24px] leading-[26px] font-semibold text-lightBlack hover:underline hover:underline-offset-2">
                          Suprior Bed Room
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card three */}
            <SwiperSlide>
              <div className="overflow-x-hidden  group">
                <div className="relative">
                  <img
                    src="/images/home-1/offers-3.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond">
                  <div className="px-6 3xl:px-7 py-2 flex items-center justify-center text-white absolute top-[10px] left-[10px] border-[1px] border-white group-hover:bg-khaki transition-all duration-300">
                    <span className="text-[22px] leading-[26px] font-Garamond ">
                      25% off
                    </span>
                  </div>

                  <div className="bg-white">
                    <div className="py-[30px] text-center">
                      <Link to="#">
                        <h2 className="text-[24px] leading-[26px] font-semibold text-lightBlack hover:underline hover:underline-offset-2">
                          Junior Suite Room
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card four */}
            <SwiperSlide>
              <div className="overflow-x-hidden  group">
                <div className="relative">
                  <img
                    src="/images/home-1/offers-4.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond">
                  <div className="px-6 3xl:px-7 py-2 flex items-center justify-center text-white absolute top-[10px] left-[10px] border-[1px] border-white group-hover:bg-khaki transition-all duration-300">
                    <span className="text-[22px] leading-[26px] font-Garamond ">
                      25% off
                    </span>
                  </div>

                  <div className="bg-white">
                    <div className="py-[30px] text-center">
                      <Link to="#">
                        <h2 className="text-[24px] leading-[26px] font-semibold text-lightBlack hover:underline hover:underline-offset-2">
                          Double Suite Rooms
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card five */}
            <SwiperSlide>
              <div className="overflow-x-hidden  group">
                <div className="relative">
                  <img
                    src="/images/home-1/offers-1.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond">
                  <div className="px-6 3xl:px-7 py-2 flex items-center justify-center text-white absolute top-[10px] left-[10px] border-[1px] border-white group-hover:bg-khaki transition-all duration-300">
                    <span className="text-[22px] leading-[26px] font-Garamond ">
                      25% off
                    </span>
                  </div>

                  <div className="bg-white">
                    <div className="py-[30px] text-center">
                      <Link to="#">
                        <h2 className="text-[24px] leading-[26px] font-semibold text-lightBlack hover:underline hover:underline-offset-2">
                          Delux Family Rooms
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card two */}
            <SwiperSlide>
              <div className="overflow-x-hidden  group">
                <div className="relative">
                  <img
                    src="/images/home-1/offers-2.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond">
                  <div className="px-6 3xl:px-7 py-2 flex items-center justify-center text-white absolute top-[10px] left-[10px] border-[1px] border-white group-hover:bg-khaki transition-all duration-300">
                    <span className="text-[22px] leading-[26px] font-Garamond ">
                      25% off
                    </span>
                  </div>

                  <div className="bg-white">
                    <div className="py-[30px] text-center">
                      <Link to="#">
                        <h2 className="text-[24px] leading-[26px] font-semibold text-lightBlack hover:underline hover:underline-offset-2">
                          Double Suite Rooms
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* card five */}
            <SwiperSlide>
              <div className="overflow-x-hidden  group">
                <div className="relative">
                  <img
                    src="/images/home-1/offers-1.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond">
                  <div className="px-6 3xl:px-7 py-2 flex items-center justify-center text-white absolute top-[10px] left-[10px] border-[1px] border-white group-hover:bg-khaki transition-all duration-300">
                    <span className="text-[22px] leading-[26px] font-Garamond ">
                      25% off
                    </span>
                  </div>

                  <div className="bg-white">
                    <div className="py-[30px] text-center">
                      <Link to="#">
                        <h2 className="text-[24px] leading-[26px] font-semibold text-lightBlack hover:underline hover:underline-offset-2">
                          Delux Family Rooms
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* card two */}
            <SwiperSlide>
              <div className="overflow-x-hidden  group">
                <div className="relative">
                  <img
                    src="/images/home-1/offers-2.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond">
                  <div className="px-6 3xl:px-7 py-2 flex items-center justify-center text-white absolute top-[10px] left-[10px] border-[1px] border-white group-hover:bg-khaki transition-all duration-300">
                    <span className="text-[22px] leading-[26px] font-Garamond ">
                      25% off
                    </span>
                  </div>

                  <div className="bg-white">
                    <div className="py-[30px] text-center">
                      <Link to="#">
                        <h2 className="text-[24px] leading-[26px] font-semibold text-lightBlack hover:underline hover:underline-offset-2">
                          Double Suite Rooms
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Offers;
