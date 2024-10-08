import BottomNavBar from "../Components/BottomNavBar";
import Discover from "../Components/Discover";
import SideBar from "../Components/SideBar";

const DiscoverPage = () => {
  return (
    <div className="h-screen font-[Inter] flex flex-col md:flex-row">
      <SideBar />
      <Discover />
      <BottomNavBar />
    </div>
  );
};

export default DiscoverPage;
