import { AiOutlineEye } from "react-icons/ai";
const Gallery = () => {
  return (
    <section className="grid  grid-cols-4 grid-rows-4 h-[750px] overflow-hidden">
      <div className="row-span-4 col-span-2 relative group">
        <img
          src="/images/home-5/gallery-1.jpg"
          className="w-full h-full group-hover:grayscale"
          alt=""
        />

        <div className=" text-center absolute bottom-[-200px] group-hover:bottom-0 transition-all duration-500 w-[91%%] m-10 left-0 right-0">
          <div className="mb-[-100px] group-hover:mb-0 opacity-0 group-hover:opacity-100">
            <span className="w-[50px] h-[50px] rounded-full bg-white dark:bg-lightBlack mb-[50px] grid items-center justify-center mx-auto  ">
              <AiOutlineEye
                size={18}
                className="text-lightBlack dark:text-white"
              />
            </span>
          </div>
          <div className="bg-white dark:bg-lightBlack text-center py-10  ">
            <h4 className=" text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white font-Garamond ">
              Modern comfort
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal font-Lora">
              Hotel Booking
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="row-span-2 relative group">
          <img
            src="/images/home-5/gallery-2.jpg"
            className="w-full  group-hover:grayscale"
            alt=""
          />
          {/* hover effect and text */}
          <div className=" text-center absolute bottom-[-200px] group-hover:bottom-0 transition-all duration-500 w-[91%%] m-10 left-0 right-0">
            <div className="mb-[-100px] group-hover:mb-0 opacity-0 group-hover:opacity-100">
              <span className="w-[50px] h-[50px] rounded-full bg-white dark:bg-lightBlack mb-[50px] grid items-center justify-center mx-auto  ">
                <AiOutlineEye
                  size={18}
                  className="text-lightBlack dark:text-white"
                />
              </span>
            </div>
            <div className="bg-white dark:bg-lightBlack text-center py-10  ">
              <h4 className=" text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white font-Garamond ">
                Modern comfort
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                Hotel Booking
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-2 relative group">
          <img
            src="/images/home-5/gallery-3.jpg"
            className="w-full  group-hover:grayscale"
            alt=""
          />
          {/* hover effect and text */}
          <div className=" text-center absolute bottom-[-200px] group-hover:bottom-0 transition-all duration-500 w-[91%%] m-10 left-0 right-0">
            <div className="mb-[-100px] group-hover:mb-0 opacity-0 group-hover:opacity-100">
              <span className="w-[50px] h-[50px] rounded-full bg-white dark:bg-lightBlack mb-[50px] grid items-center justify-center mx-auto  ">
                <AiOutlineEye
                  size={18}
                  className="text-lightBlack dark:text-white"
                />
              </span>
            </div>
            <div className="bg-white dark:bg-lightBlack text-center py-10  ">
              <h4 className=" text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white font-Garamond ">
                Modern comfort
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                Hotel Booking
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-4 col-span-1 relative group">
        <img
          src="/images/home-5/gallery-4.jpg"
          className="w-full h-full group-hover:grayscale"
          alt=""
        />
        {/* hover effect and text */}
        <div className=" text-center absolute bottom-[-200px] group-hover:bottom-0 transition-all duration-500 w-[91%%] m-10 left-0 right-0">
          <div className="mb-[-100px] group-hover:mb-0 opacity-0 group-hover:opacity-100">
            <span className="w-[50px] h-[50px] rounded-full bg-white dark:bg-lightBlack mb-[50px] grid items-center justify-center mx-auto  ">
              <AiOutlineEye
                size={18}
                className="text-lightBlack dark:text-white"
              />
            </span>
          </div>
          <div className="bg-white dark:bg-lightBlack text-center py-10  ">
            <h4 className=" text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white font-Garamond ">
              Modern comfort
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal font-Lora">
              Hotel Booking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
