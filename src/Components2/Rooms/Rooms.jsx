import { Pagination } from "swiper/modules";
import "./rooms.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Rooms = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <section className="py-20 2xl:py-[120px] bg-whiteSmoke dark:bg-normalBlack">
      <div className="Container">
        {/* section heading */}
        <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[280px] font-Garamond">
          <h4 className="text-base lg:text-lg font-medium text-khaki leading-[28px]">
            OUR ROOMS
          </h4>
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white mt-[23px] mb-[12px] font-bold">
            A Gander At Our Rooms
          </h1>
          <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base">
            A wonderful serenity has taken possession of my entire soul, like
            these royella dolor consectetur adipiscing elit dos eiusmod tempor
            incididunt resort sweet spring
          </p>
        </div>
        {/* section content */}
        <div className="mt-14 2xl:mt-[60px] ">
          <Swiper
            breakpoints={breakpoints}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mySwiper3 mySwiper5"
          >
            {/* Rome one */}
            <SwiperSlide>
              <div className="relative pt-10">
                <img
                  src="/images/home-2/box-shape.png"
                  alt=""
                  className="sm:h-[520px] h-[550px] md:h-[580px] xl:h-[600px] 2xl:h-[655px] "
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] md:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/home-2/room-1.jpg "
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">Deluxe room</h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-3">
                        Ocean view
                      </p>
                    </div>
                    <div className="mt-[25px] ">
                      <ul className="font-Lora">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray mt-[25px]">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-[25px]">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Rome two */}
            <SwiperSlide>
              <div className="lg:relative  pt-10 xsm:pb-12 sm:pb-16 md:pb-0">
                <img
                  src="/images/home-2/box-shape.png"
                  alt=""
                  className="z-[-1]  sm:h-[520px] h-[550px] md:h-[580px] xl:h-[600px] 2xl:h-[655px] "
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] md:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/home-2/room-2.jpg "
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">
                        Standard Room
                      </h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-3">
                        Ocean view
                      </p>
                    </div>
                    <div className="mt-[25px] ">
                      <ul className="font-Lora">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray mt-[25px]">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-[25px]">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Rome three */}
            <SwiperSlide>
              <div className="lg:relative  pt-10 xsm:pb-12 sm:pb-16 md:pb-0">
                <img
                  src="/images/home-2/box-shape.png"
                  alt=""
                  className="z-[-1] sm:h-[520px] h-[550px] md:h-[580px] xl:h-[600px] 2xl:h-[655px] "
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] md:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/home-2/room-3.jpg "
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">Classic Room</h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-3">
                        Ocean view
                      </p>
                    </div>
                    <div className="mt-[25px] ">
                      <ul className="font-Lora">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray mt-[25px]">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-[25px]">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Rome four */}
            <SwiperSlide>
              <div className="lg:relative  pt-10 xsm:pb-12 sm:pb-16 md:pb-0">
                <img
                  src="/images/home-2/box-shape.png"
                  alt=""
                  className="z-[-1] sm:h-[520px] h-[550px] md:h-[580px] xl:h-[600px] 2xl:h-[655px] "
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] md:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/home-2/room-1.jpg "
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">Double Room</h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-3">
                        Ocean view
                      </p>
                    </div>
                    <div className="mt-[25px] ">
                      <ul className="font-Lora">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray mt-[25px]">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-[25px]">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Rome five */}
            <SwiperSlide>
              <div className="lg:relative  pt-10 xsm:pb-12 sm:pb-16 md:pb-0">
                <img
                  src="/images/home-2/box-shape.png"
                  alt=""
                  className="z-[-1] sm:h-[520px] h-[550px] md:h-[580px] xl:h-[600px] 2xl:h-[655px] "
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] md:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/home-2/room-2.jpg "
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">Deluxe room</h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-3">
                        Ocean view
                      </p>
                    </div>
                    <div className="mt-[25px] ">
                      <ul className="font-Lora">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-gray text-gray dark:text-lightGray mt-[25px]">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-[25px]">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
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

export default Rooms;
