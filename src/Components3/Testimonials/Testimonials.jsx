// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styls.css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="py-20 2xl:py-[120px] bg-whiteSmoke dark:bg-normalBlack relative">
      <div className="Container">
        {/* section heading */}
        <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[150px] xl:px-[280px] 2xl:px-[350px] font-Garamond">
          <div className="flex items-center mb-[24px] justify-center">
            <img
              src="/images/home-3/shape.png"
              alt=""
              className="dark:hidden"
            />
            <img
              src="/images/home-3/shape-2.png"
              alt=""
              className="hidden dark:block"
            />
            <h5 className="px-5 text-base leading-[26px] lg:leading-[42px] text-gray dark:text-lightGray font-Garamond font-semibold">
              TESTIMONIALS
            </h5>
            <img
              src="/images/home-3/shape.png"
              alt=""
              className="dark:hidden"
            />
            <img
              src="/images/home-3/shape-2.png"
              alt=""
              className="hidden dark:block"
            />
          </div>
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[46px] text-lightBlack dark:text-white mb-[12px] md:mb-6 font-bold">
            What Our Guests Say
          </h1>
          <p className="font-Lora leading-[22px] lg:leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base ">
            We provide seasonal special discounts for selected rooms. Let us
            know the room you are interested and let’s make it happen.
          </p>
        </div>
        {/* section testimonials content */}
        <div className="mt-14 relative">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="/images/home-3/testi-thumb.png"
              className="w-full h-full"
              alt=""
            />

            <div className="md:ml-[50px] lg:ml-[60px] 2xl:ml-[77px] ">
              <div className="">
                <Swiper
                  direction={"vertical"}
                  slidesPerView={1}
                  spaceBetween={30}
                  mousewheel={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Mousewheel, Pagination]}
                  className="mySwiperHome3"
                >
                  <div className="w-full h-full">
                    <SwiperSlide>
                      {" "}
                      <div className="font-Garamond">
                        <h1 className="text-2xl md:text-3xl 2xl:text-[34px] leading-[26px] text-lightBlack dark:text-white mb-[12px]  font-semibold">
                          What Our Guests Say
                        </h1>
                        <p className="font-Lora text-[15px] leading-[26px] text-khaki font-medium uppercase ">
                          Graphic Designer
                        </p>
                        <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal  my-[25px] lg:mt-[38px] lg:mb-[35px]">
                          multimedia based technologies. Dramatically e-enable
                          superior schemas rather backward compatible human
                          capital. Efficiently network world-class customer
                          service and wireless alignments. Quickly exploit
                          functionalized niche markets without e-business
                          collaborations and idea-sharing. Completely fashion
                          open-source manufactured products wcooperativer
                          channels. Efficiently iterate intuitive solutions
                          without customized materials. Seamlesslyti architect
                          market-driven technologies and resource sucking ideas.
                          Uniquely orchestrattop line initiatives for
                          technically sound strategic theme areas.
                          Synergistically synthesize orthogonal imperatives
                          vis-a-vis value.
                        </p>
                        <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                          <FaStar className="text-khaki" size={18} />
                          <FaStar className="text-khaki" size={18} />
                          <FaStar className="text-khaki" size={18} />
                          <FaStar className="text-khaki" size={18} />
                          <FaStar className="text-khaki" size={18} />
                        </span>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="w-full h-full">
                    <SwiperSlide>
                      {" "}
                      <div className="font-Garamond">
                        <h1 className="text-2xl md:text-3xl 2xl:text-[34px] leading-[26px] text-lightBlack dark:text-white mb-[12px]  font-semibold">
                          What Our Guests Say
                        </h1>
                        <p className="font-Lora text-[15px] leading-[26px] text-khaki font-medium uppercase ">
                          Graphic Designer
                        </p>
                        <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal  my-[25px] lg:mt-[38px] lg:mb-[35px]">
                          multimedia based technologies. Dramatically e-enable
                          superior schemas rather backward compatible human
                          capital. Efficiently network world-class customer
                          service and wireless alignments. Quickly exploit
                          functionalized niche markets without e-business
                          collaborations and idea-sharing. Completely fashion
                          open-source manufactured products wcooperativer
                          channels. Efficiently iterate intuitive solutions
                          without customized materials. Seamlesslyti architect
                          market-driven technologies and resource sucking ideas.
                          Uniquely orchestrattop line initiatives for
                          technically sound strategic theme areas.
                          Synergistically synthesize orthogonal imperatives
                          vis-a-vis value.
                        </p>
                        <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                          <FaStar className="text-khaki" size={18} />
                          <FaStar className="text-khaki" size={18} />
                          <FaStar className="text-khaki" size={18} />
                          <FaStar className="text-khaki" size={18} />
                          <FaStar className="text-khaki" size={18} />
                        </span>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
