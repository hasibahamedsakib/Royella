import { LiaDotCircleSolid } from "react-icons/lia";
const Apartments = () => {
  return (
    <section className="dark:bg-lightBlack">
      {/* facilities part */}
      <div className="Container bg-whiteSmoke dark:bg-normalBlack px-5 md:px-9 2xl:px-[43px] py-8 md:py-12 2xl:py-[65px] relative mt-[-135px] z-[1]">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-[30px] ">
          <div className="apartment-effect group">
            <img
              src="/images/home-5/Apartment1.png"
              className="mx-auto pb-[14px] hover:filter group-hover:brightness-0 invert-[1] transition-all duration-500"
              alt=""
            />
            <h4 className="text-2xl leading-8 text-gray dark:text-lightGray group-hover:text-white font-bold font-Garamond text-center">
              Air-conditioned
            </h4>
          </div>
          <div className="apartment-effect group">
            <img
              src="/images/home-5/Apartment2.png"
              className="mx-auto pb-[14px] filter group-hover:brightness-0 invert-[1] transition-all duration-500"
              alt=""
            />
            <h4 className="text-2xl leading-8 text-gray dark:text-lightGray group-hover:text-white font-bold font-Garamond text-center">
              Airport transfer
            </h4>
          </div>
          <div className="apartment-effect group">
            <img
              src="/images/home-5/Apartment3.png"
              className="mx-auto pb-[14px] hover:filter group-hover:brightness-0 invert-[1] transition-all duration-500"
              alt=""
            />
            <h4 className="text-2xl leading-8 text-gray dark:text-lightGray group-hover:text-white font-bold font-Garamond text-center">
              All inclusive
            </h4>
          </div>
          <div className="apartment-effect group">
            <img
              src="/images/home-5/Apartment4.png"
              className="mx-auto pb-[14px] hover:filter group-hover:brightness-0 invert-[1] transition-all duration-500"
              alt=""
            />
            <h4 className="text-2xl leading-8 text-gray dark:text-lightGray group-hover:text-white font-bold font-Garamond text-center">
              Under protection
            </h4>
          </div>
        </div>
      </div>

      {/* THE BEST APARTMENTS */}
      <div className="py-20 2xl:py-[120px] Container">
        <div className="Container flex flex-col lg:flex-row items-center ">
          {/* best-apartments image */}
          <div className="w-full  p-[20px] lg:pl-[20px] 2xl:p-[50px]">
            <img src="/images/home-5/best-apartments.png" className="" alt="" />
          </div>
          {/* best-apartments content */}
          <div className="w-full  p-[20px] lg:pr-[20px] xl:p-[50px]">
            <div className="flex items-center">
              <div className="relative mr-[10px]">
                <hr className="w-10 h-[2px] bg-khaki text-khaki" />
                <span className="w-[8px] h-[8px] bg-khaki rounded-full absolute -top-[3px] animation-move"></span>
              </div>
              <p className="text-sm font-medium font-Lora leading-[26px] text-khaki">
                THE BEST APARTMENTS
              </p>
            </div>

            <h2
              className="text-lightBlack dark:text-white text-3xl md:text-4xl xl:text-[38px] leading-7 md:leading-9 lg:leading-10 2xl:leading-[43px]
           font-bold font-Garamond mb-4 sm:mb-5"
            >
              We make The accommodation In luxury & hotels
            </h2>
            <p className="text-sm lg:text-base leading-[22px] sm:leading-[26px] text-gray dark:text-lightGray font-normal font-Lora mb-5 xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-10">
              Located in Times Square, CozyStay Apartment Hotel Provide Peaceful
              Private Retreat in The Heart of One of The World Most Iconic
              Cities Blend Experience Professional Services Apartment.
            </p>

            <div className="flex items-center sm:justify-between flex-col sm:flex-row ">
              <ul className="space-y-5">
                <li className="flex items-center space-x-[8px]">
                  <LiaDotCircleSolid size={16} className="text-khaki" />
                  <p className="text-sm sm:text-base leading-[26px] text-lightBlack dark:text-white font-medium font-Lora">
                    Ut enim ad minim veniam
                  </p>
                </li>
                <li className="flex items-center space-x-[8px]">
                  <LiaDotCircleSolid size={16} className="text-khaki" />
                  <p className="text-sm sm:text-base leading-[26px] text-lightBlack dark:text-white font-medium font-Lora">
                    Excepteur sint
                  </p>
                </li>
                <li className="flex items-center space-x-[8px]">
                  <LiaDotCircleSolid size={16} className="text-khaki" />
                  <p className="text-sm sm:text-base leading-[26px] text-lightBlack dark:text-white font-medium font-Lora">
                    Sed ut perspiciatis unde omnis
                  </p>
                </li>
              </ul>
              <ul className="space-y-5 mt-5 sm:mt-0">
                <li className="flex items-center space-x-[8px]">
                  <LiaDotCircleSolid size={16} className="text-khaki" />
                  <p className="text-sm sm:text-base leading-[26px] text-lightBlack dark:text-white font-medium font-Lora">
                    Expert Team Members
                  </p>
                </li>
                <li className="flex items-center space-x-[8px]">
                  <LiaDotCircleSolid size={16} className="text-khaki" />
                  <p className="text-sm sm:text-base leading-[26px] text-lightBlack dark:text-white font-medium font-Lora">
                    Services we provide
                  </p>
                </li>
                <li className="flex items-center space-x-[8px]">
                  <LiaDotCircleSolid size={16} className="text-khaki" />
                  <p className="text-sm sm:text-base leading-[26px] text-lightBlack dark:text-white font-medium font-Lora">
                    Great Skilled Consultant
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex items-center  mt-10 lg:mt-[57px] sm:justify-between flex-col sm:flex-row ">
              <div className="flex items-center">
                <img src="/images/home-5/about-author.png" alt="" />
                <div className="ml-4">
                  <p className="text-xl md:text-[22px] text-lightBlack dark:text-white leading-6 md:leading-7 lg:leading-[30px] font-Garamond">
                    Mariya Varma
                  </p>
                  <p className="text-sm leading-[22px] text-khaki font-normal font-Lora">
                    CEO & Founder
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="/images/home-5/call.png" alt="" />
                <div className="ml-4">
                  <p className="text-[15px] leading-[22px] text-gray font-normal font-Lora">
                    Call us anytime
                  </p>
                  <p className="text-xl md:text-[22px] text-lightBlack dark:text-white leading-6 md:leading-7 lg:leading-[30px] font-Lora">
                    +256 21458.2146
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apartments;
