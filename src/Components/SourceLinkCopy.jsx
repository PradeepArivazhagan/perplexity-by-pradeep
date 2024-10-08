const SourceLinkCopy = () => {
  return (
    <div className="mt-6 flex flex-row items-center gap-2">
      <div className="py-2 px-3 group flex flex-row items-center justify-between border border-slate-400 rounded-3xl">
        <div className="relative group hover:static flex flex-row items-center group-hover:gap-1">
          <div className="absolute group-hover:static left-0 w-4 h-4 rounded-full bg-red-400 border-2 border-white group-hover:border-0"></div>
          <div className="absolute group-hover:static left-3 w-4 h-4 rounded-full bg-blue-400 border-2 border-white group-hover:border-0"></div>
          <div className="absolute group-hover:static left-6 w-4 h-4 rounded-full bg-green-400 border-2 border-white group-hover:border-0"></div>
        </div>
        <p className="pl-14 group-hover:pl-2 left-8 text-xs">4 Sources</p>
      </div>
      <div className="p-[10px] rounded-full hover:bg-[#e6e7e1] text-[#63645e] hover:text-[#1a3135]">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="link"
          className="svg-inline--fa fa-link fa-fw fa-1x w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M580.3 267.2c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6L433.1 346.6c-37.4 37.4-98.2 37.4-135.6 0c-35.7-35.7-37.6-92.9-4.4-130.9l4.7-5.4c8.7-10 7.7-25.1-2.3-33.9s-25.1-7.7-33.9 2.3l-4.7 5.4c-49.8 57-46.9 142.9 6.6 196.4c56.2 56.2 147.3 56.2 203.5 0L580.3 267.2zM59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6L207 165.4c37.4-37.4 98.1-37.4 135.6 0c35.7 35.7 37.6 92.9 4.4 130.9l-5.4 6.1c-8.7 10-7.7 25.1 2.3 33.9s25.1 7.7 33.9-2.3l5.4-6.1c49.9-57 47-142.9-6.5-196.5c-56.2-56.2-147.3-56.2-203.5 0L59.7 244.8z"
          ></path>
        </svg>
      </div>
      <div className="p-[10px] rounded-full hover:bg-[#e6e7e1] text-[#63645e] hover:text-[#1a3135]">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="copy"
          className="svg-inline--fa fa-copy fa-fw fa-1x w-3"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SourceLinkCopy;
