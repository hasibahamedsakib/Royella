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
      <div className="space-y-4">
        <hr className="text-gray" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/home-1/facilities-1.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="space-y-5 font-Garamond mr-[107px] relative">
            <h4 className="text-base font-semibold text-khaki leading-[26px] ">
              Fitness
            </h4>
            <h1 className="text-[32px] leading-[26px] font-semibold text-lightBlack">
              Gym Training Grounds
            </h1>

            <p className="font-Lora relative text-base text-gray leading-[26px] font-normal mt-[46px] mb-[40px] before:absolute absolute:h-[30px] absolute:left-0 absolute:top-[-35px] absolute:bg-gray absolute:w-[30px]">
              Rapidiously myocardinate cross-platform intellectual capital after
              model. Appropriately create interactive infrastructures after are
              Holisticly facilitate stand-alone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
