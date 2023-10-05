import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
const Rooms = () => {
  const [rooms, setRooms] = useState(false);
  return (
    <section className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px] ">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] items-center ">
          {rooms ? (
            <>
              {/* Room - 1 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
              >
                <img
                  src="/images/home-3/room-1.jpg"
                  className="object-cover"
                  alt=""
                />
                <div className="py-4 font-Garamond">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white my-[30px] font-semibold mb-[19px]">
                    Co-working suite For modern startups
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[38px] font-normal">
                    A wonderful serenity has taken posesion royela design soul
                    like these royella dolor consectetur tempor incididunt
                    resort sweet
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Lora font-medium uppercase "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -2 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
              >
                <img
                  src="/images/home-3/room-2.jpg"
                  className="object-cover"
                  alt=""
                />
                <div className="py-4 font-Garamond">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white my-[30px] font-semibold mb-[19px]">
                    The Grand Suite Do you feel great?
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[38px] font-normal">
                    A wonderful serenity has taken posesion royela design soul
                    like these royella dolor consectetur tempor incididunt
                    resort sweet
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Lora font-medium uppercase "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -3 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
              >
                <img
                  src="/images/home-3/room-3.jpg"
                  className="object-cover"
                  alt=""
                />
                <div className="py-4 font-Garamond">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white my-[30px] font-semibold mb-[19px]">
                    Double Deluxe This is classic best comfort
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[38px] font-normal">
                    A wonderful serenity has taken posesion royela design soul
                    like these royella dolor consectetur tempor incididunt
                    resort sweet
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Lora font-medium uppercase "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room - 1 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
              >
                <img
                  src="/images/home-3/room-1.jpg"
                  className="object-cover"
                  alt=""
                />
                <div className="py-4 font-Garamond">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white my-[30px] font-semibold mb-[19px]">
                    Co-working suite For modern startups
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[38px] font-normal">
                    A wonderful serenity has taken posesion royela design soul
                    like these royella dolor consectetur tempor incididunt
                    resort sweet
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Lora font-medium uppercase "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -2 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
              >
                <img
                  src="/images/home-3/room-2.jpg"
                  className="object-cover"
                  alt=""
                />
                <div className="py-4 font-Garamond">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white my-[30px] font-semibold mb-[19px]">
                    The Grand Suite Do you feel great?
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[38px] font-normal">
                    A wonderful serenity has taken posesion royela design soul
                    like these royella dolor consectetur tempor incididunt
                    resort sweet
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Lora font-medium uppercase "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -3 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
              >
                <img
                  src="/images/home-3/room-3.jpg"
                  className="object-cover"
                  alt=""
                />
                <div className="py-4 font-Garamond">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white my-[30px] font-semibold mb-[19px]">
                    Double Deluxe This is classic best comfort
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[38px] font-normal">
                    A wonderful serenity has taken posesion royela design soul
                    like these royella dolor consectetur tempor incididunt
                    resort sweet
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Lora font-medium uppercase "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Room - 1 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
              >
                <img
                  src="/images/home-3/room-1.jpg"
                  className="object-cover"
                  alt=""
                />
                <div className="py-4 font-Garamond">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white my-[30px] font-semibold mb-[19px]">
                    Co-working suite For modern startups
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[38px] font-normal">
                    A wonderful serenity has taken posesion royela design soul
                    like these royella dolor consectetur tempor incididunt
                    resort sweet
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Lora font-medium uppercase "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -2 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
              >
                <img
                  src="/images/home-3/room-2.jpg"
                  className="object-cover"
                  alt=""
                />
                <div className="py-4 font-Garamond">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white my-[30px] font-semibold mb-[19px]">
                    The Grand Suite Do you feel great?
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[38px] font-normal">
                    A wonderful serenity has taken posesion royela design soul
                    like these royella dolor consectetur tempor incididunt
                    resort sweet
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Lora font-medium uppercase "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              {/* Room -3 */}
              <div
                className=" p-[30px] bg-white dark:bg-normalBlack 
          boxShadow transition-all duration-300"
              >
                <img
                  src="/images/home-3/room-3.jpg"
                  className="object-cover"
                  alt=""
                />
                <div className="py-4 font-Garamond">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] leading-[26px] md:leading-9 xl:leading-[42px] text-lightBlack dark:text-white my-[30px] font-semibold mb-[19px]">
                    Double Deluxe This is classic best comfort
                  </h3>
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[38px] font-normal">
                    A wonderful serenity has taken posesion royela design soul
                    like these royella dolor consectetur tempor incididunt
                    resort sweet
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-lightBlack dark:text-white transition-all duration-300 text-sm sm:text-base leading-[38px] font-Lora font-medium uppercase "
                  >
                    DETAILS & BOOKING
                    <HiOutlineArrowNarrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        {/* See more button */}
        <div className="text-center mt-[48px]">
          <button className="btn-primary" onClick={() => setRooms(!rooms)}>
            {rooms ? "CLOSE ALL ROOMS" : "VIEW ALL ROOMS"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
