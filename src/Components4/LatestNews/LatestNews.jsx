import { BsCalendar4 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <section className="bg-whiteSmoke dark:bg-normalBlack py-20 2xl:py-[120px]">
      <div className="Container">
        {/* section title */}
        <div className="text-center px-5">
          <p className="text-base leading-7 md:leading-10 lg:leading-[40px] 3xl:leading-[66px] text-khaki mb-1 font-normal font-Lora">
            Hoexr Hotel News
          </p>
          <h3
            className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-5 md:leading-7 lg:leading-10  2xl:leading-[45px]
           font-semibold font-Garamond"
          >
            Latest News Update
          </h3>
        </div>

        {/* Section content */}
        <div className="mt-14 2xl:mt-[60px]">
          <div className="grid grid-cols-6 2xl:grid-rows-4 2xl:grid-flow-col  gap-6">
            {/* card - 1 */}
            <div className=" bg-white dark:bg-lightBlack  h-full col-span-6 md:col-span-3 2xl:row-span-4 2xl:col-start-1 2xl:col-end-4 group overflow-hidden">
              <img
                className="group-hover:scale-105 transition-all duration-300"
                src="/images/home-4/blog-1.jpg"
                alt=""
              />
              <div className="px-3 sm:px-7 py-5 md:py-[30px] ">
                <div className="pb-3 flex items-center justify-start ">
                  <div className="flex items-center">
                    <span className="w-7 h-7 md:w-9 md:h-9  grid items-center justify-center">
                      <FiUser size={16} className="text-khaki " />
                    </span>
                    <p className="text-sm md:text-base  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      Admin
                    </p>
                  </div>
                  <div className="flex items-center ml-3 md:ml-5">
                    <span className="w-7 h-7 md:w-9 md:h-9  grid items-center justify-center">
                      <BsCalendar4 size={16} className="text-khaki" />
                    </span>
                    <p className="text-sm md:text-base  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      August 29, 2023
                    </p>
                  </div>
                </div>
                <Link to="#">
                  <h5 className="text-[22px] 2xl:text-3xl mt-3 leading-6  md:leading-7 2xl:leading-[38px] text-lightBlack dark:text-white font-medium font-Garamond hover:text-khaki dark:hover:text-khaki transition-all duration-300 2xl:pr-[100px]">
                    The Best Travel Insurance Companies for Seniors
                  </h5>
                </Link>
                <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-2 lg:pt-5 pb-5 lg:pb-[27px]">
                  Our hotel offers Image for cattle earth. May one Which life
                  divide sea. Commodi soluta minima nemo,…
                </p>
                <button className="btn-primary mb-2 sm:h-[42px] 2xl:h-[49px] ">
                  READ MORE
                </button>
              </div>
            </div>
            {/* card - 2 */}

            <div className=" flex flex-col items-center  2xl:flex-row  bg-white dark:bg-lightBlack col-span-6 md:col-span-3 2xl:row-span-2 2xl:col-start-4 2xl:col-end-7 group overflow-hidden">
              <img
                className="object-cover w-full h-[200px] sm:h-[350px] md:h-[234px] lg:h-[316px] xl:h-[375px] 2xl:h-[358px] md:rounded-none group-hover:scale-105 transition-all duration-300"
                src="/images/home-4/blog-2.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between px-3 sm:px-7 py-5 md:py-[30px] 2xl:py-2 ">
                <div className="pb-3 flex items-center justify-start ">
                  <div className="flex items-center">
                    <span className="w-7 h-7 md:w-9 md:h-9  grid items-center justify-center">
                      <FiUser size={16} className="text-khaki " />
                    </span>
                    <p className="text-sm md:text-base  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      Admin
                    </p>
                  </div>
                  <div className="flex items-center ml-3 md:ml-5">
                    <span className="w-7 h-7 md:w-9 md:h-9  grid items-center justify-center">
                      <BsCalendar4 size={16} className="text-khaki" />
                    </span>
                    <p className="text-sm md:text-base  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      August 29, 2023
                    </p>
                  </div>
                </div>
                <Link to="#">
                  <h5 className="text-[22px] 2xl:text-3xl mt-3 leading-6  md:leading-7 2xl:leading-[38px] text-lightBlack dark:text-white font-medium font-Garamond hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                    How Travel the World & Make a Difference
                  </h5>
                </Link>
                <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-2 lg:pt-5 pb-5 lg:pb-[27px]">
                  Our hotel offers Image for cattle earth. May one Which life
                  divide sea. Commodi soluta minima nemo,…
                </p>
                <button className="btn-primary mb-2 sm:h-[42px] 2xl:h-[49px]">
                  READ MORE
                </button>
              </div>
            </div>

            {/* card - 3 */}

            <div className=" flex flex-col items-center  2xl:flex-row  bg-white dark:bg-lightBlack col-span-6 md:col-span-3 2xl:row-span-2 2xl:col-start-4 2xl:col-end-7 group overflow-hidden">
              <img
                className="object-cover w-full h-[200px] sm:h-[350px] md:h-[234px] lg:h-[316px] xl:h-[375px] 2xl:h-[358px]  md:rounded-none group-hover:scale-105 transition-all duration-300"
                src="/images/home-4/blog-3.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between px-3 sm:px-7 py-5 md:py-[30px] 2xl:py-2 ">
                <div className="pb-3 flex items-center justify-start ">
                  <div className="flex items-center">
                    <span className="w-7 h-7 md:w-9 md:h-9  grid items-center justify-center">
                      <FiUser size={16} className="text-khaki " />
                    </span>
                    <p className="text-sm md:text-base  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      Admin
                    </p>
                  </div>
                  <div className="flex items-center ml-3 md:ml-5">
                    <span className="w-7 h-7 md:w-9 md:h-9  grid items-center justify-center">
                      <BsCalendar4 size={16} className="text-khaki" />
                    </span>
                    <p className="text-sm md:text-base  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      August 29, 2023
                    </p>
                  </div>
                </div>
                <Link to="#">
                  <h5 className="text-[22px] 2xl:text-3xl mt-3 leading-6  md:leading-7 2xl:leading-[38px] text-lightBlack dark:text-white font-medium font-Garamond hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                    Retore Lighting Design In The Hostel
                  </h5>
                </Link>
                <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-2 lg:pt-5 pb-5 lg:pb-[27px]">
                  Our hotel offers Image for cattle earth. May one Which life
                  divide sea. Commodi soluta minima nemo,…
                </p>
                <button className="btn-primary mb-2 sm:h-[42px] 2xl:h-[49px]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
