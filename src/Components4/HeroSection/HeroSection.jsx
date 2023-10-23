const HeroSection = () => {
  return (
    // <div className="pt-[100px]">
    <section className="bg-[url('/images/home-4/hero-bg.jpg')] bg-center  bg-no-repeat bg-cover h-screen xl:h-[750px] 2xl:h-[850px] grid items-center justify-center">
      <div className=" text-center ">
        <img
          src="/images/home-4/section-sahpe.png"
          alt=""
          className="mx-auto"
        />
        <p className="text-white text-sm sm:text-base leading-8 md:leading-10 lg:leading-[55px] xl:leading-[79px] font-normal font-Lora my-2 sm:py-3 md:py-1">
          Unique Place And Luxury Hotel
        </p>
        <div className="mb-6 md:mb-[30px]">
          <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond">
            Life Enjoy With The
          </h1>
          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond">
            Great Moments
          </h1>
        </div>
        <button className="btn-secondary">ROOMS & SUITES</button>
      </div>
    </section>
    // </div>
  );
};

export default HeroSection;
