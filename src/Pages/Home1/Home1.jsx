import HeroSection from "../../Components/HeroSection/HeroSection";
import HotelAndFacilities from "../../Components/HotelAndFacilities/HotelAndFacilities";
import HotelAndResort from "../../Components/HotelAndResort/HotelAndResort";
import Rooms from "../../Components/Rooms/Rooms";

const Home1 = () => {
  return (
    <>
      <HeroSection />
      <Rooms />
      <HotelAndResort />
      <HotelAndFacilities />
    </>
  );
};

export default Home1;
