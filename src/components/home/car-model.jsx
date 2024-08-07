import { ChevronRight } from "../icons/chevron-right";

export const CarModel = ({ name, imageUrl, onCarSelect }) => {
  const handleClick = () => {
    onCarSelect(name);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl pt-10 ">{name}</div>
      <img src={imageUrl} className="w-[432px]" />
      <button
        onClick={handleClick}
        className="uppercase border border-black px-5 py-4 relative pr-44 text-[11px] font-medium"
      >
        Select{" "}
        <ChevronRight
          strokeWidth={2}
          className="absolute size-3 top-1/2 -translate-y-1/2 right-3.5 "
        ></ChevronRight>
      </button>
    </div>
  );
};
