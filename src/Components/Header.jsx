import logo from "../assets/logo.png";
import name from "../assets/name.png";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between md:hidden py-2 mx-auto w-[95%] border-b border-stone-200">
      <div className="flex flex-row items-center">
        <img className="w-12" src={logo} alt="logo" />
        <img className="w-[106px]" src={name} alt="perplexity" />
      </div>
      <button className="text-xs bg-[#20808e] hover:bg-[#25838cd5] text-white font-semibold py-2 px-3 rounded-full flex flex-row items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M1 18q.225-2.675 1.638-4.925T6.4 9.5L4.55 6.3q-.15-.225-.075-.475T4.8 5.45q.2-.125.45-.05t.4.3L7.5 8.9Q9.65 8 12 8t4.5.9l1.85-3.2q.15-.225.4-.3t.45.05q.25.125.325.375t-.075.475L17.6 9.5q2.35 1.325 3.762 3.575T23 18zm6-2.75q.525 0 .888-.363T8.25 14t-.363-.888T7 12.75t-.888.363T5.75 14t.363.888t.887.362m10 0q.525 0 .888-.363T18.25 14t-.363-.888T17 12.75t-.888.363t-.362.887t.363.888t.887.362"
          ></path>
        </svg>
        <h1>Get App</h1>
      </button>
    </div>
  );
};

export default Header;
