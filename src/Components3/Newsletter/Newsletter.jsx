const Newsletter = () => {
  return (
    <section className="bg-[url('/images/home-3/subscribe-bg.jpg')] py-20 lg:py-[120px] bg-center bg-cover bg-no-repeat">
      <div className="grid items-center justify-center">
        <div className="flex items-center mb-4 justify-center">
          <img src="/images/home-3/shape-2.png" alt="" />
          <h5 className="px-2 sm:px-3 md:px-5 text-sm sm:text-base leading-[26px] lg:leading-[42px] text-white font-Garamond font-semibold">
            JOIN OUR MAILING LIST
          </h5>

          <img src="/images/home-3/shape-2.png" alt="" />
        </div>
        <h1 className="text-center text-2xl md:text-3xl 2xl:text-[38px] leading-[26px] lg:leading-[38px] text-white mb-8 font-bold font-Garamond">
          What Our Guests Say
        </h1>
        <div className="flex items-center justify-center mt-4 md:mt-0">
          <input
            type="email"
            className="inline-block lg:px-[26px] py-2 sm:py-4 md:py-[22px] bg-transparent border-khaki outline-white text-base xl:text-[17px] text-lightGray font-Lora font-normal placeholder:text-lightGray focus:outline-transparent focus:border-khaki
                  focus:ring-transparent w-[200px] sm:w-[380px] xl:w-[400px] 2xl:w-[500px]  flex-initial"
            placeholder="Email Address"
          />
          <button className="bg-khaki text-white text-base font-medium  font-Garamond px-2 sm:px-5 lg:px-10 2xl:px-[50px] py-2 sm:py-4 md:py-[22px] border border-khaki">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
