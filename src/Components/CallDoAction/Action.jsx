import { BsPlay } from "react-icons/bs";

const Action = () => {
  return (
    <section className="Container mt-[-90px] ">
      <div className="bg-[#f8f6f3] w-full h-[576px] grid grid-cols-1 lg:grid-cols-2 items-center gap-[70px] ">
        <div className="space-y-5 flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-12">
          <h5 className="text-base text-khaki leading-[26px] font-medium">
            MANAGER
          </h5>
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack font-semibold">
            LUXURY BEST HOTEL IN CITY CALIFORNIA, USA
          </h1>
          <p className="text-sm sm:text-base font-Lora text-gray font-normal leading-[26px]">
            Rapidiously myocardinate cross-platform intellectual capital after
            marketing model. Appropriately create interactive infrastructures
            after maintainable are Holisticly facilitate stand-alone inframe
            Compellingly create premier open data through economically.
          </p>
          <p className="text-sm sm:text-base font-Lora italic leading-[26px] underline font-normal text-gray">
            “ Model. Appropriately create interactive infrastructures after main
            Holisticly facilitate stand-alone inframe of the world ”
          </p>
          <div className="flex items-center space-x-6 pt-5">
            <img
              src="/images/home-1/call-do-action-img.png"
              className="w-[65px] h-[65px] object-cover"
              alt=""
            />

            <div className="">
              <h4 className="text-lg sm:text-[22px] leading-[26px] text-lightBlack font-semibold font-Garamond">
                John D. Alexon
              </h4>
              <p className="pt-1 text-base leading-[26px] font-normal text-gray flex items-center">
                <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                Manger
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[100%] w-full relative ">
          <img
            src="/images/home-1/action-img.png"
            className="h-full w-full md:h-[80%] lg:h-full object-cover"
            alt=""
          />

          <div className="w-[70px] h-[70px]  text-white absolute top-1/2 md:top-[35%] lg:top-1/2 left-[45%] bg-khaki rounded-full flex items-center justify-center cursor-pointer z-[1] ">
            <BsPlay className="w-8 h-8" />
          </div>
          <span className=" top-[47%] md:top-[33%] lg:top-[48%] left-[42%] lg:left-[43.5%] border w-[90px] h-[90px] rounded-full absolute border-white video-animation"></span>
        </div>
      </div>
    </section>
  );
};

export default Action;
