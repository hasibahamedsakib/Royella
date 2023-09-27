const Agency = () => {
  return (
    <section className="py-20 2xl:py-[115px] dark:bg-lightBlack">
      <div className="Container grid  grid-cols-1 md:grid-cols-2 gap-[30px] ">
        {/* 1st col */}
        <div>
          <div>
            <p className="pt-1 text-base md:text-lg leading-[28px] text-gray dark:text-lightGray flex items-center font-medium">
              <span className="w-[60px] h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
              EXCLUSIVE AGENCY
            </p>
            <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[46px]  text-lightBlack dark:text-white my-[23px] font-Garamond font-bold">
              A Welcoming Haven For All Kind Of Travelers And Nature Lovers
            </h1>
            <p className=" text-sm sm:text-bas font-Lora leading-[26px] text-gray dark:text-lightGray font-normal">
              A wonderful serenity has taken possession of my entire soul, like
              these royella dolor amet, consectetur adipiscing elit dos eiusmod
              tempor incididunt resort sweet spring which I enjoy with my whole
              heart.
            </p>
          </div>
          <div className="lg:mt-14">
            <img src="/images/home-2/offer1.png" alt="" />
          </div>
        </div>
        {/* 2nd col */}
        <div>
          <div className="">
            <img src="/images/home-2/offer2.png" alt="" />
          </div>
          <div className="lg:mt-[68px]">
            <p className=" text-sm sm:text-bas font-Lora leading-[26px] text-gray dark:text-lightGray font-normal">
              A wonderful serenity has taken possession of my entire soul, like
              these royella dolor amet, consectetur adipiscing elit dos eiusmod
              tempor incididunt resort sweet spring which I enjoy with my whole
              heart.
            </p>
            <button className="btn-primary mt-[50px]">SEE MORE TOUR</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
