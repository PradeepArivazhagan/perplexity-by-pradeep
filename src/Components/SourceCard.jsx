const SourceCard = () => {
  return (
    <div className="bg-[#eaeae7] hover:bg-[#d2d2d2] text-[#14333a] p-2 rounded-md">
      <p className="text-xs font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </p>
      <div className="mt-2 flex flex-row items-center gap-1">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <h1 className="text-xs">elymc</h1>
      </div>
    </div>
  );
};

export default SourceCard;
