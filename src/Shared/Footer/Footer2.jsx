const Footer2 = () => {
  return (
    <footer className="lg:pt-[100px] pb-[60px] dark:bg-lightBlack ">
      <div className=" py-20 2xl:py-[120px]">
        <div className="Container grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-[70px] px-5">
          {/* logo and text */}
          <div className="px-5">
            <img
              src="/images/home-2/footer-logo.png"
              className="dark:hidden"
              alt=""
            />
            <img
              src="/images/home-2/dark_footer_logo.png"
              className="hidden dark:block"
              alt=""
            />
            <p className="text-sm sm:text-base leading-[26px] font-Lora font-normal text-gray dark:text-lightGray mt-6 lg:mt-[35px]">
              Show beauty your location, showse design your rooms, present the
              facities an todays features of your hotel and offer tos recove
              method to book a room.
            </p>
          </div>
          {/* contact info */}
          <div className="px-5">
            <h4 className="text-lg leading-[46px] font-Garamond font-bold text pb-9 text-lightBlack dark:text-white">
              CONTACT US
            </h4>
            <ul className="">
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-base mb-[15px] hover:text-khaki transition-all duration-300">
                support@example.com
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-base mb-[15px] hover:text-khaki transition-all duration-300">
                Bangladesh Mahanagari <br />
                Dhaka
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-base mb-[15px] hover:text-khaki transition-all duration-300">
                1-800-123-4567
              </li>
            </ul>
          </div>
          {/* information*/}
          <div className="px-5">
            <h4 className="text-lg leading-[46px] font-Garamond font-bold text pb-9 text-lightBlack dark:text-white">
              INFORMATION
            </h4>
            <ul className="">
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-base mb-[15px] hover:text-khaki transition-all duration-300">
                Our Location
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-base mb-[15px] hover:text-khaki transition-all duration-300">
                Career
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-base mb-[15px] hover:text-khaki transition-all duration-300">
                Customer support
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-base mb-[15px] hover:text-khaki transition-all duration-300">
                About Us
              </li>
            </ul>
          </div>
          {/* gallery*/}
          <div className="px-5">
            <h4 className="text-lg leading-[46px] font-Garamond font-bold text pb-9 text-lightBlack dark:text-white">
              INSTAGRAM
            </h4>
            <div className="grid grid-cols-3 gap-x-[10px] gap-y-[10px] py-[30px] content-center w-[250px]">
              <img src="/images/home-2/gallery-1.jpg" alt="" />
              <img src="/images/home-2/gallery-2.jpg" alt="" />
              <img src="/images/home-2/gallery-3.jpg" alt="" />
              <img src="/images/home-2/gallery-4.jpg" alt="" />
              <img src="/images/home-2/gallery-5.jpg" alt="" />
              <img src="/images/home-2/gallery-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* bottom footer */}

      <div className="bg-whiteSmoke dark:bg-normalBlack py-7">
        <div className="Container flex flex-col sm:flex-row items-center justify-between">
          <p
            className="text-sm sm:text-base text-gray dark:text-lightGray
           font-Lora font-normal"
          >
            © 2023 Royella. All Rights Reserved.
          </p>
          <p
            className="text-sm sm:text-base text-gray dark:text-lightGray
           font-Lora font-normal"
          >
            Developed by: Dream-IT Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
