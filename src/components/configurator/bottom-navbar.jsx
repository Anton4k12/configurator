import { MaseratiLogoSmall } from "../icons/maserati-logo-small";
import { ChevronRight } from "../icons/chevron-right";
import { HeartIcon } from "../icons/heart-icon";
import { useLocation } from "react-router-dom";
import { formatPrice } from "@/lib/utils";

export const BottomNavBar = ({ price, subModel }) => {
  const formattedPrice = formatPrice(price);
  return (
    <div
      aria-label="bottom navbar"
      className="fixed bottom-0 left-0 hidden h-24 w-full items-center justify-between gap-10 bg-white px-10 py-2 shadow-[0_0_8px_rgb(168,168,168,0.5)] lg:flex"
    >
      <div className="flex w-1/2 items-center gap-10">
        <div className="flex items-center gap-4">
          <MaseratiLogoSmall className="cursor-pointer"></MaseratiLogoSmall>
          <div className="flex flex-col">
            <div className="text-xl font-light">
              {subModel.modelName} {subModel.name}
            </div>
            <div className="text-xs uppercase text-[rgb(33,37,41)]">
              Engine - {subModel.engineLayout}{" "}
              {subModel.displacement && `- ${subModel.displacement}`} -{" "}
              {subModel.maxPower}
            </div>
          </div>

          <div className="h-12 w-px bg-zinc-200/50"></div>
        </div>

        <div className="text-xl font-light">yours at: {formattedPrice}</div>

        <div className="h-6 w-px bg-zinc-200/50"></div>
      </div>

      <div aria-label="actions" className="flex items-center gap-3">
        <button className="relative border border-black px-6 py-4 pr-10 text-xs font-medium uppercase tracking-wide">
          Services{" "}
          <ChevronRight
            strokeWidth={3}
            className="absolute right-6 top-1/2 size-3 -translate-y-1/2 -rotate-90"
          ></ChevronRight>
        </button>

        <button className="relative border-[rgb(255,200,69)] bg-[rgb(255,200,69)] px-6 py-4 pr-10 text-xs font-medium uppercase tracking-wide">
          Summary
          <ChevronRight
            strokeWidth={3}
            className="absolute right-6 top-1/2 size-3 -translate-y-1/2"
          ></ChevronRight>
        </button>

        <div className="pl-12">
          <HeartIcon className="size-6 cursor-pointer"></HeartIcon>
        </div>
      </div>
    </div>
  );
};
