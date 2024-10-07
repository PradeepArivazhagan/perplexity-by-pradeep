const Askfollowup = () => {
  return (
    <div className=" fixed bottom-20 left-[20px] right-[20px] md:bottom-5 md:left-[230px] md:right-[150px] lg:bottom-10 lg:left-[21rem] lg:right-[33rem] bg-[#f2f3ed] p-2 rounded-full">
      <div className="bg-white border-2 border-[#e3e3dc] flex flex-row items-center py-2 px-3 md:py-3 md:px-4 rounded-full">
        <input
          type="text"
          placeholder="Ask follow-up"
          className="text-[#1f2f30] placeholder:text-[#767772] font-normal focus:outline-none w-[80%]"
        />
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row items-center gap-2">
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="block h-6 w-10 rounded-full bg-transparent border border-[#e7e8e3]"></div>
                <div className="dot absolute left-1 top-1 h-4 w-4 rounded-full bg-[#63645e] transition"></div>
              </div>
            </label>
            <h1 className="text-[#63645e] text-sm font-semibold">Pro</h1>
          </div>
          <div className="p-2 bg-[#edeee9] rounded-full text-[#63645e]">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="code-fork"
              className="svg-inline--fa fa-code-fork fa-fw fa-sm w-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32c0 35.8-23.5 66.1-56 76.3V192c0 22.1 17.9 40 40 40H304c22.1 0 40-17.9 40-40V156.3c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V192c0 48.6-39.4 88-88 88H248v75.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V280H144c-48.6 0-88-39.4-88-88V156.3C23.5 146.1 0 115.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM256 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Askfollowup;
