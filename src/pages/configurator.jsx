import { ChevronRight } from "@/components/icons/chevron-right";
import { MaseratiLogoSmall } from "@/components/icons/maserati-logo-small";
import { Header } from "@/components/shared/header";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "@/data";
import { Wheels } from "@/components/configurator/wheels";
import { Spinner } from "@/components/icons/spinner";

export const ConfiguratorPage = () => {
  const { state, pathname } = useLocation();

  const { data, error, isLoading } = useSWR("/wheels", fetcher);

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col">
        <Header></Header>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner className="size-10"></Spinner>
        </div>
      </div>
    );
  }

  console.log({ data, error, isLoading });
  return (
    <div>
      <Header color={{ backgroundColor: "#FFFFFF" }}></Header>

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

      <div className="flex gap-6 pl-3 pt-6">
        <div aria-label="image" className="relative w-2/3">
          <img
            className="rounded-2xl"
            src="/home/GranTurismo/Trofeo/configurator/GranTurismo-config.jpeg"
          />

          <div className="absolute right-6 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white">
            <ChevronRight strokeWidth={3} className="size-3"></ChevronRight>
          </div>

          <div className="absolute left-6 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white">
            <ChevronRight
              strokeWidth={3}
              className="size-3 rotate-180"
            ></ChevronRight>
          </div>
        </div>

        <div aria-label="wheels">
          <Wheels wheels={data.wheels}></Wheels>
        </div>
      </div>

      <div
        aria-label="bottom navbar"
        className="fixed bottom-1 left-1 flex w-full items-center justify-between gap-10 bg-white px-5 py-2"
      >
        <div className="flex w-1/2 items-center gap-10">
          <div className="flex items-center gap-4 border-r-rose-600">
            <MaseratiLogoSmall></MaseratiLogoSmall>
            <div className="flex flex-col">
              <div className="text-xl font-light">
                {state.name} {state.model}
              </div>
              <div className="text-xs uppercase">
                Engine - {state.engineLayout} - {state.displacement} -{" "}
                {state.maxPower}
              </div>
            </div>

            <div className="h-10 w-px bg-black"></div>
          </div>

          <div className="text-xl font-light">yours at: {state.price}</div>

          <div className="h-5 w-px bg-black"></div>
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
