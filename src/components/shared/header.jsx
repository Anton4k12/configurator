import { ChevronRight } from "../icons/chevron-right";
import { MapPin } from "../icons/map-pin";
import { MaseratiLogo } from "../icons/maserati-logo";

export const Header = () => {
  return (
    <header className=" flex justify-between py-6 px-5">
      <div aria-label="navigation buttons" className="flex items-center">
        <div className="px-5 font-semibold text-sm cursor-pointer">Models</div>
        <div className="px-5 font-semibold text-sm cursor-pointer">Brand</div>
        <div className="px-5 font-semibold text-sm cursor-pointer">
          Ownership
        </div>
        <div className="px-5 font-semibold text-sm cursor-pointer">
          Quick Find
        </div>
      </div>

      <div aria-label="logo" className="cursor-pointer">
        <MaseratiLogo></MaseratiLogo>
      </div>

      <div aria-label="special buttons" className="flex gap-5 items-center ">
        <button className=" cursor-pointer uppercase border border-black px-4 py-2.5 text-xs relative pr-16 font-medium">
          Dealer locator{" "}
          <ChevronRight className="absolute size-4 top-1/2 -translate-y-1/2 right-3"></ChevronRight>
        </button>
        <div className="flex items-center gap-7">
          <button className=" cursor-pointer uppercase bg-[rgb(255,200,69)] px-4 py-2.5 text-xs relative pr-16 font-medium">
            Test drive{" "}
            <ChevronRight className="absolute size-4 top-1/2 -translate-y-1/2 right-3"></ChevronRight>
          </button>
          <MapPin className="size-6 cursor-pointer"></MapPin>
        </div>
      </div>
    </header>
  );
};
