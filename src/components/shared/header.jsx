import { toast } from "sonner";
import BurgerIcon from "../icons/burger-icon";
import { ChevronRight } from "../icons/chevron-right";
import { MapPin } from "../icons/map-pin";
import { MaseratiLogo } from "../icons/maserati-logo";
import { MaseratiLogoSmall } from "../icons/maserati-logo-small";
import MaseratiTextLogo from "../icons/maserati_text_logo";
import { showNotImplementedYet } from "@/lib/toasts";

export const Header = ({ color }) => {
  return (
    <header
      style={{ backgroundColor: color }}
      className="flex justify-between px-3 py-7 lg:py-6"
    >
      <div
        aria-label="navigation buttons"
        className="hidden items-center lg:flex"
      >
        <div
          className="cursor-pointer px-5 text-sm font-semibold"
          onClick={showNotImplementedYet}
        >
          Models
        </div>
        <div
          className="cursor-pointer px-5 text-sm font-semibold"
          onClick={showNotImplementedYet}
        >
          Brand
        </div>
        <div
          className="cursor-pointer px-5 text-sm font-semibold"
          onClick={showNotImplementedYet}
        >
          Ownership
        </div>
        <div
          className="cursor-pointer px-5 text-sm font-semibold"
          onClick={showNotImplementedYet}
        >
          Quick Find
        </div>
      </div>

      <div aria-label="logo" className="hidden cursor-pointer lg:block">
        <MaseratiLogo color="#000000"></MaseratiLogo>
      </div>
      <div className="flex w-full items-center justify-between lg:hidden">
        <div aria-label="logo" className="flex cursor-pointer gap-3">
          <MaseratiLogoSmall></MaseratiLogoSmall>
          <MaseratiTextLogo></MaseratiTextLogo>
        </div>
        <div>
          <BurgerIcon onClick={showNotImplementedYet}></BurgerIcon>
        </div>
      </div>

      <div
        aria-label="special buttons"
        className="hidden items-center gap-5 px-5 lg:flex"
      >
        <button
          onClick={showNotImplementedYet}
          className="relative cursor-pointer border border-black px-4 py-2.5 pr-16 text-xs font-medium uppercase"
        >
          Dealer locator{" "}
          <ChevronRight className="absolute right-3 top-1/2 size-3 -translate-y-1/2"></ChevronRight>
        </button>
        <div className="flex items-center gap-7">
          <button
            onClick={showNotImplementedYet}
            className="relative cursor-pointer border border-[rgb(255,200,69)] bg-[rgb(255,200,69)] px-4 py-2.5 pr-16 text-xs font-medium uppercase"
          >
            Test drive{" "}
            <ChevronRight className="absolute right-3 top-1/2 size-3 -translate-y-1/2"></ChevronRight>
          </button>
          <MapPin
            onClick={showNotImplementedYet}
            className="size-6 cursor-pointer"
          ></MapPin>
        </div>
      </div>
    </header>
  );
};
