import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const LatestBlog = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    620: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <div className="dark:bg-normalBlack">
      <section className="Container py-20 lg:py-[120px]">
        <div className="bg-[url('/images/home-1/section-shape2.png')] bg-no-repeat bg-center bg-opacity-[0.07] text-center mx-auto  px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]">
          <img
            src="/images/home-1/section-shape1.png"
            alt="room_section_logo"
            className="w-[50px] h-[50px] mx-auto"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[44px] lg:leading-[52px] text-lightBlack dark:text-white mt-[30px] mb-[24px] font-Garamond font-semibold uppercase">
            LATEST POST FROM BLOG
          </h1>
          <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base">
            Proactively morph optimal infomediaries rather than accurate
            expertise. Intrinsicly progressive resources rather than
            resource-leveling
          </p>
        </div>
        {/* all blogs are here */}
        <div className="pt-[60px]">
          <Swiper
            breakpoints={breakpoints}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mySwiper3"
          >
            {/* blog one */}
            <SwiperSlide>
              <div className="overflow-x-hidden 3xl:w-[410px] group">
                <div className="relative">
                  <img
                    src="/images/home-1/blog-1.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd]">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6">
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        Interior
                      </p>
                    </div>
                    <Link to="#">
                      <h2 className="text-xl lg:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-4 group-hover:underline underline-offset-2">
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] py-5">
                    <div className="px-[30px] flex items-center justify-between ">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki">
                            Read More
                          </span>
                        </span>
                      </div>
                      <span className="">
                        <BsArrowRight
                          className="text-gray dark:text-lightGray group-hover:text-khaki"
                          size={"24px"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* blog two */}
            <SwiperSlide>
              <div className="overflow-x-hidden 3xl:w-[410px] group">
                <div className="relative">
                  <img
                    src="/images/home-1/blog-2.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd]">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6">
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        Interior
                      </p>
                    </div>
                    <Link to="#">
                      <h2 className="text-xl lg:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-4 group-hover:underline underline-offset-2">
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] py-5">
                    <div className="px-[30px] flex items-center justify-between ">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki">
                            Read More
                          </span>
                        </span>
                      </div>
                      <span className="">
                        <BsArrowRight
                          className="text-gray dark:text-lightGray group-hover:text-khaki"
                          size={"24px"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* blog three */}
            <SwiperSlide>
              <div className="overflow-x-hidden 3xl:w-[410px] group">
                <div className="relative">
                  <img
                    src="/images/home-1/blog-3.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd]">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6">
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        Interior
                      </p>
                    </div>
                    <Link to="#">
                      <h2 className="text-xl lg:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-4 group-hover:underline underline-offset-2">
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] py-5">
                    <div className="px-[30px] flex items-center justify-between ">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki">
                            Read More
                          </span>
                        </span>
                      </div>
                      <span className="">
                        <BsArrowRight
                          className="text-gray dark:text-lightGray group-hover:text-khaki"
                          size={"24px"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* blog four */}
            <SwiperSlide>
              <div className="overflow-x-hidden 3xl:w-[410px] group">
                <div className="relative">
                  <img
                    src="/images/home-1/blog-1.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd]">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6">
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm lg:text-base leading-[26px] text-gray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        Interior
                      </p>
                    </div>
                    <Link to="#">
                      <h2 className="text-xl lg:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-4 group-hover:underline underline-offset-2">
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] py-5">
                    <div className="px-[30px] flex items-center justify-between ">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki">
                            Read More
                          </span>
                        </span>
                      </div>
                      <span className="">
                        <BsArrowRight
                          className="text-gray group-hover:text-khaki"
                          size={"24px"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* blog five */}
            <SwiperSlide>
              <div className="overflow-x-hidden 3xl:w-[410px] group">
                <div className="relative">
                  <img
                    src="/images/home-1/blog-2.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd]">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6">
                      <p className="text-sm lg:text-base leading-[26px] text-gray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm lg:text-base leading-[26px] text-gray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        Interior
                      </p>
                    </div>
                    <Link to="#">
                      <h2 className="text-xl lg:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-4 group-hover:underline underline-offset-2">
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] py-5">
                    <div className="px-[30px] flex items-center justify-between ">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki">
                            Read More
                          </span>
                        </span>
                      </div>
                      <span className="">
                        <BsArrowRight
                          className="text-gray group-hover:text-khaki"
                          size={"24px"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* blog six */}
            <SwiperSlide>
              <div className="overflow-x-hidden 3xl:w-[410px] group">
                <div className="relative">
                  <img
                    src="/images/home-1/blog-3.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd]">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6">
                      <p className="text-sm lg:text-base leading-[26px] text-gray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm lg:text-base leading-[26px] text-gray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] before:top-[9px]">
                        Interior
                      </p>
                    </div>
                    <Link to="#">
                      <h2 className="text-xl lg:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack py-4 group-hover:underline underline-offset-2">
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] py-5">
                    <div className="px-[30px] flex items-center justify-between ">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack font-medium group-hover:text-khaki">
                            Read More
                          </span>
                        </span>
                      </div>
                      <span className="">
                        <BsArrowRight
                          className="text-gray group-hover:text-khaki"
                          size={"24px"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default LatestBlog;
