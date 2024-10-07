import name from "../assets/name.png";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [showBar, setShowBar] = useState(true);

  const [activeMenu, setActiveMenu] = useState("home");

  const handleSideBar = () => {
    setShowBar((prevState) => !prevState);
  };

  const onClickMenu = (activeMenuItem) => {
    setActiveMenu(activeMenuItem);
  };
  return (
    <>
      {showBar ? (
        <div
          className={`w-[280px] lg:w-[255px] hidden md:flex flex-col justify-between bg-[#f2f3ed] py-4 px-1 ease-in-out duration-700 ${
            showBar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          {/*Logo ans Menu Container*/}
          <div>
            <div className="flex flex-row items-center justify-between ml-2">
              <div className="flex flex-row items-center">
                <img className="w-10" src={logo} alt="logo" />
                <img
                  className="w-[100px] lg:w-[106px]"
                  src={name}
                  alt="perplexity"
                />
              </div>
              <button
                onClick={handleSideBar}
                className="p-1 lg:p-2 rounded-full hover:bg-[#e6e7e1]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.9em"
                  height="0.9em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#676862"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="M3 3v18"></path>
                    <path d="M21 12h-13.5"></path>
                    <path d="M7 12l7 7M7 12l7 -7"></path>
                  </g>
                </svg>
              </button>
            </div>

            <div className="bg-white my-4 lg:my-5 mx-3 flex flex-row items-center justify-between rounded-3xl py-2 pl-4 pr-2  border border-[#ebece6] hover:border-[1.5px] hover:border-[#25838c]">
              <h1 className="text-xs lg:text-sm text-[#63645e] font-medium">
                New Thread
              </h1>
              <div className="font-mono text-xs flex flex-row items-center gap-1">
                <h2 className="border py-[1px] px-[2px] rounded-sm border-[#ebece6]">
                  Ctrl
                </h2>
                <h2 className="border py-[1px] px-[5px] rounded-sm border-[#ebece6]">
                  I
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Link to="/">
                <button
                  onClick={() => onClickMenu("home")}
                  className={`w-full flex flex-row items-center gap-1 py-2 pl-4 hover:bg-[#e6e7e1] hover:text-[#1a3135] rounded-md ${
                    activeMenu === "home" ? "text-[#1a3135]" : "text-[#63645e]"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fak"
                    data-icon="search"
                    className="svg-inline--fa fa-search fa-fw fa-1x w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M236.8 288a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4zM434.9 398.7c-10.9 13.1-23 25.3-36.2 36.2l68.5 68.5 36.2-36.2-68.5-68.5zM236.8 32a204.8 204.8 0 1 1 0 409.6 204.8 204.8 0 1 1 0-409.6zm0 51.2a153.6 153.6 0 1 0 0 307.2 153.6 153.6 0 1 0 0-307.2z"
                    ></path>
                  </svg>
                  <h1 className="text-base font-medium">Home</h1>
                </button>
              </Link>
              <Link to="/discover">
                <button
                  onClick={() => onClickMenu("discover")}
                  className={`w-full flex flex-row items-center gap-1 py-2 pl-4 hover:bg-[#e6e7e1] hover:text-[#1a3135] rounded-md ${
                    activeMenu === "discover"
                      ? "text-[#1a3135]"
                      : "text-[#63645e]"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fak"
                    data-icon="discover"
                    className="svg-inline--fa fa-discover fa-fw fa-1x w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z"
                    ></path>
                  </svg>
                  <h1 className="text-base font-medium">Discover</h1>
                </button>
              </Link>
              <Link to="/library">
                <button
                  onClick={() => onClickMenu("library")}
                  className={`w-full flex flex-row items-center gap-1 py-2 pl-4 hover:bg-[#e6e7e1] hover:text-[#1a3135] rounded-md ${
                    activeMenu === "library"
                      ? "text-[#1a3135]"
                      : "text-[#63645e]"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fak"
                    data-icon="library"
                    className="svg-inline--fa fa-library fa-fw fa-1x w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M512 281.6H460.8V256C460.8 143 369 51.2 256 51.2S51.2 143 51.2 256v25.6H0V256C0 114.9 114.9 0 256 0S512 114.9 512 256v25.6zm-102.4 0H358.4V256c0-56.3-46.1-102.4-102.4-102.4s-102.4 46.1-102.4 102.4v25.6H102.4V256c0-84.8 68.8-153.6 153.6-153.6s153.6 68.8 153.6 153.6v25.6zm-51.2 51.2c-41.9 0-79 20.5-102.4 51.8c-23.4-31.4-60.5-51.8-102.4-51.8H0V384H153.6c42.2 0 76.8 34.6 76.8 76.8v25.6h51.2V460.8c0-42.2 34.6-76.8 76.8-76.8H512V332.8H358.4zM256 307.2a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4z"
                    ></path>
                  </svg>
                  <h1 className="text-base font-medium">Library</h1>
                </button>
              </Link>
              <Link to="/sign-in">
                <button
                  onClick={() => onClickMenu("sign-in")}
                  className={`w-full flex flex-row items-center gap-1 py-2 pl-4 hover:bg-[#e6e7e1] hover:text-[#1a3135] rounded-md ${
                    activeMenu === "sign-in"
                      ? "text-[#1a3135]"
                      : "text-[#63645e]"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="right-to-bracket"
                    className="svg-inline--fa fa-right-to-bracket fa-fw fa-1x w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M192 365.8L302 256 192 146.2l0 53.8c0 13.3-10.7 24-24 24L48 224l0 64 120 0c13.3 0 24 10.7 24 24l0 53.8zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6c-25.6 0-46.4-20.8-46.4-46.4l0-33.6-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l96 0 0-33.6c0-25.6 20.8-46.4 46.4-46.4c12.3 0 24.1 4.9 32.8 13.6L339.3 225.4c8.1 8.1 12.7 19.1 12.7 30.6zm-8 176l80 0c22.1 0 40-17.9 40-40l0-272c0-22.1-17.9-40-40-40l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                    ></path>
                  </svg>
                  <h1 className="text-base font-medium">Sign in</h1>
                </button>
              </Link>
            </div>

            <button className="text-sm lg:text-base bg-[#20808e] hover:bg-[#25838cd5] text-white my-4 mx-3 font-semibold py-2 px-[60px] lg:px-[62px] rounded-3xl">
              Sign Up
            </button>
          </div>
          {/*Try Pro Container*/}
          <div>
            <div className="ml-2">
              <h1 className="text-[#163238] text-sm font-semibold">Try Pro</h1>
              <p className="text-[#676862] text-sm mt-1">
                Upgrade for image upload, smarter AI, and more Pro Search.
              </p>
              <button className="mt-1 mb-3 py-2 px-3 rounded-md flex flex-row items-center gap-2 bg-[#e6e7e1] text-sm font-medium text-[#163238] hover:text-[#676862]">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="arrow-up-right"
                  className="svg-inline--fa fa-arrow-up-right fa-fw fa-1x w-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M328 96c13.3 0 24 10.7 24 24V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9L73 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l231-231H88c-13.3 0-24-10.7-24-24s10.7-24 24-24H328z"
                  ></path>
                </svg>
                <h1>Learn More</h1>
              </button>
            </div>

            <hr />

            <div className="pt-2 pl-1 flex flex-row items-center justify-between">
              <div className="py-1 px-2 flex flex-row items-center gap-2 text-[#63645e] hover:text-[#1a3135] text-sm hover:bg-[#e6e7e1] rounded-3xl">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="mobile-screen"
                  className="svg-inline--fa fa-mobile-screen fa-fw fa-1x w-[10px]"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M64 448c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16V368H64v80zm0-128H320V64c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16V320zM16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                  ></path>
                </svg>
                <h1 className="font-semibold">Download</h1>
              </div>
              <div className="flex flex-row items-center">
                <div className="p-2 rounded-full hover:bg-[#e6e7e1] text-[#63645e] hover:text-[#1a3135]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="x-twitter"
                    className="svg-inline--fa fa-x-twitter fa-fw fa-1x w-[14px]"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    ></path>
                  </svg>
                </div>
                <div className="p-2 rounded-full hover:bg-[#e6e7e1] text-[#63645e] hover:text-[#1a3135]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="discord"
                    className="svg-inline--fa fa-discord fa-fw fa-1x w-[18px]"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {showBar ? null : (
        <div className="w-[100px] hidden md:flex flex-col items-center justify-between bg-[#f2f3ed] py-4">
          {/*Menu Container*/}
          <div className="flex flex-col items-center w-full">
            <div>
              <img className="w-14" src={logo} alt="logo" />
            </div>

            <div className="my-5 rounded-full p-3 bg-[#e7e7e2] text-[#163238] hover:text-[#676862] w-fit">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="plus"
                className="svg-inline--fa fa-plus fa-fw fa-lg w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"
                ></path>
              </svg>
            </div>

            <div className="w-full">
              <Link to="/">
                <button
                  onClick={() => onClickMenu("home")}
                  className={`w-full flex flex-row items-center justify-center py-3 hover:bg-[#e6e7e1] hover:text-[#1a3135] ${
                    activeMenu === "home"
                      ? "text-[#1a3135] border-r-4 border-[#1a3135]"
                      : "text-[#63645e]"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fak"
                    data-icon="search"
                    className="svg-inline--fa fa-search fa-fw fa-1x w-5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M236.8 288a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4zM434.9 398.7c-10.9 13.1-23 25.3-36.2 36.2l68.5 68.5 36.2-36.2-68.5-68.5zM236.8 32a204.8 204.8 0 1 1 0 409.6 204.8 204.8 0 1 1 0-409.6zm0 51.2a153.6 153.6 0 1 0 0 307.2 153.6 153.6 0 1 0 0-307.2z"
                    ></path>
                  </svg>
                </button>
              </Link>
              <Link to="/discover">
                <button
                  onClick={() => onClickMenu("discover")}
                  className={`w-full flex flex-row items-center justify-center py-3 hover:bg-[#e6e7e1] hover:text-[#1a3135] ${
                    activeMenu === "discover"
                      ? "text-[#1a3135] border-r-4 border-[#1a3135]"
                      : "text-[#63645e]"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fak"
                    data-icon="discover"
                    className="svg-inline--fa fa-discover fa-fw fa-1x w-5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z"
                    ></path>
                  </svg>
                </button>
              </Link>
              <Link to="/library">
                <button
                  onClick={() => onClickMenu("library")}
                  className={`w-full flex flex-row items-center justify-center py-3 hover:bg-[#e6e7e1] hover:text-[#1a3135] ${
                    activeMenu === "library"
                      ? "text-[#1a3135] border-r-4 border-[#1a3135]"
                      : "text-[#63645e]"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fak"
                    data-icon="library"
                    className="svg-inline--fa fa-library fa-fw fa-1x w-5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M512 281.6H460.8V256C460.8 143 369 51.2 256 51.2S51.2 143 51.2 256v25.6H0V256C0 114.9 114.9 0 256 0S512 114.9 512 256v25.6zm-102.4 0H358.4V256c0-56.3-46.1-102.4-102.4-102.4s-102.4 46.1-102.4 102.4v25.6H102.4V256c0-84.8 68.8-153.6 153.6-153.6s153.6 68.8 153.6 153.6v25.6zm-51.2 51.2c-41.9 0-79 20.5-102.4 51.8c-23.4-31.4-60.5-51.8-102.4-51.8H0V384H153.6c42.2 0 76.8 34.6 76.8 76.8v25.6h51.2V460.8c0-42.2 34.6-76.8 76.8-76.8H512V332.8H358.4zM256 307.2a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4z"
                    ></path>
                  </svg>
                </button>
              </Link>
              <Link to="/sign-in">
                <button
                  onClick={() => onClickMenu("sign-in")}
                  className={`w-full flex flex-row items-center justify-center py-3 hover:bg-[#e6e7e1] hover:text-[#1a3135] ${
                    activeMenu === "sign-in"
                      ? "text-[#1a3135] border-r-4 border-[#1a3135]"
                      : "text-[#63645e]"
                  }`}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="right-to-bracket"
                    className="svg-inline--fa fa-right-to-bracket fa-fw fa-1x w-5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M192 365.8L302 256 192 146.2l0 53.8c0 13.3-10.7 24-24 24L48 224l0 64 120 0c13.3 0 24 10.7 24 24l0 53.8zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6c-25.6 0-46.4-20.8-46.4-46.4l0-33.6-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l96 0 0-33.6c0-25.6 20.8-46.4 46.4-46.4c12.3 0 24.1 4.9 32.8 13.6L339.3 225.4c8.1 8.1 12.7 19.1 12.7 30.6zm-8 176l80 0c22.1 0 40-17.9 40-40l0-272c0-22.1-17.9-40-40-40l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          {/*Expand Button*/}
          <button
            onClick={handleSideBar}
            className="rounded-full p-3 bg-[#e7e7e2] text-[#163238] hover:text-[#676862] w-fit"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="arrow-right-from-line"
              className="svg-inline--fa fa-arrow-right-from-line fa-fw fa-lg w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88V424c0 13.3 10.7 24 24 24s24-10.7 24-24L48 88zM440.4 273.5c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-12.9-7.6-17.5l-136-128c-9.7-9.1-24.8-8.6-33.9 1s-8.6 24.8 1 33.9L363.5 232H280l-128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l128 0h83.5l-91.9 86.5c-9.7 9.1-10.1 24.3-1 33.9s24.3 10.1 33.9 1l136-128z"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default SideBar;
