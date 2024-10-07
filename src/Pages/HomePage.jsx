import BottomNavBar from "../Components/BottomNavBar";
import Home from "../Components/Home";
import SideBar from "../Components/SideBar";
import logo from "../assets/logo.png"
import name from "../assets/name.png"

const HomePage = () => {
  return (
    <div className="font-[Inter] h-screen flex flex-col md:flex-row">
      <div className="block md:hidden py-2 mx-auto w-[95%] border-b border-stone-200">
        <div className="flex flex-row items-center">
          <img className="w-12" src={logo} alt="logo" />
          <img className="w-[106px]" src={name} alt="perplexity" />
        </div>
      </div>
      <SideBar />
      <Home />
      <BottomNavBar />
    </div>
  );
};

export default HomePage;
