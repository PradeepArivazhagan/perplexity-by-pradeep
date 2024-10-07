import BottomNavBar from "../Components/BottomNavBar";
import Header from "../Components/Header";
import Library from "../Components/Library";
import SideBar from "../Components/SideBar";

const LibraryPage = () => {
  return (
    <div className="font-[Inter] h-screen flex flex-col md:flex-row">
      <Header/>
      <SideBar />
      <Library />
      <BottomNavBar />
    </div>
  );
};

export default LibraryPage;
