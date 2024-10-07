import Article from "../Components/Article";
import BottomNavBar from "../Components/BottomNavBar";
import SideBar from "../Components/SideBar";

const ArticlePage = () => {
  return (
    <div className="font-[Inter] h-screen flex flex-col md:flex-row">
      <SideBar />
      <Article />
      <BottomNavBar />
    </div>
  );
};

export default ArticlePage;
