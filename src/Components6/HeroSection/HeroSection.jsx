import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./hero.css";

// Slider all function are hear...
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

// Main Slider content

const HeroSection = () => {
  // slide responsive and resize
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <section ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 bg-[url('/images/home-6/hero-bg-1.jpg')] h-[850px] grid items-center justify-start"></div>

        {/* <div className="keen-slider__slide number-slide2 bg-[url('/images/home-6/hero-bg-2.jpg')] h-[850px]"></div>
        <div className="keen-slider__slide number-slide3 bg-[url('/images/home-6/hero-bg-3.jpg')] h-[850px]"></div> */}
      </section>

      {/* indicator */}
      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide1">
          <img src="/images/home-6/hero-dot1.jpg" />
        </div>
        {/* <div className="keen-slider__slide number-slide2">
          <img src="/images/home-6/hero-dot2.jpg" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src="/images/home-6/hero-dot3.jpg" />
        </div> */}
      </div>
    </>
  );
};

export default HeroSection;
