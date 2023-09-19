const HotelAndFacilities = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const featureBoxes = document.querySelectorAll(".single-feature-box");

    featureBoxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        // Add the 'active' class to the current element
        box.classList.add("active");

        // Remove the 'active' class from other elements
        featureBoxes.forEach((otherBox) => {
          if (otherBox !== box) {
            otherBox.classList.remove("active");
          }
        });
      });
    });
  });

  return (
    <section className="bg-lightBlack py-[115px]">
      <div className="Container">
        <div className="bg-[url('/images/home-1/section-shape2.png')] bg-no-repeat bg-center bg-opacity-[0.07] text-center 2xl:px-[335px]  mx-auto px-5 ">
          <img
            src="/images/home-1/section-shape1.png"
            alt="room_section_logo"
            className="w-[50px] h-[50px] mx-auto before:w- group[100px] after:w-[100px] relative before group:absolute after:absolute before:h- group[20px] after:h-[20px] before:bg group-lightBlack after:bg-lightBlack before:left group-10 after:right-10 before:top group-0 after:bottom-0"
          />
          <h1 className="text-[38px] leading-[52px] text-white mt-[30px] mb-[24px] font-Garamond font-semibold uppercase">
            HOTEL’S FACILITIES
          </h1>
          <p className="font-Lora leading-[26px] text-lightGray font-normal text-base">
            Proactively morph optimal infomediaries rather than accurate
            expertise. Intrinsicly progressive resources rather than
            resource-leveling
          </p>
        </div>
        {/* HOTEL’S FACILITIES content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-[26px] pt-[60px]">
          <div className="pt-[37px] pb-[27px] border border-gray-700 text-center transition-all duration-500 relative z-10 before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[114%] group after:">
            <div>
              <img
                src="/images/home-1/feature-1.png"
                alt=""
                className="mx-auto"
              />
            </div>
            <div className="">
              <h4 className="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[63px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[100px] before:top-[-42px] before:bg-slate-500 before:group-hover:bg-khaki">
                Room Services
              </h4>
            </div>
          </div>

          {/* facilities-2 */}
          <div className="pt-[37px] pb-[27px] border border-gray-700 text-center transition-all duration-500 relative z-10 before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[114%] after:">
            <div>
              <img
                src="/images/home-1/feature-1.png"
                alt=""
                className="mx-auto"
              />
            </div>
            <div className="">
              <h4 className="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[63px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[100px] before:top-[-42px] before:bg-slate-500 before:group-hover:bg-khaki">
                Room Services
              </h4>
            </div>
          </div>

          {/* facilities-3 */}
          <div className="pt-[37px] pb-[27px] border border-gray-700 text-center transition-all duration-500 relative z-10 before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[114%] group after:">
            <div>
              <img
                src="/images/home-1/feature-1.png"
                alt=""
                className="mx-auto"
              />
            </div>
            <div className="">
              <h4 className="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[63px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[100px] before:top-[-42px] before:bg-slate-500 before:group-hover:bg-khaki">
                Room Services
              </h4>
            </div>
          </div>
          {/* facilities-4 */}
          <div className="pt-[37px] pb-[27px] border border-gray-700 text-center transition-all duration-500 relative z-10 before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[114%] group after:">
            <div>
              <img
                src="/images/home-1/feature-1.png"
                alt=""
                className="mx-auto"
              />
            </div>
            <div className="">
              <h4 className="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[63px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[100px] before:top-[-42px] before:bg-slate-500 before:group-hover:bg-khaki">
                Room Services
              </h4>
            </div>
          </div>

          {/* facilities-5 */}
          <div className="pt-[37px] pb-[27px] border border-gray-700 text-center transition-all duration-500 relative z-10 before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[114%] group after:">
            <div>
              <img
                src="/images/home-1/feature-1.png"
                alt=""
                className="mx-auto"
              />
            </div>
            <div className="">
              <h4 className="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[63px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[100px] before:top-[-42px] before:bg-slate-500 before:group-hover:bg-khaki">
                Room Services
              </h4>
            </div>
          </div>
          {/* facilities-6 */}
          <div className="pt-[37px] pb-[27px] border border-gray-700 text-center transition-all duration-500 relative z-10 before:bg-[url('/images/home-1/feature-imgs-1.jpg')] before:absolute before:w-0 before:h-full before:left-[-222px] before:top-0 before:transition-all before:duration-500 before:bg-cover before:bg-center  hover:before:w-[114%] group after:">
            <div>
              <img
                src="/images/home-1/feature-1.png"
                alt=""
                className="mx-auto"
              />
            </div>
            <div className="">
              <h4 className="text-[22px] leading-[52px] font-Garamond text-white font-medium mt-[63px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[100px] before:top-[-42px] before:bg-slate-500 before:group-hover:bg-khaki">
                Room Services
              </h4>
            </div>
          </div>
          {/* <div className={styles.single_feature_box}>
            <div className={styles.feature_icon}>
              <img src="/images/home-1/feature-1.png" alt="" />
            </div>
            <div className={styles.feature_content}>
              <h4>Room Services</h4>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HotelAndFacilities;