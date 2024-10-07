import logo from "../assets/logo.png"
import name from "../assets/name.png"

const Header = () => {
  return (
    <div className="block md:hidden py-2 mx-auto w-[95%] border-b border-stone-200">
      <div className="flex flex-row items-center">
        <img className="w-12" src={logo} alt="logo" />
        <img className="w-[106px]" src={name} alt="perplexity" />
      </div>
    </div>
  );
};

export default Header;
