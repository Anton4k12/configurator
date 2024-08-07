import { ChevronRight } from "../icons/chevron-right";

export const CarModel = ({ name, imageUrl, onCarSelect }) => {
  const handleClick = () => {
    onCarSelect(name);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="pt-10 text-2xl">{name}</div>
      <img src={imageUrl} className="w-[432px]" />
      <button
        onClick={handleClick}
        className="relative border border-black px-5 py-4 pr-44 text-[11px] font-medium uppercase"
      >
        Select{" "}
        <ChevronRight
          strokeWidth={2}
          className="absolute right-3.5 top-1/2 size-3 -translate-y-1/2"
        ></ChevronRight>
      </button>
    </div>
  );
};
