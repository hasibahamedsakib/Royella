import { HiArrowLongRight } from "react-icons/hi2";

const Facilities = () => {
  return (
    <section className="Container py-[120px]">
      {/* section title and button */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-5 w-[450px] font-Garamond">
          <h5 className="text-base text-khaki leading-[26px] font-medium">
            FACILITIES
          </h5>
          <h1 className="text-[38px] leading-[44px] text-lightBlack font-semibold">
            ENJOY COMPLETE & BEST QUALITY FACILITIES
          </h1>
        </div>
        <div>
          <button className="btn-items">view more item</button>
        </div>
      </div>
      {/* facilities container */}
      <div className="">
        {/* facilities section -1  */}
        <hr className="text-gray my-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="relative w-full h-[100%] pr-[30px]">
            <img
              src="/images/home-1/facilities-1.png"
              alt=""
              className="w-full h-full"
            />
            <div className=" absolute -top-[0px] -right-[7%]">
              <h2 className="text-[40px] leading-[38px] text-khaki">01</h2>
            </div>
          </div>
          <div className="relative font-Garamond ml-[107px]  h-full">
            <h4 className="text-base font-semibold text-khaki leading-[26px] pb-3 ">
              Fitness
            </h4>
            <h1 className="text-[32px] leading-[26px] font-semibold text-lightBlack">
              Gym Training Grounds
            </h1>

            <p className="font-Lora text-base text-gray leading-[26px] font-normal mt-[46px] mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
              Rapidiously myocardinate cross-platform intellectual capital after
              model. Appropriately create interactive infrastructures after are
              Holisticly facilitate stand-alone
            </p>
            <HiArrowLongRight size={30} />
          </div>
        </div>

        {/* facilities section - 2 */}
        <hr className="text-gray mb-10 mt-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className=" font-Garamond mr-[110px]  h-full">
            <h4 className="text-base font-semibold text-khaki leading-[26px] pb-3 ">
              Fitness
            </h4>
            <h1 className="text-[32px] leading-[26px] font-semibold text-lightBlack">
              Gym Training Grounds
            </h1>

            <p className="font-Lora relative text-base text-gray leading-[26px] font-normal mt-[46px] mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
              Rapidiously myocardinate cross-platform intellectual capital after
              model. Appropriately create interactive infrastructures after are
              Holisticly facilitate stand-alone
            </p>
            <HiArrowLongRight size={30} />
          </div>

          <div className="w-full h-[100%] pr-[30px] relative">
            <img
              src="/images/home-1/facilities-thumb-2.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className=" absolute -top-[0px] -left-[12%]">
              <h1 className="text-[40px] leading-[38px] text-khaki">02</h1>
            </div>
          </div>
        </div>
        {/* facilities section - 3 */}
        <hr className="text-gray my-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="relative w-full h-[100%] pr-[30px]">
            <img
              src="/images/home-1/facilities-thumb-3.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className=" absolute -top-[0px] -right-[7%]">
              <h2 className="text-[40px] leading-[38px] text-khaki">03</h2>
            </div>
          </div>
          <div className=" font-Garamond ml-[107px] relative h-full">
            <h4 className="text-base font-semibold text-khaki leading-[26px] pb-3 ">
              Fitness
            </h4>
            <h1 className="text-[32px] leading-[26px] font-semibold text-lightBlack">
              Gym Training Grounds
            </h1>

            <p className="font-Lora text-base text-gray leading-[26px] font-normal mt-[46px] mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
              Rapidiously myocardinate cross-platform intellectual capital after
              model. Appropriately create interactive infrastructures after are
              Holisticly facilitate stand-alone
            </p>
            <HiArrowLongRight size={30} />
          </div>
        </div>

        {/* facilities section - 4 */}
        <hr className="text-gray mb-10 mt-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className=" font-Garamond mr-[110px]  h-full">
            <h4 className="text-base font-semibold text-khaki leading-[26px] pb-3 ">
              Fitness
            </h4>
            <h1 className="text-[32px] leading-[26px] font-semibold text-lightBlack">
              Gym Training Grounds
            </h1>

            <p className="font-Lora relative text-base text-gray leading-[26px] font-normal mt-[46px] mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
              Rapidiously myocardinate cross-platform intellectual capital after
              model. Appropriately create interactive infrastructures after are
              Holisticly facilitate stand-alone
            </p>
            <HiArrowLongRight size={30} />
          </div>

          <div className="w-full h-[100%] pr-[30px] relative">
            <img
              src="/images/home-1/facilities-thumb-4.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className=" absolute -top-[0px] -left-[12%]">
              <h1 className="text-[40px] leading-[38px] text-khaki">04</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
