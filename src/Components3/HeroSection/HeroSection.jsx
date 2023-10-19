const HeroSection = () => {
  return (
    <div className="">
      {/* // banner section */}
      <section className="bg-[url('/images/home-3/hero-bg.jpg')] bg-no-repeat bg-center w-full bg-cover h-screen  grid items-center justify-center bg-[rgba(30,30,30,0.4)] bg-opacity-30 relative">
        <div className="px-5 font-Garamond text-center text-[#fefefe] ">
          <h5 className="text-sm sm:text-base lg:text-lg leading-[26px] md:leading-8 lg:leading-[36px] font-bold bg-khaki bg-opacity-40 inline-block text-center px-3 sm:px-6 py-2 uppercase mt-20">
            Welcome To Royella City Hotel
          </h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[80px] font-bold leading-[28px] md:leading-9 2xl:leading-[100px] mt-4 md:pt-6 lg:mt-[25px] mb-5 md:mb-7">
            A New Vision Of Comfort
          </h1>
          <button className="btn-secondary mb-[150px]">Discover more</button>
        </div>
      </section>
      {/* // banner bottom */}

      <div className="absolute -bottom-[12rem] left-0 right-0 ">
        <section className="Container-Hero bg-lightBlack dark:bg-normalBlack ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5  items-center justify-center font-Lora py-10 lg:py-4 xl:py-5 2xl:py-6 gap-[10px] 2xl:pt-[70px] 3xl:px-20">
            <div className="bg-normalBlack dark:bg-lightBlack px-5 py-4">
              <p className="text-sm lg:text-[15px] font-medium text-[#fefefe] text-opacity-30 uppercase">
                Check In
              </p>
              <div className="flex items-center pt-[18px] ">
                <input
                  type="text"
                  className=" bg-transparent focus:outline-transparent  text-[#fefefe] outline-0 w-[120px] md:w-[160px] lg:w-[180px] xl:w-[210px] flex-initial text-[13px] md:text-base 2xl:text-lg focus:ring-transparent border-0  text-left"
                  defaultValue="Arrival Date"
                />
              </div>
            </div>
            <div className="bg-normalBlack dark:bg-lightBlack px-5 py-4">
              <p className="text-sm lg:text-[15px] font-medium text-[#fefefe] text-opacity-30 uppercase">
                Check Out
              </p>
              <div className="flex items-center pt-[18px] ">
                <input
                  type="text"
                  className=" bg-transparent focus:outline-transparent text-[#fefefe]  outline-0 w-[120px] md:w-[160px] lg:w-[180px] xl:w-[210px] flex-initial text-[13px] md:text-base 2xl:text-lg focus:ring-transparent border-0  text-left"
                  defaultValue="Departure Date"
                />
              </div>
            </div>
            <div className="bg-normalBlack dark:bg-lightBlack px-5 py-4">
              <p className="text-sm lg:text-[15px] font-medium text-[#fefefe] text-opacity-30 uppercase">
                Adults
              </p>
              <div className="flex items-center pt-[18px]">
                <input
                  type="text"
                  className=" bg-transparent focus:outline-transparent text-[#fefefe]  outline-0 w-[120px] md:w-[160px] lg:w-[180px] xl:w-[210px] flex-initial text-[13px] md:text-base 2xl:text-lg focus:ring-transparent border-0  text-left"
                  defaultValue="Adults"
                />
              </div>
            </div>
            <div className="bg-normalBlack dark:bg-lightBlack px-5 py-4">
              <p className="text-sm lg:text-[15px] font-medium text-[#fefefe] text-opacity-30 uppercase">
                Children
              </p>
              <div className="flex items-center pt-[18px]">
                <input
                  type="text"
                  className=" bg-transparent focus:outline-transparent text-[#fefefe]  outline-0 w-[120px] md:w-[160px] lg:w-[180px] xl:w-[210px] flex-initial text-[12px] md:text-base 2xl:text-lg focus:ring-transparent border-0  text-left"
                  defaultValue="children"
                />
              </div>
            </div>
            <button className="flex-initial xsm:w-[160px] sm:w-[200px] lg:w-[218px] h-[99px] text-[15px]  bg-khaki font-Garamond text-[#fefefe] ">
              Checkout Now
            </button>
          </div>
          <p className="text-center py-2 md:py-5 lg:py-8 pb-10 2xl:pb-[60px] 3xl:py-[60px] text-sm md:text-base lg:text-lg 2xl:text-xl font-Garamond font-bold text-lightGray">
            Check-in: After 02:00pm & Check-out: Before 11:00am
          </p>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
