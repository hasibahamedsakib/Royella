import { FiUser } from "react-icons/fi";
import { BsCalendar4 } from "react-icons/bs";
const Blogs = () => {
  return (
    <div className="lg:relative ">
      {/* Blog Content */}
      <section className="py-20 2xl:pt-[120px] lg:pb-[220px] bg-whiteSmoke dark:bg-normalBlack ">
        <div className="Container">
          {/* section heading */}
          <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[280px] font-Garamond">
            <h4 className="text-base lg:text-lg font-medium text-khaki leading-[28px]">
              OUR BLOG
            </h4>
            <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white mt-[23px] mb-[12px] font-bold">
              Recent News & Articles
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base ">
              A wonderful serenity has taken possession of my entire soul, like
              these royella dolor consectetur adipiscing elit dos eiusmod tempor
              incididunt resort sweet spring
            </p>
          </div>
          {/* section Content */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[30px]">
            {/* Blog - 1  */}
            <div className="group z-[2]">
              <div className="overflow-hidden">
                <img
                  src="/images/home-2/blog-1.jpg"
                  alt=""
                  className="w-full object-cover  group-hover:scale-105 transition-all duration-500 "
                />
              </div>
              <div className="bg-white dark:bg-lightBlack px-[15px] sm:px-[35px] ">
                <div className="py-9 flex items-center justify-between ">
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <FiUser size={14} className="text-khaki " />
                    </span>
                    <p className="ml-3 text-sm  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      Hana Evans
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <BsCalendar4 size={14} className="text-khaki" />
                    </span>
                    <p className="ml-3 text-sm  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      Sep 21-2023
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl lg:text-2xl leading-[32px] text-lightBlack dark:text-white font-bold font-Garamond hover:text-khaki transition-all duration-300">
                    Nine resorts in Bangalore that are worth your attention
                  </h5>
                  <p className="mt-[17px] pb-[33px] text-sm sm:text-base leading-[38px] text-gray dark:text-lightGray font-medium font-Lora text-justify">
                    Status A wonderful serenity taken possesion may entire sould
                    these royela consetetur to royella dos eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            {/* Blog - 2  */}
            <div className="group z-[2]">
              <div className="overflow-hidden">
                <img
                  src="/images/home-2/blog-2.jpg"
                  alt=""
                  className="w-full object-cover  group-hover:scale-105 transition-all duration-500 "
                />
              </div>
              <div className="bg-white dark:bg-lightBlack px-[15px] sm:px-[35px] ">
                <div className="py-9 flex items-center justify-between ">
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <FiUser size={14} className="text-khaki " />
                    </span>
                    <p className="ml-3 text-sm  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      Hana Evans
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <BsCalendar4 size={14} className="text-khaki" />
                    </span>
                    <p className="ml-3 text-sm  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      Sep 21-2023
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl lg:text-2xl leading-[32px] text-lightBlack dark:text-white font-bold font-Garamond hover:text-khaki transition-all duration-300">
                    Nine resorts in Bangalore that are worth your attention
                  </h5>
                  <p className="mt-[17px] pb-[33px] text-sm sm:text-base leading-[38px] text-gray dark:text-lightGray font-medium font-Lora text-justify">
                    Status A wonderful serenity taken possesion may entire sould
                    these royela consetetur to royella dos eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            {/* Blog - 3  */}
            <div className="group z-[2]">
              <div className="overflow-hidden">
                <img
                  src="/images/home-2/blog-3.jpg"
                  alt=""
                  className="w-full object-cover  group-hover:scale-105 transition-all duration-500 "
                />
              </div>
              <div className="bg-white dark:bg-lightBlack px-[15px] sm:px-[35px] ">
                <div className="py-9 flex items-center justify-between ">
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <FiUser size={14} className="text-khaki " />
                    </span>
                    <p className="ml-3 text-sm  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      Hana Evans
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-9 h-9 rounded-full bg-whiteSmoke dark:bg-normalBlack grid items-center justify-center">
                      <BsCalendar4 size={14} className="text-khaki" />
                    </span>
                    <p className="ml-3 text-sm  leading-[38px] text-gray dark:text-lightGray font-medium font-Lora">
                      Sep 21-2023
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl lg:text-2xl leading-[32px] text-lightBlack dark:text-white font-bold font-Garamond hover:text-khaki transition-all duration-300">
                    Nine resorts in Bangalore that are worth your attention
                  </h5>
                  <p className="mt-[17px] pb-[33px] text-sm sm:text-base leading-[38px] text-gray dark:text-lightGray font-medium font-Lora text-justify">
                    Status A wonderful serenity taken possesion may entire sould
                    these royela consetetur to royella dos eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe Content */}
      <div className="dark:bg-lightBlack">
        <section className="subContainer bg-[url('/images/home-2/subscribe-bg.jpg')] bg-no-repeat bg-center bg-cover flex flex-col md:flex-row items-center justify-center md:justify-between py-5 md:py-10 lg:py-12 xl:py-14 2xl:py-16 3xl:py-[72px] px-5 md:px-8 lg:px-10 2xl:px-20 lg:absolute lg:-bottom-[100px] left-0 right-0">
          <div className="font-Garamond text-center md:text-left ">
            <h5 className="text-base sm:text-lg font-bold leading-7 md:leading-9 lg:leading-[46px] text-white ">
              SUBSCRIBE
            </h5>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-[38px] font-bold leading-7 md:leading-9 lg:leading-[46px] text-white ">
              For More Deals
            </h2>
          </div>
          <div className="flex items-center  mt-4 md:mt-0">
            <input
              type="email"
              className="inline-block lg:px-[26px] py-2 sm:py-4 md:py-[22px] bg-transparent border-white outline-white text-base xl:text-[17px] text-white font-Lora font-normal placeholder:text-white focus:outline-transparent focus:border-white
                  focus:ring-transparent w-[200px] sm:w-[280px] xl:w-[300px] 2xl:w-[390px]  flex-initial"
              placeholder="Email Address"
            />
            <button className="bg-white text-khaki text-base font-medium  font-Garamond px-2 sm:px-5 lg:px-10 py-2 sm:py-4 md:py-[22px] border border-white">
              SUBSCRIBE
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
