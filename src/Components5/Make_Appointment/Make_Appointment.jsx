const Make_Appointment = () => {
  return (
    <section className="py-20 2xl:py-[120px] dark:bg-lightBlack shadow-xl">
      <div className="Container bg-whiteSmoke dark:bg-normalBlack">
        <div className="flex items-center lg:flex-row flex-col ">
          <img src="/images/home-5/Make_Ap.jpg" alt="" />
          <div className="lg:pl-[40px] xl:pl-[50px] 2xl:pl-[90px]">
            <div className="flex items-center mb-5">
              <div className="relative mr-[10px]">
                <hr className="w-10 h-[2px] bg-khaki text-khaki" />
                <span className="w-[8px] h-[8px] bg-khaki rounded-full absolute -top-[3px] animation-move"></span>
              </div>
              <p className="text-sm font-medium font-Lora leading-[26px] text-khaki">
                MAKE AN APPOINTMENT
              </p>
            </div>

            <h2
              className="text-lightBlack dark:text-white text-3xl md:text-4xl xl:text-[38px] leading-7 md:leading-9 lg:leading-10 2xl:leading-[43px]
           font-bold font-Garamond mb-4 sm:mb-5"
            >
              Request a free quote
            </h2>
            <div className="flex items-center  gap-[30px] mb-[30px]">
              <input
                type="text"
                name=""
                className="w-full h-[50px] border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 dark:bg-lightBlack dark:text-white"
                placeholder="Your Name"
                id=""
              />
              <input
                type="email"
                name=""
                className="w-full h-[50px] border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 dark:bg-lightBlack dark:text-white"
                placeholder="Email Address"
                id=""
              />
            </div>
            <div className="grid items-center gap-[30px]">
              <input
                type="email"
                name=""
                className="w-full h-[50px] border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 dark:bg-lightBlack dark:text-white"
                placeholder="Appointment Topic"
                id=""
              />

              <textarea
                className="w-full h-[160px]  border-none outline-none focus:ring-0 placeholder:text-base placeholder:text-lightGray placeholder:leading-[38px] placeholder:font-Lora placeholder:font-normal px-5 dark:bg-lightBlack dark:text-white resize-none"
                placeholder="Type Your Message"
                name=""
                id=""
                cols="30"
              ></textarea>
              <button className="btn-primary">Submite Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Make_Appointment;
