const HeroSection = () => {
  return (
    <section className="bg-[url('/images/home-2/hero-bg.jpg')] bg-no-repeat bg-center w-full bg-cover h-screen 2xl:h-[960px] grid items-center justify-center bg-[rgba(30,30,30,0.4)] bg-opacity-30 ">
      <div></div>
      <div className="px-5 font-Garamond text-center text-white">
        <h5 className="text-base lg:text-lg tracking-[3px] leading-7 font-medium">
          ROYELLA HOTEL RESORT
        </h5>
        <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[75px] mt-[30px] md:mt-[40px]  2xl:mt-[60px] relative before:absolute before:w-[1px] before:h-[30px] md:before:h-[40px] 2xl:before:h-[50px] before:-top-[18px] sm:before:-top-[28px] md:before:-top-[40px] 2xl:before:-top-[55px] before:left-1/2 before:bg-white">
          BOOK YOUR VACATION
        </h1>
      </div>
      <div className="items-end Container-Hero">
        <div className="flex items-center justify-center xl:justify-between flex-wrap flex-shrink ">
          <div className="p-3">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white">
              Check In
            </p>
            <div className="flex items-center pt-[18px] ">
              <input
                type="text"
                className=" bg-transparent focus:outline-transparent  text-white outline-0 w-[120px] xsm:w-[160px] sm:w-[210px] flex-initial text-sm lg:text-base focus:ring-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-khaki focus:border-khaki text-left"
                defaultValue="26 August, 2023"
              />
            </div>
          </div>
          <div className="p-3">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white">
              Check Out
            </p>
            <div className="flex items-center pt-[18px] ">
              <input
                type="text"
                className=" bg-transparent focus:outline-transparent text-white  outline-0 w-[120px] xsm:w-[160px] sm:w-[210px] flex-initial text-sm lg:text-base focus:ring-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-khaki focus:border-khaki text-left"
                defaultValue="26 August, 2023"
              />
            </div>
          </div>
          <div className="p-3">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white">
              Rooms
            </p>
            <div className="flex items-center pt-[18px]">
              <select className="w-[120px] xsm:w-[160px] sm:w-[210px] h-[46px] flex-initial bg-transparent  outline-0 text-sm lg:text-base text-white  focus:outline-none  focus:ring-transparent border border-khaki focus:border-khaki text-left ">
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  01 Rooms
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  02 Rooms
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  03 Rooms
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  04 Rooms
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 ">
                  05 Rooms
                </option>
              </select>
            </div>
          </div>

          <div className="p-3">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white">
              Guests
            </p>
            <div className="flex items-center pt-[18px]">
              <select className="w-[120px] xsm:w-[160px] sm:w-[210px] h-[46px] flex-initial bg-transparent  outline-0 text-sm lg:text-base focus:outline-none  focus:ring-transparent text-white border border-khaki focus:border-khaki">
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  01 Adult, 0 Child
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  02 Adult, 0 Child
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  02 Adult, 1 Child
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  02 Adult, 2 Child
                </option>
                <option className="bg-lightBlack text-sm lg:text-base px-3 py-1 text-white">
                  05 Adult, 0 Child
                </option>
              </select>
            </div>
          </div>
          <button className="w-[142px] h-[50px] text-[15px] bg-khaki font-Garamond text-white sm:mt-[47px]">
            Checkout Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
