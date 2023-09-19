const Action = () => {
  return (
    <section className="Container mt-[-90px]">
      <div className="bg-[#f8f6f3] w-full h-[576px] grid grid-cols-1 lg:grid-cols-2 items-center gap-[70px]">
        <div className="space-y-5 flex-1 font-Garamond pl-[70px] ">
          <h5 className="text-base text-khaki leading-[26px] font-medium">
            MANAGER
          </h5>
          <h1 className="text-[38px] leading-[44px] text-lightBlack font-semibold">
            LUXURY BEST HOTEL IN CITY CALIFORNIA, USA
          </h1>
          <p className="text-base font-Lora text-gray font-normal leading-[26px]">
            Rapidiously myocardinate cross-platform intellectual capital after
            marketing model. Appropriately create interactive infrastructures
            after maintainable are Holisticly facilitate stand-alone inframe
            Compellingly create premier open data through economically.
          </p>
          <p className="text-base font-Lora italic leading-[26px] underline font-normal text-gray">
            “ Model. Appropriately create interactive infrastructures after main
            Holisticly facilitate stand-alone inframe of the world ”
          </p>
          <div className="flex items-center space-x-6 pt-5">
            <img
              src="/images/home-1/call-do-action-img.png"
              className="w-[65px] h-[65px]"
              alt=""
            />

            <div className="">
              <h4 className="text-[22px] leading-[26px] text-lightBlack font-semibold font-Garamond">
                John D. Alexon
              </h4>
              <p className="pt-1 text-base leading-[26px] font-normal text-gray flex items-center">
                <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                Manger
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[100%] w-full ">
          <img
            src="/images/home-1/action-img.png"
            className="h-full w-full "
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Action;
