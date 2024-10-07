import What from "./What";

const Home = () => {
  return (
    <div className="h-screen w-[100%] bg-[#f2f3ed] lg:py-2 lg:pr-3">
      <div className="relative py-6 md:py-0 h-full bg-white lg:rounded-md md:border border-[#ebece6]">
        <div className="h-full flex flex-col items-center">
          <div className="max-md:mb-auto md:mt-auto w-[90%] md:w-[80%] lg:w-[50%] box-content">
            <h1 className="text-4xl text-[#163238] text-center">
              Where Knowledge begins
            </h1>

            <div className="p-2 mt-10 border-2 border-[#e7e8e3] w-[100%] rounded-md focus:outline-2">
              <textarea
                type="text"
                placeholder="Ask anything..."
                className="py-2 px-3 focus:outline-none text-[#1f2f30] font-normal w-full "
              />
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <button className="py-1 px-2 rounded-3xl flex flex-row items-center gap-1 hover:bg-[#e6e7e1] text-[#63645e] hover:text-[#1a3135]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="bars-filter"
                      className="svg-inline--fa fa-bars-filter fa-fw fa-1x w-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 112 0 101.3 0 88zM64 248c0-13.3 10.7-24 24-24H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24zM288 408c0 13.3-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24z"
                      ></path>
                    </svg>
                    <h1 className="font-medium text-sm">Focus</h1>
                  </button>
                  <button className="py-1 px-2 rounded-3xl flex flex-row items-center gap-1 hover:bg-[#e6e7e1] text-[#63645e] hover:text-[#1a3135]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="circle-plus"
                      className="svg-inline--fa fa-circle-plus fa-fw fa-1x w-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344c0 13.3 10.7 24 24 24s24-10.7 24-24V280h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V168c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"
                      ></path>
                    </svg>
                    <h1 className="font-medium text-sm">Attach</h1>
                  </button>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="flex flex-row items-center gap-2">
                    <label className="flex cursor-pointer select-none items-center">
                      <div className="relative">
                        <input type="checkbox" className="sr-only" />
                        <div className="block h-6 w-10 rounded-full bg-transparent border border-[#e7e8e3]"></div>
                        <div className="dot absolute left-1 top-1 h-4 w-4 rounded-full bg-[#63645e] transition"></div>
                      </div>
                    </label>
                    <h1 className="text-[#63645e] text-sm font-semibold">
                      Pro
                    </h1>
                  </div>
                  <div className="p-3 bg-[#edeee9] rounded-full text-[#bcbcb4]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="arrow-right"
                      className="svg-inline--fa fa-arrow-right fa-fw fa-1x w-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="border border-[#ebece6] flex flex-row items-center py-2 px-1 gap-2 rounded-md">
                <div className="py-1 px-2 bg-[#f2f3ed] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 48 48"
                  >
                    <g fill="none" strokeWidth={2}>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M6 42L42 42"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M6 36L42 36"
                      ></path>
                      <path
                        fill="#7792b6"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 25C9 16.7157 15.7157 10 24 10C32.2843 10 39 16.7157 39 25V36H9L9 25Z"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        d="M17 25V29"
                      ></path>
                      <path
                        stroke="#000"
                        d="M28 10V8C28 5.79086 26.2091 4 24 4V4C21.7909 4 20 5.79086 20 8V10"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h1 className="text-sm">Healthiest cooking oils</h1>
              </div>
              <div className="border border-[#ebece6] flex flex-row items-center py-2 px-1 gap-2 rounded-md">
                <div className="py-1 px-2 bg-[#f2f3ed] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 48 48"
                  >
                    <g fill="none" strokeLinecap="round" strokeWidth={2}>
                      <rect
                        width={40}
                        height={30}
                        x={4}
                        y={10}
                        fill="#2f88ff"
                        stroke="#000"
                        strokeLinejoin="round"
                        rx={2}
                      ></rect>
                      <path stroke="#000" d="M14 6V14"></path>
                      <path stroke="#fff" d="M25 23L14 23"></path>
                      <path stroke="#fff" d="M34 31L14 31"></path>
                      <path stroke="#000" d="M34 6V14"></path>
                    </g>
                  </svg>
                </div>
                <h1 className="text-sm">Upcoming tech conferences</h1>
              </div>
              <div className="border border-[#ebece6] flex flex-row items-center py-2 px-1 gap-2 rounded-md">
                <div className="py-1 px-2 bg-[#f2f3ed] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 48 48"
                  >
                    <g fill="none" strokeLinejoin="round" strokeWidth={2}>
                      <path
                        fill="#ff0000"
                        stroke="#000"
                        d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        d="M36 8V40"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        d="M12 8V40"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        d="M38 18H44"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        d="M38 30H44"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        d="M4 18H10"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M4 16V20"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M9 8H15"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M9 40H15"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M33 8H39"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M33 40H39"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        d="M4 30H10"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M4 28V32"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M44 28V32"
                      ></path>
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M44 16V20"
                      ></path>
                      <path
                        fill="black"
                        stroke="#fff"
                        d="M21 19L29 24L21 29V19Z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h1 className="text-sm">
                  Most popular Youtube creators in 2024
                </h1>
              </div>
              <div className="border border-[#ebece6] flex flex-row items-center py-2 px-1 gap-2 rounded-md">
                <div className="py-1 px-2 bg-[#f2f3ed] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 48 48"
                  >
                    <g fill="none">
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 42H44"
                      ></path>
                      <rect
                        width={8}
                        height={16}
                        x={8}
                        y={26}
                        fill="#ad6e00"
                        stroke="#000"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        rx={2}
                      ></rect>
                      <path
                        stroke="#fff"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 34H13"
                      ></path>
                      <rect
                        width={24}
                        height={38}
                        x={16}
                        y={4}
                        fill="#ad6e00"
                        stroke="#000"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        rx={2}
                      ></rect>
                      <rect
                        width={4}
                        height={4}
                        x={22}
                        y={10}
                        fill="#fff"
                      ></rect>
                      <rect
                        width={4}
                        height={4}
                        x={30}
                        y={10}
                        fill="#fff"
                      ></rect>
                      <rect
                        width={4}
                        height={4}
                        x={22}
                        y={17}
                        fill="#fff"
                      ></rect>
                      <rect
                        width={4}
                        height={4}
                        x={30}
                        y={17}
                        fill="#fff"
                      ></rect>
                      <rect
                        width={4}
                        height={4}
                        x={30}
                        y={24}
                        fill="#fff"
                      ></rect>
                      <rect
                        width={4}
                        height={4}
                        x={30}
                        y={31}
                        fill="#fff"
                      ></rect>
                    </g>
                  </svg>
                </div>
                <h1 className="text-sm">City with the most bike lanes</h1>
              </div>
            </div>
          </div>

          <ul className="hidden md:flex flex-row items-center gap-3 mt-auto mb-3">
            <li className="text-[#63645e] text-sm">Pro</li>
            <li className="text-[#63645e] text-sm">Enterprise</li>
            <li className="text-[#63645e] text-sm">Playground</li>
            <li className="text-[#63645e] text-sm">Blog</li>
            <li className="text-[#63645e] text-sm">Encyclopedia</li>
            <li className="text-[#63645e] text-sm">Careers</li>
            <li className="text-[#63645e] text-sm">English</li>
          </ul>
          <What />
        </div>
      </div>
    </div>
  );
};

export default Home;
