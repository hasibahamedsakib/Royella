import { useState } from "react";
import { MdCloseFullscreen } from "react-icons/md";
import { LuSofa } from "react-icons/lu";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import "./rooms.css";
const Rooms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:1000px)": {
        slides: { perView: 3, spacing: 20 },
      },
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
  });

  return (
    <section className="bg-normalBlack py-20 2xl:py-[120px] border">
      <div className="Container">
        <div className="w-full  p-[20px] lg:pr-[20px] xl:p-[50px]">
          <div className="flex items-center">
            <div className="relative mr-[10px]">
              <hr className="w-10 h-[2px] bg-khaki text-khaki" />
              <span className="w-[8px] h-[8px] bg-khaki rounded-full absolute -top-[3px] animation-move"></span>
            </div>
            <p className="text-sm font-medium font-Lora leading-[26px] text-khaki">
              Best Rooms
            </p>
          </div>

          <h2
            className="text-white text-3xl md:text-4xl xl:text-[38px] leading-7 md:leading-9 lg:leading-10 2xl:leading-[46px]
           font-bold font-Garamond mb-4 sm:mb-5"
          >
            Sojourn in Our Best Rooms
          </h2>
          <p className="text-sm lg:text-base leading-[22px] sm:leading-[26px] text-lightGray font-normal font-Lora mb-5 xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-10">
            Located in Times Square, CozyStay Apartment Hotel Provide <br />
            Peaceful Experience Professional Services Apartment.
          </p>
        </div>
        {/* <div className="mt-14 keen-slider p-6 " ref={sliderRef}></div> */}
        <div ref={sliderRef} className="keen-slider ">
          <div className="bg-lightBlack keen-slider__slide number-slide1 group">
            <div className="relative">
              <img
                src="/images/home-5/room-1.jpg"
                alt="room_images_one"
                className="w-full h-full"
              />
              <div className=" ml-[-280px] group-hover:ml-0 transition-all duration-500 inline-block bg-lightBlack absolute -bottom-0">
                <div className="px-[30px] py-3 flex items-center ">
                  <div className="flex items-center">
                    <LuSofa className="w-[14px] h-[14px] text-white" />
                    <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                      Adults: 5
                    </p>
                  </div>
                  <div className="flex items-center ml-[26px]">
                    <MdCloseFullscreen className="w-[14px] h-[14px] text-white border" />
                    <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                      Size: 95ft3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 py-7 xl:px-[30px] xl:py-10">
              <h3 className="text-white  text-lg md:text-xl 2xl:text-[22px] leading-[30px] font-normal font-Lora mb-6">
                Deluxe room
              </h3>
              <p className="text-lightGray text-sm sm:text-base leading-[26px] font-normal font-Lora">
                Located Square, The CozyStay Apartment Private Reteat in The
                Heart of Services In Professional Services.
              </p>

              <div className="flex items-center justify-between mt-10 mb-2">
                <p className="text-Lora text-[18px] leading-6 font-normal text-white">
                  <span className="text-khaki font-bold">$49</span> Per Night
                </p>
                <button className="btn-primary1">BOOK NOW</button>
              </div>
            </div>
          </div>
          {/* Slider -2 */}
          <div className="bg-lightBlack keen-slider__slide number-slide1 group">
            <div className="relative">
              <img
                src="/images/home-5/room-1.jpg"
                alt="room_images_one"
                className="w-full h-full"
              />
              <div className="ml-[-280px] group-hover:ml-0 transition-all duration-500 inline-block bg-lightBlack absolute -bottom-0">
                <div className="px-[30px] py-3 flex items-center ">
                  <div className="flex items-center">
                    <LuSofa className="w-[14px] h-[14px] text-white" />
                    <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                      Adults: 5
                    </p>
                  </div>
                  <div className="flex items-center ml-[26px]">
                    <MdCloseFullscreen className="w-[14px] h-[14px] text-white border" />
                    <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                      Size: 95ft3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 py-7 xl:px-[30px] xl:py-10">
              <h3 className="text-white  text-lg md:text-xl 2xl:text-[22px] leading-[30px] font-normal font-Lora mb-6">
                Deluxe room
              </h3>
              <p className="text-lightGray text-sm sm:text-base leading-[26px] font-normal font-Lora">
                Located Square, The CozyStay Apartment Private Reteat in The
                Heart of Services In Professional Services.
              </p>

              <div className="flex items-center justify-between mt-10 mb-2">
                <p className="text-Lora text-[18px] leading-6 font-normal text-white">
                  <span className="text-khaki font-bold">$49</span> Per Night
                </p>
                <button className="btn-primary1">BOOK NOW</button>
              </div>
            </div>
          </div>
          {/* slider-3 */}
          <div className="bg-lightBlack keen-slider__slide number-slide1 group">
            <div className="relative">
              <img
                src="/images/home-5/room-1.jpg"
                alt="room_images_one"
                className="w-full h-full"
              />
              <div className="ml-[-280px] group-hover:ml-0 transition-all duration-500 inline-block bg-lightBlack absolute -bottom-0">
                <div className="px-[30px] py-3 flex items-center ">
                  <div className="flex items-center">
                    <LuSofa className="w-[14px] h-[14px] text-white" />
                    <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                      Adults: 5
                    </p>
                  </div>
                  <div className="flex items-center ml-[26px]">
                    <MdCloseFullscreen className="w-[14px] h-[14px] text-white border" />
                    <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                      Size: 95ft3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 py-7 xl:px-[30px] xl:py-10">
              <h3 className="text-white  text-lg md:text-xl 2xl:text-[22px] leading-[30px] font-normal font-Lora mb-6">
                Deluxe room
              </h3>
              <p className="text-lightGray text-sm sm:text-base leading-[26px] font-normal font-Lora">
                Located Square, The CozyStay Apartment Private Reteat in The
                Heart of Services In Professional Services.
              </p>

              <div className="flex items-center justify-between mt-10 mb-2">
                <p className="text-Lora text-[18px] leading-6 font-normal text-white">
                  <span className="text-khaki font-bold">$49</span> Per Night
                </p>
                <button className="btn-primary1">BOOK NOW</button>
              </div>
            </div>
          </div>
          {/* slider-4 */}
          <div className="bg-lightBlack keen-slider__slide number-slide1 group">
            <div className="relative">
              <img
                src="/images/home-5/room-1.jpg"
                alt="room_images_one"
                className="w-full h-full"
              />
              <div className="ml-[-280px] group-hover:ml-0 transition-all duration-500 inline-block bg-lightBlack absolute -bottom-0">
                <div className="px-[30px] py-3 flex items-center ">
                  <div className="flex items-center">
                    <LuSofa className="w-[14px] h-[14px] text-white" />
                    <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                      Adults: 5
                    </p>
                  </div>
                  <div className="flex items-center ml-[26px]">
                    <MdCloseFullscreen className="w-[14px] h-[14px] text-white border" />
                    <p className="text-white text-sm leading-6 font-normal font-Lora ml-[10px]">
                      Size: 95ft3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 py-7 xl:px-[30px] xl:py-10">
              <h3 className="text-white  text-lg md:text-xl 2xl:text-[22px] leading-[30px] font-normal font-Lora mb-6">
                Deluxe room
              </h3>
              <p className="text-lightGray text-sm sm:text-base leading-[26px] font-normal font-Lora">
                Located Square, The CozyStay Apartment Private Reteat in The
                Heart of Services In Professional Services.
              </p>

              <div className="flex items-center justify-between mt-10 mb-2">
                <p className="text-Lora text-[18px] leading-6 font-normal text-white">
                  <span className="text-khaki font-bold">$49</span> Per Night
                </p>
                <button className="btn-primary1">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>

        {/* slider breckpoints */}
        <div className="mx-auto mt-6 md:mt-7 lg:mt-8 xl:mt-9 2xl:mt-10">
          {loaded && instanceRef.current && (
            <div className="dots flex items-center justify-center">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
