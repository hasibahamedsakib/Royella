import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { LiaCalendarCheckSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blog, setBlog] = useState(false);
  return (
    <>
      <section className="dark:bg-lightBlack py-20 2xl:py-[120px] pb-10 ">
        <div className="Container">
          {/* Section  Header */}
          <div className="flex items-start justify-between ">
            <div className="md:w-[450px] font-Garamond">
              <div className="flex items-center mb-5 ">
                <div className="relative mr-[10px]">
                  <hr className="w-10 h-[2px] bg-khaki text-khaki" />
                  <span className="w-[8px] h-[8px] bg-khaki rounded-full absolute -top-[3px] left-0 animation-move"></span>
                </div>
                <p className="text-sm font-medium font-Lora leading-[26px] text-khaki">
                  RECENT BLOGS
                </p>
              </div>
              <h1 className="text-xl sm:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
                We’re Here To Share Story From Latest News
              </h1>
            </div>

            <button className="btn-primary" onClick={() => setBlog(!blog)}>
              All Publications
            </button>
          </div>

          {/* section Container */}
          <div className="mt-14 2xl:mt-[60px]">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {blog ? (
                <>
                  {/* Blog One */}
                  <div className="dark:bg-normalBlack shadow-custom dark:shadow-md dark:hover:shadow-custom transition-all duration-300 group overflow-hidden">
                    <img
                      src="/images/home-5/blog-1.jpg"
                      className="group-hover:scale-x-105 transition-all duration-300 w-full  overflow-hidden"
                      alt=""
                    />
                    <div className=" pt-[30px]">
                      <div className="px-[30px]">
                        <div className="flex items-center">
                          <LiaCalendarCheckSolid
                            size={16}
                            className="text-khaki"
                          />
                          <p className="text-sm sm:text-base leading-7 lg:leading-10 2xl:leading-[55px] text-gray dark:text-lightGray font-normal font-Lora ml-[10px]">
                            August 29, 2023
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-[28px] leading-7 md:leading-8 lg:leading-[34px] text-[#012549] dark:text-whiteSmoke font-bold font-Garamond mb-[19px] hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                          A Guide to Travel Insurance For The Elderly...
                        </h3>
                      </div>
                      <hr className="dark:bg-gray bg-lightGray text-lightGray dark:text-gray" />
                      <div className="px-[30px] flex items-center justify-between py-5">
                        <div className="flex items-center">
                          <span className="w-[25px] h-[25px] bg-khaki grid items-center justify-center rounded-full">
                            <FaRegUserCircle size={16} className="text-white" />
                          </span>
                          <p className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px]">
                            Alex Collins
                          </p>
                        </div>
                        <div className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px] ">
                          <Link
                            to="#"
                            className="flex items-center hover:text-khaki"
                          >
                            Learn More{" "}
                            <AiOutlineArrowRight
                              size={15}
                              className="ml-[10px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog two */}
                  <div className="dark:bg-normalBlack shadow-custom dark:shadow-md dark:hover:shadow-custom transition-all duration-300 group overflow-hidden">
                    <img
                      src="/images/home-5/blog-2.jpg"
                      className="group-hover:scale-x-105 transition-all duration-300 w-full  overflow-hidden"
                      alt=""
                    />
                    <div className=" pt-[30px]">
                      <div className="px-[30px]">
                        <div className="flex items-center">
                          <LiaCalendarCheckSolid
                            size={16}
                            className="text-khaki"
                          />
                          <p className="text-sm sm:text-base leading-7 lg:leading-10 2xl:leading-[55px] text-gray dark:text-lightGray font-normal font-Lora ml-[10px]">
                            August 29, 2023
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-[28px] leading-7 md:leading-8 lg:leading-[34px] text-[#012549] dark:text-whiteSmoke font-bold font-Garamond mb-[19px] hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                          We Ensure Delivery of The Project Within...
                        </h3>
                      </div>
                      <hr className="dark:bg-gray bg-lightGray text-lightGray dark:text-gray" />
                      <div className="px-[30px] flex items-center justify-between py-5">
                        <div className="flex items-center">
                          <span className="w-[25px] h-[25px] bg-khaki grid items-center justify-center rounded-full">
                            <FaRegUserCircle size={16} className="text-white" />
                          </span>
                          <p className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px]">
                            Alex Collins
                          </p>
                        </div>
                        <div className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px] ">
                          <Link
                            to="#"
                            className="flex items-center hover:text-khaki"
                          >
                            Learn More{" "}
                            <AiOutlineArrowRight
                              size={15}
                              className="ml-[10px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog three */}
                  <div className="dark:bg-normalBlack shadow-custom dark:shadow-md dark:hover:shadow-custom transition-all duration-300 group overflow-hidden">
                    <img
                      src="/images/home-5/blog-3.jpg"
                      className="group-hover:scale-x-105 transition-all duration-300 w-full  "
                      alt=""
                    />
                    <div className=" pt-[30px]">
                      <div className="px-[30px]">
                        <div className="flex items-center">
                          <LiaCalendarCheckSolid
                            size={16}
                            className="text-khaki"
                          />
                          <p className="text-sm sm:text-base leading-7 lg:leading-10 2xl:leading-[55px] text-gray dark:text-lightGray font-normal font-Lora ml-[10px]">
                            August 29, 2023
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-[28px] leading-7 md:leading-8 lg:leading-[34px] text-[#012549] dark:text-whiteSmoke font-bold font-Garamond mb-[19px] hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                          We Source The Best Materials From Reputable..
                        </h3>
                      </div>
                      <hr className="dark:bg-gray bg-lightGray text-lightGray dark:text-gray" />
                      <div className="px-[30px] flex items-center justify-between py-5">
                        <div className="flex items-center">
                          <span className="w-[25px] h-[25px] bg-khaki grid items-center justify-center rounded-full">
                            <FaRegUserCircle size={16} className="text-white" />
                          </span>
                          <p className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px]">
                            Alex Collins
                          </p>
                        </div>
                        <div className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px] ">
                          <Link
                            to="#"
                            className="flex items-center hover:text-khaki"
                          >
                            Learn More{" "}
                            <AiOutlineArrowRight
                              size={15}
                              className="ml-[10px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* blog one */}
                  <div className="dark:bg-normalBlack shadow-custom dark:shadow-md dark:hover:shadow-custom transition-all duration-300 group overflow-hidden">
                    <img
                      src="/images/home-5/blog-5.jpg"
                      className="group-hover:scale-x-105 transition-all duration-300 w-full  overflow-hidden"
                      alt=""
                    />
                    <div className=" pt-[30px]">
                      <div className="px-[30px]">
                        <div className="flex items-center">
                          <LiaCalendarCheckSolid
                            size={16}
                            className="text-khaki"
                          />
                          <p className="text-sm sm:text-base leading-7 lg:leading-10 2xl:leading-[55px] text-gray dark:text-lightGray font-normal font-Lora ml-[10px]">
                            August 29, 2023
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-[28px] leading-7 md:leading-8 lg:leading-[34px] text-[#012549] dark:text-whiteSmoke font-bold font-Garamond mb-[19px] hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                          A Guide to Travel Insurance For The Elderly...
                        </h3>
                      </div>
                      <hr className="dark:bg-gray bg-lightGray text-lightGray dark:text-gray" />
                      <div className="px-[30px] flex items-center justify-between py-5">
                        <div className="flex items-center">
                          <span className="w-[25px] h-[25px] bg-khaki grid items-center justify-center rounded-full">
                            <FaRegUserCircle size={16} className="text-white" />
                          </span>
                          <p className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px]">
                            Alex Collins
                          </p>
                        </div>
                        <div className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px] ">
                          <Link
                            to="#"
                            className="flex items-center hover:text-khaki"
                          >
                            Learn More{" "}
                            <AiOutlineArrowRight
                              size={15}
                              className="ml-[10px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog two */}
                  <div className="dark:bg-normalBlack shadow-custom dark:shadow-md dark:hover:shadow-custom transition-all duration-300 group overflow-hidden">
                    <img
                      src="/images/home-5/blog-2.jpg"
                      className="group-hover:scale-x-105 transition-all duration-300 w-full  overflow-hidden"
                      alt=""
                    />
                    <div className=" pt-[30px]">
                      <div className="px-[30px]">
                        <div className="flex items-center">
                          <LiaCalendarCheckSolid
                            size={16}
                            className="text-khaki"
                          />
                          <p className="text-sm sm:text-base leading-7 lg:leading-10 2xl:leading-[55px] text-gray dark:text-lightGray font-normal font-Lora ml-[10px]">
                            August 29, 2023
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-[28px] leading-7 md:leading-8 lg:leading-[34px] text-[#012549] dark:text-whiteSmoke font-bold font-Garamond mb-[19px] hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                          We Ensure Delivery of The Project Within...
                        </h3>
                      </div>
                      <hr className="dark:bg-gray bg-lightGray text-lightGray dark:text-gray" />
                      <div className="px-[30px] flex items-center justify-between py-5">
                        <div className="flex items-center">
                          <span className="w-[25px] h-[25px] bg-khaki grid items-center justify-center rounded-full">
                            <FaRegUserCircle size={16} className="text-white" />
                          </span>
                          <p className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px]">
                            Alex Collins
                          </p>
                        </div>
                        <div className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px] ">
                          <Link
                            to="#"
                            className="flex items-center hover:text-khaki"
                          >
                            Learn More{" "}
                            <AiOutlineArrowRight
                              size={15}
                              className="ml-[10px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog three */}
                  <div className="dark:bg-normalBlack shadow-custom dark:shadow-md dark:hover:shadow-custom transition-all duration-300 group overflow-hidden">
                    <img
                      src="/images/home-5/blog-3.jpg"
                      className="group-hover:scale-x-105 transition-all duration-300 w-full  "
                      alt=""
                    />
                    <div className=" pt-[30px]">
                      <div className="px-[30px]">
                        <div className="flex items-center">
                          <LiaCalendarCheckSolid
                            size={16}
                            className="text-khaki"
                          />
                          <p className="text-sm sm:text-base leading-7 lg:leading-10 2xl:leading-[55px] text-gray dark:text-lightGray font-normal font-Lora ml-[10px]">
                            August 29, 2023
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-[28px] leading-7 md:leading-8 lg:leading-[34px] text-[#012549] dark:text-whiteSmoke font-bold font-Garamond mb-[19px] hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                          We Source The Best Materials From Reputable..
                        </h3>
                      </div>
                      <hr className="dark:bg-gray bg-lightGray text-lightGray dark:text-gray" />
                      <div className="px-[30px] flex items-center justify-between py-5">
                        <div className="flex items-center">
                          <span className="w-[25px] h-[25px] bg-khaki grid items-center justify-center rounded-full">
                            <FaRegUserCircle size={16} className="text-white" />
                          </span>
                          <p className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px]">
                            Alex Collins
                          </p>
                        </div>
                        <div className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px] ">
                          <Link
                            to="#"
                            className="flex items-center hover:text-khaki"
                          >
                            Learn More{" "}
                            <AiOutlineArrowRight
                              size={15}
                              className="ml-[10px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="dark:bg-normalBlack shadow-custom dark:shadow-md dark:hover:shadow-custom transition-all duration-300 group overflow-hidden">
                    <img
                      src="/images/home-5/blog-1.jpg"
                      className="group-hover:scale-x-105 transition-all duration-300 w-full  overflow-hidden"
                      alt=""
                    />
                    <div className=" pt-[30px]">
                      <div className="px-[30px]">
                        <div className="flex items-center">
                          <LiaCalendarCheckSolid
                            size={16}
                            className="text-khaki"
                          />
                          <p className="text-sm sm:text-base leading-7 lg:leading-10 2xl:leading-[55px] text-gray dark:text-lightGray font-normal font-Lora ml-[10px]">
                            August 29, 2023
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-[28px] leading-7 md:leading-8 lg:leading-[34px] text-[#012549] dark:text-whiteSmoke font-bold font-Garamond mb-[19px] hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                          A Guide to Travel Insurance For The Elderly...
                        </h3>
                      </div>
                      <hr className="dark:bg-gray bg-lightGray text-lightGray dark:text-gray" />
                      <div className="px-[30px] flex items-center justify-between py-5">
                        <div className="flex items-center">
                          <span className="w-[25px] h-[25px] bg-khaki grid items-center justify-center rounded-full">
                            <FaRegUserCircle size={16} className="text-white" />
                          </span>
                          <p className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px]">
                            Alex Collins
                          </p>
                        </div>
                        <div className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px] ">
                          <Link
                            to="#"
                            className="flex items-center hover:text-khaki"
                          >
                            Learn More{" "}
                            <AiOutlineArrowRight
                              size={15}
                              className="ml-[10px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog two */}
                  <div className="dark:bg-normalBlack shadow-custom dark:shadow-md dark:hover:shadow-custom transition-all duration-300 group overflow-hidden">
                    <img
                      src="/images/home-5/blog-2.jpg"
                      className="group-hover:scale-x-105 transition-all duration-300 w-full  overflow-hidden"
                      alt=""
                    />
                    <div className=" pt-[30px]">
                      <div className="px-[30px]">
                        <div className="flex items-center">
                          <LiaCalendarCheckSolid
                            size={16}
                            className="text-khaki"
                          />
                          <p className="text-sm sm:text-base leading-7 lg:leading-10 2xl:leading-[55px] text-gray dark:text-lightGray font-normal font-Lora ml-[10px]">
                            August 29, 2023
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-[28px] leading-7 md:leading-8 lg:leading-[34px] text-[#012549] dark:text-whiteSmoke font-bold font-Garamond mb-[19px] hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                          We Ensure Delivery of The Project Within...
                        </h3>
                      </div>
                      <hr className="dark:bg-gray bg-lightGray text-lightGray dark:text-gray" />
                      <div className="px-[30px] flex items-center justify-between py-5">
                        <div className="flex items-center">
                          <span className="w-[25px] h-[25px] bg-khaki grid items-center justify-center rounded-full">
                            <FaRegUserCircle size={16} className="text-white" />
                          </span>
                          <p className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px]">
                            Alex Collins
                          </p>
                        </div>
                        <div className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px] ">
                          <Link
                            to="#"
                            className="flex items-center hover:text-khaki"
                          >
                            Learn More{" "}
                            <AiOutlineArrowRight
                              size={15}
                              className="ml-[10px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blog three */}
                  <div className="dark:bg-normalBlack shadow-custom dark:shadow-md dark:hover:shadow-custom transition-all duration-300 group overflow-hidden">
                    <img
                      src="/images/home-5/blog-3.jpg"
                      className="group-hover:scale-x-105 transition-all duration-300 w-full  "
                      alt=""
                    />
                    <div className=" pt-[30px]">
                      <div className="px-[30px]">
                        <div className="flex items-center">
                          <LiaCalendarCheckSolid
                            size={16}
                            className="text-khaki"
                          />
                          <p className="text-sm sm:text-base leading-7 lg:leading-10 2xl:leading-[55px] text-gray dark:text-lightGray font-normal font-Lora ml-[10px]">
                            August 29, 2023
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-[28px] leading-7 md:leading-8 lg:leading-[34px] text-[#012549] dark:text-whiteSmoke font-bold font-Garamond mb-[19px] hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                          We Source The Best Materials From Reputable..
                        </h3>
                      </div>
                      <hr className="dark:bg-gray bg-lightGray text-lightGray dark:text-gray" />
                      <div className="px-[30px] flex items-center justify-between py-5">
                        <div className="flex items-center">
                          <span className="w-[25px] h-[25px] bg-khaki grid items-center justify-center rounded-full">
                            <FaRegUserCircle size={16} className="text-white" />
                          </span>
                          <p className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px]">
                            Alex Collins
                          </p>
                        </div>
                        <div className="text-sm sm:text-base text-[#012549] dark:text-lightGray font-semibold font-Lora ml-[8px] leading-[26px] ">
                          <Link
                            to="#"
                            className="flex items-center hover:text-khaki"
                          >
                            Learn More{" "}
                            <AiOutlineArrowRight
                              size={15}
                              className="ml-[10px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* subscriber form */}
      <div className="dark:bg-lightBlack">
        <section className="subContainer bg-khaki flex flex-col md:flex-row items-center justify-center md:justify-between py-5 md:py-10 lg:py-12 xl:py-14 2xl:py-16 3xl:py-[72px] px-5 md:px-8 lg:px-10 2xl:px-20 relative -mb-[80px] z-[1]">
          <div className="font-Garamond text-center md:text-left lg:pr-10 xl:pr-[4.5rem] 2xl:pr-[146px]">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-[38px] font-bold leading-7 md:leading-9 lg:leading-10 xl:leading-[46px] text-white ">
              Sign Up for Our Newsletter For Daily Update
            </h2>
          </div>
          <div className="flex items-center  mt-4 md:mt-0 2xl:relative">
            <input
              type="email"
              className="inline-block lg:px-[26px] py-2 sm:py-4 md:py-[22px] border-khaki outline-khaki text-base xl:text-[17px] text-gray font-Lora font-normal placeholder:text-gray focus:outline-transparent focus:border-white
                  focus:ring-transparent w-[200px] sm:w-[280px] xl:w-[300px] 2xl:w-[550px]  flex-initial "
              placeholder="Enter Your Email"
            />
            <button className="bg-khaki text-white text-base font-medium  font-Garamond px-2 sm:px-5 lg:px-10 py-2 sm:py-4 md:py-[22px] border border-white 2xl:absolute 2xl:right-1 top-1 bottom-1   ">
              SUBSCRIBE{" "}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
