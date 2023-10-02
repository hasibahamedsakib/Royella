import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Places = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="py-20 2xl:py-[120px] dark:bg-lightBlack">
      <div className="Container">
        {/* section heading */}
        <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[280px] font-Garamond">
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white mt-[23px] mb-[12px] font-bold">
            Royella Is Waiting For You!
          </h1>
          <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base mb-[35px]">
            A wonderful serenity has taken possession of my entire soul, like
            these royella dolor consectetur adipiscing elit dos eiusmod tempor
            incididunt resort sweet spring
          </p>
          <button className="btn-primary">MORE OUR PLACES</button>
        </div>
      </div>
      {/* section Content */}
      <div className="mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <img
            src="/images/home-2/places-1.png"
            onClick={() => setToggler(!toggler)}
            alt=""
          />

          <img
            src="/images/home-2/places-2.png"
            onClick={() => setToggler(!toggler)}
            alt=""
          ></img>
          <img
            src="/images/home-2/places-3.png"
            onClick={() => setToggler(!toggler)}
            alt=""
          ></img>

          {/* FsLight-box all images. */}
          <FsLightbox
            toggler={toggler}
            sources={[
              "/images/home-2/places-1.png",
              "/images/home-2/places-2.png",
              "/images/home-2/places-3.png",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Places;
