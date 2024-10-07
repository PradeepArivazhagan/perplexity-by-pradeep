import BottomNavBar from "../Components/BottomNavBar";
import Header from "../Components/Header";
import Home from "../Components/Home";
import SideBar from "../Components/SideBar";

const HomePage = () => {
  return (
    <div className="font-[Inter] h-screen flex flex-col md:flex-row">
      <Header/>
      <SideBar />
      <Home />
      <BottomNavBar />
    </div>
  );
};

export default HomePage;
