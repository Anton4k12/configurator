import { ChevronRight } from "../icons/chevron-right";
import { MapPin } from "../icons/map-pin";
import { MaseratiLogo } from "../icons/maserati-logo";

export const Header = ({ color }) => {
  return (
    <header
      style={{ backgroundColor: color }}
      className="flex justify-between py-6"
    >
      <div aria-label="navigation buttons" className="flex items-center">
        <div className="cursor-pointer px-5 text-sm font-semibold">Models</div>
        <div className="cursor-pointer px-5 text-sm font-semibold">Brand</div>
        <div className="cursor-pointer px-5 text-sm font-semibold">
          Ownership
        </div>
        <div className="cursor-pointer px-5 text-sm font-semibold">
          Quick Find
        </div>
      </div>

      <div aria-label="logo" className="cursor-pointer">
        <MaseratiLogo color="#000000"></MaseratiLogo>
      </div>

      <div
        aria-label="special buttons"
        className="flex items-center gap-5 px-5"
      >
        <button className="relative cursor-pointer border border-black px-4 py-2.5 pr-16 text-xs font-medium uppercase">
          Dealer locator{" "}
          <ChevronRight className="absolute right-3 top-1/2 size-3 -translate-y-1/2"></ChevronRight>
        </button>
        <div className="flex items-center gap-7">
          <button className="relative cursor-pointer border border-[rgb(255,200,69)] bg-[rgb(255,200,69)] px-4 py-2.5 pr-16 text-xs font-medium uppercase">
            Test drive{" "}
            <ChevronRight className="absolute right-3 top-1/2 size-3 -translate-y-1/2"></ChevronRight>
          </button>
          <MapPin className="size-6 cursor-pointer"></MapPin>
        </div>
      </div>
    </header>
  );
};
