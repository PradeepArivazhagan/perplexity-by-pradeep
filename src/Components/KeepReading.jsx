const KeepReading = () => {
  return (
    <div className="hover:opacity-75 border-2 border-[#e7e6e1] rounded-md p-1 bg-[#f2f3ed] shadow-sm">
      <img
        className="rounded-md h-16 w-full object-cover"
        src="https://pplx-res.cloudinary.com/image/fetch/s--1nxCwBbD--/t_thumbnail/https://static.euronews.com/articles/stories/08/63/24/34/1200x675_cmsv2_af0123b5-c8f5-5254-be63-da318ab2425e-8632434.jpg"
        alt="random"
      />
      <div className="pt-2 pb-1 px-1 flex flex-col">
        <p className="text-sm font-semibold leading-5">
          David Lynch rumours
        </p>
        <p className="text-xs mt-1 text-[#63645e]">
          David Lynch Retirement rumours Retirement...
        </p>
        <div className="mt-2 flex flex-row items-center gap-1 text-[#63645e] ml-auto">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="eye"
            className="svg-inline--fa fa-eye fa-fw fa-sm w-3"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
            ></path>
          </svg>
          <h1 className="text-xs">6,441</h1>
        </div>
      </div>
    </div>
  );
};

export default KeepReading;
