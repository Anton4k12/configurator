import { ChevronRight } from "../icons/chevron-right";

export const Car = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl pt-10 ">{name}</div>
      <img src={imageUrl} className="w-[432px] h-[215px]" />
      <button className="uppercase border border-black px-5 py-4 relative pr-44 text-[11px] font-medium">
        Select{" "}
        <ChevronRight className="absolute size-4 top-1/2 -translate-y-1/2 right-3.5"></ChevronRight>
      </button>
    </div>
  );
};
