import { ChevronRight } from "@/components/icons/chevron-right";
import { MaseratiLogoSmall } from "@/components/icons/maserati-logo-small";
import { Header } from "@/components/shared/header";
import { useLocation } from "react-router-dom";

export const ConfiguratorPage = () => {
  const { state, pathname } = useLocation();
  console.log(state);
  return (
    <div>
      <Header color={{ backgroundColor: "#FFFFF" }}></Header>

      <hr />

      <div
        aria-label="top navbar"
        className="flex h-12 items-center justify-center gap-8"
      >
        <button className="h-full text-xs font-medium uppercase tracking-wide">
          Exterior
        </button>
        <button className="h-full text-xs font-medium uppercase tracking-wide">
          Interior
        </button>
        <button className="h-full text-xs font-medium uppercase tracking-wide">
          Packages
        </button>
        <button className="h-full text-xs font-medium uppercase tracking-wide">
          Options
        </button>
        <button className="h-full text-xs font-medium uppercase tracking-wide">
          Summary
        </button>
      </div>

      <hr />

      <div aria-label="image" className="pl-3 pt-6">
        <img
          className="relative w-2/3 rounded-2xl"
          src="/home/GranTurismo/Trofeo/configurator/GranTurismo-config.jpeg"
        />

        <div className="absolute left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-white">
          <ChevronRight></ChevronRight>
        </div>

        <div className="absolute top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-white">
          <ChevronRight className="rotate-180"></ChevronRight>
        </div>
      </div>

      <div
        aria-label="bottom navbar"
        className="fixed bottom-1 left-1 flex w-full items-center justify-between gap-10 px-5 py-2"
      >
        <div className="flex w-1/2 items-center gap-10">
          <div className="flex items-center gap-4 border-r-rose-600">
            <MaseratiLogoSmall></MaseratiLogoSmall>
            <div className="flex flex-col">
              <div>
                {state.name} {state.model}
              </div>
              <div>
                Engine - {state.engineLayout} - {state.displacement} -{" "}
                {state.maxPower}
              </div>
            </div>
          </div>
          <div>yours at: {state.price}</div>
        </div>

        <div aria-label="actions" className="flex gap-3">
          <button className="relative border border-black px-3 py-3.5">
            Services{" "}
            <ChevronRight
              strokeWidth={3}
              className="absolute right-2 top-1/2 size-3 -translate-y-1/2 -rotate-90"
            ></ChevronRight>
          </button>
          <button className="relative bg-rose-600 px-3 py-3.5">
            Summary
            <ChevronRight
              strokeWidth={3}
              className="absolute right-2 top-1/2 size-3 -translate-y-1/2"
            ></ChevronRight>
          </button>
        </div>
      </div>
    </div>
  );
};
