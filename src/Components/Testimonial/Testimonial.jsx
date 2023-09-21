// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    620: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  };
  return (
    <section className="bg-[url('/images/home-1/testi-bg.jpg')] bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center justify-center">
      <div className="Container py-[120px]">
        {/* section title */}
        <div className="text-center 2xl:px-[335px] mx-auto px-5">
          <img
            src="/images/home-1/section-shape1.png"
            alt="room_section_logo"
            className="w-[50px] h-[50px] mx-auto"
          />
          <h1 className="text-[38px] leading-[52px] text-white mt-[30px] mb-[24px] font-Garamond font-semibold uppercase">
            Ustomer’s TestimonialL
          </h1>
          <p className="font-Lora leading-[26px] text-lightGray font-normal text-base">
            Proactively morph optimal infomediaries rather than accurate
            expertise. Intrinsicly progressive resources rather than
            resource-leveling
          </p>
        </div>
        {/* testimonial */}
        <div className="pt-[60px]">
          {/* Slider */}

          <Swiper
            breakpoints={breakpoints}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            {/* testimonials - 1 */}
            <SwiperSlide>
              <div className="py-[10px] pt-10">
                <div className="bg-white p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 ">
                  {/* quote icon */}
                  <img
                    src="/images/home-1/testi-quote.png"
                    alt=""
                    className="absolute right-10 -top-8"
                  />

                  {/* rating icon */}
                  <ul className="flex items-center text-khaki space-x-[4px]">
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                  </ul>
                  <p className="font-Lora leading-[26px] text-gray font-normal text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                    “Professionally repurpose flexible testing procedures via
                    molla in customer service. Dynamically reconceptualize
                    value-added the systems before manufactured products.
                    Enthusiastically envisioneer emerging best”
                  </p>
                  <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                  <div className="flex items-center space-x-6 ">
                    <img
                      src="/images/home-1/call-do-action-img.png"
                      className="w-[65px] h-[65px]"
                      alt=""
                    />

                    <div className="">
                      <h4 className="text-[22px] leading-[26px] text-lightBlack font-semibold font-Garamond">
                        John D. Alexon
                      </h4>
                      <p className="pt-1 text-base leading-[26px] font-normal text-gray flex items-center">
                        <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                        Manger
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* testimonials - 2 */}
            <SwiperSlide>
              <div className="py-[10px] pt-10">
                <div className="bg-white p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 ">
                  {/* quote icon */}
                  <img
                    src="/images/home-1/testi-quote.png"
                    alt=""
                    className="absolute right-10 -top-8"
                  />

                  {/* rating icon */}
                  <ul className="flex items-center text-khaki space-x-[4px]">
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                  </ul>
                  <p className="font-Lora leading-[26px] text-lightGray font-normal text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                    “Professionally repurpose flexible testing procedures via
                    molla in customer service. Dynamically reconceptualize
                    value-added the systems before manufactured products.
                    Enthusiastically envisioneer emerging best”
                  </p>
                  <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                  <div className="flex items-center space-x-6 ">
                    <img
                      src="/images/home-1/call-do-action-img.png"
                      className="w-[65px] h-[65px]"
                      alt=""
                    />

                    <div className="">
                      <h4 className="text-[22px] leading-[26px] text-lightBlack font-semibold font-Garamond">
                        John D. Alexon
                      </h4>
                      <p className="pt-1 text-base leading-[26px] font-normal text-gray flex items-center">
                        <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                        Manger
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* testimonials - 3 */}
            <SwiperSlide>
              <div className="py-[10px] pt-10">
                <div className="bg-white p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 ">
                  {/* quote icon */}
                  <img
                    src="/images/home-1/testi-quote.png"
                    alt=""
                    className="absolute right-10 -top-8"
                  />

                  {/* rating icon */}
                  <ul className="flex items-center text-khaki space-x-[4px]">
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                  </ul>
                  <p className="font-Lora leading-[26px] text-lightGray font-normal text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                    “Professionally repurpose flexible testing procedures via
                    molla in customer service. Dynamically reconceptualize
                    value-added the systems before manufactured products.
                    Enthusiastically envisioneer emerging best”
                  </p>
                  <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                  <div className="flex items-center space-x-6 ">
                    <img
                      src="/images/home-1/call-do-action-img.png"
                      className="w-[65px] h-[65px]"
                      alt=""
                    />

                    <div className="">
                      <h4 className="text-[22px] leading-[26px] text-lightBlack font-semibold font-Garamond">
                        John D. Alexon
                      </h4>
                      <p className="pt-1 text-base leading-[26px] font-normal text-gray flex items-center">
                        <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                        Manger
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* testimonials - 4 */}
            <SwiperSlide>
              <div className="py-[10px] pt-10">
                <div className="bg-white p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 ">
                  {/* quote icon */}
                  <img
                    src="/images/home-1/testi-quote.png"
                    alt=""
                    className="absolute right-10 -top-8"
                  />

                  {/* rating icon */}
                  <ul className="flex items-center text-khaki space-x-[4px]">
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                  </ul>
                  <p className="font-Lora leading-[26px] text-lightGray font-normal text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                    “Professionally repurpose flexible testing procedures via
                    molla in customer service. Dynamically reconceptualize
                    value-added the systems before manufactured products.
                    Enthusiastically envisioneer emerging best”
                  </p>
                  <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                  <div className="flex items-center space-x-6 ">
                    <img
                      src="/images/home-1/call-do-action-img.png"
                      className="w-[65px] h-[65px]"
                      alt=""
                    />

                    <div className="">
                      <h4 className="text-[22px] leading-[26px] text-lightBlack font-semibold font-Garamond">
                        John D. Alexon
                      </h4>
                      <p className="pt-1 text-base leading-[26px] font-normal text-gray flex items-center">
                        <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                        Manger
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* testimonials - 5 */}
            <SwiperSlide>
              <div className="py-[10px] pt-10">
                <div className="bg-white p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 ">
                  {/* quote icon */}
                  <img
                    src="/images/home-1/testi-quote.png"
                    alt=""
                    className="absolute right-10 -top-8"
                  />

                  {/* rating icon */}
                  <ul className="flex items-center text-khaki space-x-[4px]">
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                  </ul>
                  <p className="font-Lora leading-[26px] text-lightGray font-normal text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                    “Professionally repurpose flexible testing procedures via
                    molla in customer service. Dynamically reconceptualize
                    value-added the systems before manufactured products.
                    Enthusiastically envisioneer emerging best”
                  </p>
                  <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                  <div className="flex items-center space-x-6 ">
                    <img
                      src="/images/home-1/call-do-action-img.png"
                      className="w-[65px] h-[65px]"
                      alt=""
                    />

                    <div className="">
                      <h4 className="text-[22px] leading-[26px] text-lightBlack font-semibold font-Garamond">
                        John D. Alexon
                      </h4>
                      <p className="pt-1 text-base leading-[26px] font-normal text-gray flex items-center">
                        <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                        Manger
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* testimonials - 6 */}
            <SwiperSlide>
              <div className="py-[10px] pt-10">
                <div className="bg-white p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 ">
                  {/* quote icon */}
                  <img
                    src="/images/home-1/testi-quote.png"
                    alt=""
                    className="absolute right-10 -top-8"
                  />

                  {/* rating icon */}
                  <ul className="flex items-center text-khaki space-x-[4px]">
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                    <li>
                      <FaStar size={"16px"} />
                    </li>
                  </ul>
                  <p className="font-Lora leading-[26px] text-lightGray font-normal text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                    “Professionally repurpose flexible testing procedures via
                    molla in customer service. Dynamically reconceptualize
                    value-added the systems before manufactured products.
                    Enthusiastically envisioneer emerging best”
                  </p>
                  <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                  <div className="flex items-center space-x-6 ">
                    <img
                      src="/images/home-1/call-do-action-img.png"
                      className="w-[65px] h-[65px]"
                      alt=""
                    />

                    <div className="">
                      <h4 className="text-[22px] leading-[26px] text-lightBlack font-semibold font-Garamond">
                        John D. Alexon
                      </h4>
                      <p className="pt-1 text-base leading-[26px] font-normal text-gray flex items-center">
                        <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                        Manger
                      </p>
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

export default Testimonial;
