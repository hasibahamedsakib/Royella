const HeroSection = () => {
  return (
    // <div className="pt-[100px]">
    <section className="bg-[url('/images/home-4/hero-bg.jpg')] bg-center  bg-no-repeat h-screen grid items-center justify-center">
      <div className=" text-center pt-20">
        <img
          src="/images/home-4/section-sahpe.png"
          alt=""
          className="mx-auto"
        />
        <p className="text-white text-sm sm:text-base leading-[79px] font-normal font-Lora my-5">
          Unique Place And Luxury Hotel
        </p>
        <div className="mb-5 md:mb-[30px]">
          <h1 className="text-white text-6xl leading-[66px] font-semibold font-Garamond">
            Life Enjoy With The
          </h1>
          <h1 className="text-white text-6xl leading-[66px] font-semibold font-Garamond">
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
