import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "../../Components4/Testimonial/testimonials.css";
import "keen-slider/keen-slider.min.css";

const LatestBlog = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:1000px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="dark:bg-normalBlack">
      <section className="Container py-20 lg:py-[120px]">
        {/* Section Header */}
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
        <div className="relative">
          <div className="mt-14 2xl:mt-[60px] keen-slider" ref={sliderRef}>
            {/* slide - 1 */}
            <div className="keen-slider__slide number-slide1 ">
              {/* card one */}
              <div className="overflow-hidden 3xl:w-[410px] group">
                <div className="relative">
                  <img
                    src="/images/home-1/blog-1.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd] dark:border-gray border-t-0">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6">
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        Interior
                      </p>
                    </div>
                    <Link to="#">
                      <h2 className="text-xl lg:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-4 hover:underline underline-offset-2">
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] dark:border-gray  py-5">
                    <div className="px-[30px] flex items-center justify-between ">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
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
            </div>
            {/* slide - 2 */}
            <div className="keen-slider__slide number-slide1 ">
              <div className="overflow-hidden 3xl:w-[410px] group">
                <div className="relative">
                  <img
                    src="/images/home-1/blog-2.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd] dark:border-gray border-t-0">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6">
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        Interior
                      </p>
                    </div>
                    <Link to="#">
                      <h2 className="text-xl lg:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-4 hover:underline underline-offset-2">
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] dark:border-gray  py-5">
                    <div className="px-[30px] flex items-center justify-between ">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
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
            </div>
            {/* slide - 3 */}
            <div className="keen-slider__slide number-slide1 ">
              <div className="overflow-hidden 3xl:w-[410px] group">
                <div className="relative">
                  <img
                    src="/images/home-1/blog-3.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd] dark:border-gray border-t-0">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6">
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        Interior
                      </p>
                    </div>
                    <Link to="#">
                      <h2 className="text-xl lg:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-4 hover:underline underline-offset-2">
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] dark:border-gray  py-5">
                    <div className="px-[30px] flex items-center justify-between ">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestBlog;
