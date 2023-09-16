import { FaCalendarPlus } from "react-icons/fa";

const BookingInfo = () => {
  return (
    <section className="Container bg-lightBlack grid grid-cols-2 md:grid-cols-4 items-center justify-between font-Lora h-[148px] border-t-[3px] border-t-khaki absolute left-0 right-0 -bottom-11 z-10">
      <div className="p-3">
        <p className="text-sm text-lightGray">Check In</p>
        <div className="flex items-center pt-[18px] ">
          <input
            type="text"
            className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white focus:border-none outline-0 w-[160px] text-base focus:ring-transparent"
            defaultValue="26 August, 2023"
          />
          <FaCalendarPlus className="w-4 h-4 text-khaki ml-20" />
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm text-lightGray">Check In</p>
        <div className="flex items-center pt-[18px] ">
          <input
            type="text"
            className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white focus:border-none outline-0 w-[160px] text-base focus:ring-transparent"
            defaultValue="26 August, 2023"
          />
          <FaCalendarPlus className="w-4 h-4 text-khaki ml-20" />
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm text-lightGray">Rooms</p>
        <div className="flex items-center pt-[18px]">
          <select className="w-[200px] bg-transparent border-0 outline-0 text-base text-white focus:border-khaki focus:outline-none focus:border-none focus:ring-transparent">
            <option className="bg-lightBlack text-base px-3 py-1 ">
              01 Rooms
            </option>
            <option className="bg-lightBlack text-base px-3 py-1 ">
              02 Rooms
            </option>
            <option className="bg-lightBlack text-base px-3 py-1 ">
              03 Rooms
            </option>
            <option className="bg-lightBlack text-base px-3 py-1 ">
              04 Rooms
            </option>
            <option className="bg-lightBlack text-base px-3 py-1 ">
              05 Rooms
            </option>
          </select>
        </div>
      </div>

      <div className="p-3">
        <p className="text-sm text-lightGray">Guests</p>
        <div className="flex items-center pt-[18px]">
          <select className="w-[200px] bg-transparent border-0 outline-0 text-base focus:outline-none focus:border-none focus:ring-transparent text-white">
            <option className="bg-lightBlack text-base px-3 py-1 text-white">
              01 Adult, 0 Child
            </option>
            <option className="bg-lightBlack text-base px-3 py-1 text-white">
              02 Adult, 0 Child
            </option>
            <option className="bg-lightBlack text-base px-3 py-1 text-white">
              02 Adult, 1 Child
            </option>
            <option className="bg-lightBlack text-base px-3 py-1 text-white">
              02 Adult, 2 Child
            </option>
            <option className="bg-lightBlack text-base px-3 py-1 text-white">
              05 Adult, 0 Child
            </option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default BookingInfo;
