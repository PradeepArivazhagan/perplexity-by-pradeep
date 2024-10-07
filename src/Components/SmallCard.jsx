const SmallCard = () => {
  return (
    <div>
      <div>
        <img
          className="rounded-t-md w-full h-64 md:h-28 lg:h-40 object-cover object-top"
          src="https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
          alt="person"
        />
      </div>
      <div className="bg-[#f2f3ed] pt-4 pb-3 pl-4 pr-2 md:pt-3 md:pb-2 md:pl-3 md:pr-1 lg:pt-4 lg:pb-3 lg:pl-4 lg:pr-2  rounded-b-md border-2 border-[#edeee9]">
        <h1 className="text-base text-[#193134] font-semibold">
          David lync Interview Projects
        </h1>
        <p className="text-sm lg:text-base text-[#61615d] leading-6">
          Lorem ipsum, dolor sit amet consectetur..
        </p>
        <div className="mt-2 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-1">
            <div className="bg-red-500 w-4 h-4 rounded-full"></div>
            <h1 className="text-[#61615d] text-xs lg:text-sm">elymc</h1>
          </div>
          <div className="text-[#94958f] py-[8px] px-[10px] rounded-full hover:bg-[#e6e7e1]">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="bookmark"
              className="svg-inline--fa fa-bookmark fa-fw fa-1x w-[10px] lg:w-[11px]"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
