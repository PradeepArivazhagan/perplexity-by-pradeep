import SideBar from "../Components/SideBar";
import BottomNavBar from "../Components/BottomNavBar";
import SignIn from "../Components/SignIn";
import Header from "../Components/Header";

const SignInPage = () => {
  return (
    <div className="font-[Inter] flex flex-col md:flex-row">
      <Header />
      <SideBar />
      <SignIn />
      <BottomNavBar />
    </div>
  );
};

export default SignInPage;
