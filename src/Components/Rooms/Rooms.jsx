import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules

const Rooms = () => {
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
    <section className="2xl:h-[950px] bg-white dark:mediumBlack mt-[-35px] mb-10">
      <div className="bg-[#f8f6f3] dark:bg-lightBlack  w-full h-[758px]">
        <div className="Container pt-[170px] pb-20 ">
          <div className="bg-[url('/images/home-1/section-shape2.png')] bg-no-repeat bg-center bg-opacity-[0.07] text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]  mx-auto  px-5">
            <img
              src="/images/home-1/section-shape1.png"
              alt="room_section_logo"
              className="w-[50px] h-[50px] mx-auto"
            />
            <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[30px] mb-[24px] font-Garamond font-semibold uppercase">
              Royella’s Rooms & Suites
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-base">
              Proactively morph optimal infomediaries rather than accurate
              expertise. Intrinsicly progressive resources rather than
              resource-leveling
            </p>
          </div>
          {/* card Container */}
          <div className="pt-[60px]">
            <Swiper
              breakpoints={breakpoints}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                {/* card one */}
                <div className="overflow-x-hidden 3xl:w-[410px] group">
                  <div className="relative">
                    <img
                      src="/images/home-1/room-1.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div className="">
                      <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300">
                        View Details{" "}
                        <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                      </button>
                    </div>
                  </div>
                  <div className="font-Garamond">
                    <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white absolute top-[10px] right-[10px] ">
                      <span className="">$560</span>
                      <span className="mx-2">|</span>
                      <span>Night</span>
                    </div>

                    <div className=" border-[1px] border-[#ddd]">
                      <div className="py-6 px-[30px]">
                        <h4 className="text-sm leading-[26px] text-khaki">
                          Luxury Room
                        </h4>
                        <Link to="#">
                          <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                            Double Suite Rooms
                          </h2>
                        </Link>
                        <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                          1500 SQ.FT/Rooms
                        </p>
                      </div>
                      <div className="  border-t-[1px] border-[#ddd] py-5">
                        <div className="px-[30px] flex items-center justify-between">
                          <div className="">
                            <span className="font-Lora text-base flex items-center ">
                              <img
                                src="/images/home-1/room-bottom-icon.png"
                                alt=""
                              />
                              <span className="ml-[10px]">2 King Bed</span>
                            </span>
                          </div>
                          <span className="w-[1px] h-[25px] bg-[#ddd]"></span>
                          <ul className="flex items-center text-khaki space-x-[5px]">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* card two */}
                <div className="overflow-x-hidden 3xl:w-[410px] group">
                  <div className="relative">
                    <img
                      src="/images/home-1/room-2.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div className="">
                      <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300">
                        View Details{" "}
                        <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                      </button>
                    </div>
                  </div>
                  <div className="font-Garamond">
                    <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white absolute top-[10px] right-[10px] ">
                      <span className="">$560</span>
                      <span className="mx-2">|</span>
                      <span>Night</span>
                    </div>

                    <div className=" border-[1px] border-[#ddd]">
                      <div className="py-6 px-[30px]">
                        <h4 className="text-sm leading-[26px] text-khaki">
                          Luxury Room
                        </h4>
                        <Link to="#">
                          <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                            Double Suite Rooms
                          </h2>
                        </Link>
                        <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                          1500 SQ.FT/Rooms
                        </p>
                      </div>
                      <div className="  border-t-[1px] border-[#ddd] py-5">
                        <div className="px-[30px] flex items-center justify-between">
                          <div className="">
                            <span className="font-Lora text-base flex items-center ">
                              <img
                                src="/images/home-1/room-bottom-icon.png"
                                alt=""
                              />
                              <span className="ml-[10px]">2 King Bed</span>
                            </span>
                          </div>
                          <span className="w-[1px] h-[25px] bg-[#ddd]"></span>
                          <ul className="flex items-center text-khaki space-x-[5px]">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStarHalfAlt />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* card three */}
                <div className="overflow-x-hidden 3xl:w-[410px] group">
                  <div className="relative">
                    <img
                      src="/images/home-1/room-3.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div className="">
                      <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300">
                        View Details{" "}
                        <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                      </button>
                    </div>
                  </div>
                  <div className="font-Garamond">
                    <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white absolute top-[10px] right-[10px] ">
                      <span className="">$560</span>
                      <span className="mx-2">|</span>
                      <span>Night</span>
                    </div>

                    <div className=" border-[1px] border-[#ddd]">
                      <div className="py-6 px-[30px]">
                        <h4 className="text-sm leading-[26px] text-khaki">
                          Luxury Room
                        </h4>
                        <Link to="#">
                          <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                            Double Suite Rooms
                          </h2>
                        </Link>
                        <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                          1500 SQ.FT/Rooms
                        </p>
                      </div>
                      <div className="  border-t-[1px] border-[#ddd] py-5">
                        <div className="px-[30px] flex items-center justify-between">
                          <div className="">
                            <span className="font-Lora text-base flex items-center ">
                              <img
                                src="/images/home-1/room-bottom-icon.png"
                                alt=""
                              />
                              <span className="ml-[10px]">2 King Bed</span>
                            </span>
                          </div>
                          <span className="w-[1px] h-[25px] bg-[#ddd]"></span>
                          <ul className="flex items-center text-khaki space-x-[5px]">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaRegStar />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* card four */}
                <div className="overflow-x-hidden 3xl:w-[410px] group">
                  <div className="relative">
                    <img
                      src="/images/home-1/room-1.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div className="">
                      <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300">
                        View Details{" "}
                        <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                      </button>
                    </div>
                  </div>
                  <div className="font-Garamond">
                    <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white absolute top-[10px] right-[10px] ">
                      <span className="">$560</span>
                      <span className="mx-2">|</span>
                      <span>Night</span>
                    </div>

                    <div className=" border-[1px] border-[#ddd]">
                      <div className="py-6 px-[30px]">
                        <h4 className="text-sm leading-[26px] text-khaki">
                          Luxury Room
                        </h4>
                        <Link to="#">
                          <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                            Double Suite Rooms
                          </h2>
                        </Link>
                        <p className="text-sm font-normal text-gray dark:text-lightGray font-Lora">
                          1500 SQ.FT/Rooms
                        </p>
                      </div>
                      <div className="  border-t-[1px] border-[#ddd] py-5">
                        <div className="px-[30px] flex items-center justify-between">
                          <div className="">
                            <span className="font-Lora text-base flex items-center ">
                              <img
                                src="/images/home-1/room-bottom-icon.png"
                                alt=""
                              />
                              <span className="ml-[10px]">2 King Bed</span>
                            </span>
                          </div>
                          <span className="w-[1px] h-[25px] bg-[#ddd]"></span>
                          <ul className="flex items-center text-khaki space-x-[5px]">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* card five */}
                <div className="overflow-x-hidden 3xl:w-[410px] group">
                  <div className="relative">
                    <img
                      src="/images/home-1/room-2.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div className="">
                      <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300">
                        View Details{" "}
                        <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                      </button>
                    </div>
                  </div>
                  <div className="font-Garamond">
                    <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white absolute top-[10px] right-[10px] ">
                      <span className="">$560</span>
                      <span className="mx-2">|</span>
                      <span>Night</span>
                    </div>

                    <div className=" border-[1px] border-[#ddd]">
                      <div className="py-6 px-[30px]">
                        <h4 className="text-sm leading-[26px] text-khaki">
                          Luxury Room
                        </h4>
                        <Link to="#">
                          <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                            Double Suite Rooms
                          </h2>
                        </Link>
                        <p className="text-sm font-normal text-gray dark:text-lightGray  font-Lora">
                          1500 SQ.FT/Rooms
                        </p>
                      </div>
                      <div className="  border-t-[1px] border-[#ddd] py-5">
                        <div className="px-[30px] flex items-center justify-between">
                          <div className="">
                            <span className="font-Lora text-base flex items-center ">
                              <img
                                src="/images/home-1/room-bottom-icon.png"
                                alt=""
                              />
                              <span className="ml-[10px]">2 King Bed</span>
                            </span>
                          </div>
                          <span className="w-[1px] h-[25px] bg-[#ddd]"></span>
                          <ul className="flex items-center text-khaki space-x-[5px]">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStarHalfAlt />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* card six */}
                <div className="overflow-x-hidden 3xl:w-[410px] group">
                  <div className="relative">
                    <img
                      src="/images/home-1/room-3.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div className="">
                      <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300">
                        View Details{" "}
                        <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                      </button>
                    </div>
                  </div>
                  <div className="font-Garamond">
                    <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white absolute top-[10px] right-[10px] ">
                      <span className="">$560</span>
                      <span className="mx-2">|</span>
                      <span>Night</span>
                    </div>

                    <div className=" border-[1px] border-[#ddd]">
                      <div className="py-6 px-[30px]">
                        <h4 className="text-sm leading-[26px] text-khaki">
                          Luxury Room
                        </h4>
                        <Link to="#">
                          <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                            Double Suite Rooms
                          </h2>
                        </Link>
                        <p className="text-sm font-normal text-gray dark:text-lightGray  font-Lora">
                          1500 SQ.FT/Rooms
                        </p>
                      </div>
                      <div className="  border-t-[1px] border-[#ddd] py-5">
                        <div className="px-[30px] flex items-center justify-between">
                          <div className="">
                            <span className="font-Lora text-base flex items-center ">
                              <img
                                src="/images/home-1/room-bottom-icon.png"
                                alt=""
                              />
                              <span className="ml-[10px]">2 King Bed</span>
                            </span>
                          </div>
                          <span className="w-[1px] h-[25px] bg-[#ddd]"></span>
                          <ul className="flex items-center text-khaki space-x-[5px]">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaRegStar />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
