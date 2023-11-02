import { LiaDotCircleSolid } from "react-icons/lia";

const Best_Offer = () => {
  return (
    <section className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
      {/* THE BEST offer */}
      <div className=" Container">
        <div className=" flex flex-col md:flex-row items-center ">
          {/* best-offer content */}
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

            <div className="flex items-center mb-10">
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
            </div>
            <button className="btn-primary1">Discover More</button>
          </div>
          {/* best-offer image */}
          <div className="w-full  p-[20px] lg:pl-[20px] 2xl:p-[50px]">
            <img
              src="/images/home-5/best-offer.png"
              className="dark:hidden"
              alt=""
            />
            <img
              src="/images/home-5/dark-best-offer.png"
              className="hidden dark:block"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best_Offer;
