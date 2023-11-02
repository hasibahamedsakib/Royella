import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

// slider function
function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const HeroSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider relative">
        {/* slider-1 */}
        <div className="keen-slider__slide number-slide1 ">
          <div className="bg-[url('/images/home-5/hero-1.jpg')] bg-center  bg-no-repeat bg-cover h-[750px] 2xl:h-[900px] 3xl:h-[950px] grid items-center justify-center">
            <div className=" text-center mx-auto">
              <p className="text-khaki text-sm sm:text-base 2xl:text-lg leading-[26px] font-normal font-Lora my-2">
                Welcome to Kojistay, a luxury apartment hotel in Ulipur
              </p>

              <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] 3xl:text-[90px] leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond  2xl:leading-[100px] lg:px-[200px] xl:px-[284px] 2xl:px-[270px] 3xl:px-[380px] mb-6 md:mb-[30px] xl:pb-[40px] 3xl:pb-[50px] ">
                Modern Living Apartment In The Complex
              </h1>

              {/* time and date */}
              <div className="Container">
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative before:absolute before:w-full before:h-full  text-khaki before:border after:w-[101%] lg:after:h-[51px] after:absolute lg:after:border after:top-[6px] after:right-[-7px]">
                  <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  ">
                    <p className="">Check In Date:</p>
                    <input
                      type="date"
                      name=""
                      id="date001"
                      className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                    />
                  </div>
                  <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  border border-t-0 border-b-0 border-khaki">
                    <p className="">Check Out Date:</p>
                    <input
                      type="date"
                      name=""
                      id="date002"
                      className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                    />
                  </div>
                  {/* children */}
                  <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border border-t-0 border-b-0 border-l-0 border-khaki">
                    <label className=" ">CHILDREN:</label>
                    <select className="w-full  md:h-14 lg:h-16 border-none  outline-none  bg-transparent focus:ring-0  z-[1]">
                      <option
                        className="bg-khaki text-white focus:text-white px-3 py-3"
                        value=""
                        disabled
                      >
                        Select Number of Children
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option1"
                      >
                        Children 1
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option2"
                      >
                        Children 2
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option3"
                      >
                        Children 3
                      </option>
                      <option
                        className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                        value="option4"
                      >
                        Children 4
                      </option>
                    </select>
                  </div>
                  <button className="text-white text-sm sm:text-base tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora  pl-2 bg-transparent cursor-pointer border-khaki">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider-2 */}
        <div className="keen-slider__slide number-slide1 bg-[url('/images/home-5/hero-2.jpg')] bg-center  bg-no-repeat bg-cover h-screen xl:h-[750px] 2xl:h-[900px] 3xl:h-[950px] grid items-center justify-center">
          <div className=" text-center mx-auto">
            <p className="text-khaki text-sm sm:text-base 2xl:text-lg leading-[26px] font-normal font-Lora my-2">
              Welcome to Kojistay, a luxury apartment hotel in Ulipur
            </p>

            <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] 3xl:text-[90px] leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond  2xl:leading-[100px] lg:px-[200px] xl:px-[284px] 2xl:px-[270px] 3xl:px-[380px] mb-6 md:mb-[30px] xl:pb-[40px] 3xl:pb-[50px] ">
              Modern Living Apartment In The Complex
            </h1>

            {/* time and date */}
            <div className="Container">
              <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative before:absolute before:w-full before:h-full  text-khaki before:border after:w-[101%] lg:after:h-[51px] after:absolute lg:after:border after:top-[6px] after:right-[-7px]">
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  ">
                  <p className="">Check In Date:</p>
                  <input
                    type="date"
                    name=""
                    id="date01"
                    value="10 / 11 / 2023"
                    className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  border border-t-0 border-b-0 border-khaki">
                  <p className="">Check Out Date:</p>
                  <input
                    type="date"
                    name=""
                    id="date02"
                    value="10 / 11 / 2023"
                    className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                {/* children */}
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border border-t-0 border-b-0 border-l-0 border-khaki">
                  <label className=" ">CHILDREN:</label>
                  <select className="w-full  md:h-14 lg:h-16 border-none  outline-none  bg-transparent focus:ring-0  z-[1]">
                    <option
                      className="bg-khaki text-white px-3 py-3"
                      value=""
                      disabled
                    >
                      Select Number of Children
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option1"
                    >
                      Children 1
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option2"
                    >
                      Children 2
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option3"
                    >
                      Children 3
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option4"
                    >
                      Children 4
                    </option>
                  </select>
                </div>
                <button className="text-white text-sm sm:text-base tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora  pl-2 bg-transparent cursor-pointer border-khaki">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* slider-3 */}
        <div className="keen-slider__slide number-slide1 bg-[url('/images/home-5/hero-3.jpg')] bg-center  bg-no-repeat bg-cover h-screen xl:h-[750px] 2xl:h-[900px] 3xl:h-[950px] grid items-center justify-center">
          <div className=" text-center mx-auto">
            <p className="text-khaki text-sm sm:text-base 2xl:text-lg leading-[26px] font-normal font-Lora my-2">
              Welcome to Kojistay, a luxury apartment hotel in Ulipur
            </p>

            <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] 3xl:text-[90px] leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond  2xl:leading-[100px] lg:px-[200px] xl:px-[284px] 2xl:px-[270px] 3xl:px-[380px] mb-6 md:mb-[30px] xl:pb-[40px] 3xl:pb-[50px] ">
              Modern Living Apartment In The Complex
            </h1>

            {/* time and date */}
            <div className="Container">
              <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative before:absolute before:w-full before:h-full  text-khaki before:border after:w-[101%] lg:after:h-[51px] after:absolute lg:after:border after:top-[6px] after:right-[-7px]">
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  ">
                  <p className="">Check In Date:</p>
                  <input
                    type="date"
                    name=""
                    id="date1"
                    className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2  border border-t-0 border-b-0 border-khaki">
                  <p className="">Check Out Date:</p>
                  <input
                    type="date"
                    name=""
                    id="date2"
                    className="bg-transparent z-[1] ml-2 md:ml-3 lg:ml-4 2xl:ml-5  border-none outline-none focus:ring-0"
                  />
                </div>
                {/* children */}
                <div className="text-white text-sm tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora flex items-center pl-2 border border-t-0 border-b-0 border-l-0 border-khaki">
                  <label className=" ">CHILDREN:</label>
                  <select className="w-full  md:h-14 lg:h-16 border-none  outline-none  bg-transparent focus:ring-0  z-[1]">
                    <option
                      className="bg-khaki text-white px-3 py-3"
                      value=""
                      disabled
                    >
                      Select Number of Children
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option1"
                    >
                      Children 1
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option2"
                    >
                      Children 2
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option3"
                    >
                      Children 3
                    </option>
                    <option
                      className="bg-whiteSmoke dark:bg-normalBlack text-lightBlack dark:text-white px-3 py-3"
                      value="option4"
                    >
                      Children 4
                    </option>
                  </select>
                </div>
                <button className="text-white text-sm sm:text-base tracking-[1px] leading-7 xl:leading-[38px] font-normal font-Lora  pl-2 bg-transparent cursor-pointer border-khaki">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pointer toogle btn */}

      <div className="absolute top-[60%] xl:top-1/2 left-[10px] sm:left-5  lg:left-[80px] text-white text-left ">
        <div ref={thumbnailRef} className="keen-slider thumbnail control ">
          <div className="keen-slider__slide number-slide1 control-btn ">
            01
          </div>
          <div className="keen-slider__slide number-slide2 control-btn">02</div>
          <div className="keen-slider__slide number-slide2 control-btn ">
            03
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
