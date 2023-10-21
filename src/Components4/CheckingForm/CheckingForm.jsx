const CheckingForm = () => {
  return (
    <section className="dark:bg-lightBlack py-20 2xl:py-[120px]">
      <div className="Container">
        <h3
          className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-7 
           font-semibold font-Garamond"
        >
          Check Availability
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5  items-center justify-center font-Lora py-10 lg:py-4 xl:py-5 2xl:py-6 gap-[10px] 2xl:pt-[70px] 3xl:px-20">
          <div>
            <p className="text-sm lg:text-[15px] font-medium text-[#fefefe] text-opacity-30 uppercase">
              Check In
            </p>
            <div className="flex items-center pt-[18px] ">
              <input
                type="date"
                className=" bg-transparent focus:outline-transparent  text-[#fefefe] outline-0  flex-initial text-[13px] md:text-base 2xl:text-lg   text-left"
                defaultValue="Arrival Date"
              />
            </div>
          </div>

          <div>
            <p className="text-sm lg:text-[15px] font-medium text-[#fefefe] text-opacity-30 uppercase">
              Check Out
            </p>
            <div className="flex items-center pt-[18px] ">
              <input
                type="date"
                className=" bg-transparent focus:outline-transparent text-[#fefefe]  outline-0  flex-initial text-[13px] md:text-base 2xl:text-lg   text-left"
                defaultValue="Departure Date"
              />
            </div>
          </div>

          <div>
            <p className="text-sm lg:text-[15px] font-medium text-[#fefefe] text-opacity-30 uppercase">
              Adults
            </p>
            <div className="flex items-center pt-[18px]">
              <input
                type="date"
                className=" bg-transparent focus:outline-transparent text-[#fefefe]  outline-0  flex-initial text-[13px] md:text-base 2xl:text-lg   text-left"
                defaultValue="Adults"
              />
            </div>
          </div>
          <div>
            <p className="text-sm lg:text-[15px] font-medium text-[#fefefe] text-opacity-30 uppercase">
              Children
            </p>
            <div className="flex items-center pt-[18px]">
              <input
                type="date"
                className=" bg-transparent focus:outline-transparent text-[#fefefe]  outline-0  flex-initial text-[12px] md:text-base 2xl:text-lg   text-left"
                defaultValue="children"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckingForm;
