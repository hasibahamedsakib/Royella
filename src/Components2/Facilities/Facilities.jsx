import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TbAirConditioning } from "react-icons/tb";

const Facilities = () => {
  return (
    <section className="py-20 2xl:py-[120px] bg-whiteSmoke dark:bg-normalBlack">
      <div className="Container">
        {/* section heading */}
        <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[280px] font-Garamond">
          <h4 className="text-base lg:text-lg font-medium text-khaki leading-[28px]">
            HOTEL FACILITIES
          </h4>
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white mt-[23px] mb-[12px] font-bold">
            Hotel Facilities For Every Need
          </h1>
          <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base">
            A wonderful serenity has taken possession of my entire soul, like
            these royella dolor consectetur adipiscing elit dos eiusmod tempor
            incididunt resort sweet spring
          </p>
        </div>
        {/* section content*/}
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-14 ">
          <div className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0">
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                <TbAirConditioning className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki" />
              </div>

              <h2 className="text-xl lg:text-[28px] leading-[26px] text-lightBlack dark:text-white my-[30px] font-bold">
                Swimming Pool
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[30px] font-normal">
                A wonderful serenity has taken posesion royela design soul like
                these royella dolor consectetur tempor incididunt resort sweet
              </p>
              <Link
                to="#"
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-10"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link>
            </div>
          </div>
          {/* Swimming Pool */}
          <div className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0">
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                <LiaSwimmingPoolSolid className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki" />
              </div>

              <h2 className="text-xl lg:text-[28px] leading-[26px] text-lightBlack dark:text-white my-[30px] font-bold">
                Air Conditioner
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[30px] font-normal">
                A wonderful serenity has taken posesion royela design soul like
                these royella dolor consectetur tempor incididunt resort sweet
              </p>
              <Link
                to="#"
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-10"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link>
            </div>
          </div>
          {/* Comfortable rooms */}
          <div className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0">
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                <IoBedOutline
                  alt=""
                  className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki"
                />
              </div>

              <h2 className="text-xl lg:text-[28px] leading-[26px] text-lightBlack dark:text-white my-[30px] font-bold">
                Comfortable rooms
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[30px] font-normal">
                A wonderful serenity has taken posesion royela design soul like
                these royella dolor consectetur tempor incididunt resort sweet
              </p>
              <Link
                to="#"
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-10"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
