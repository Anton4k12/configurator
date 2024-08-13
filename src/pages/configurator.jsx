import { ChevronRight } from "@/components/icons/chevron-right";
import { MaseratiLogoSmall } from "@/components/icons/maserati-logo-small";
import { Header } from "@/components/shared/header";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "@/data";
import { Spinner } from "@/components/icons/spinner";
import { HeartIcon } from "@/components/icons/heart-icon";
import { TopNavBar } from "@/components/configurator/top-navbar";
import { Visuals } from "@/components/configurator/visuals";

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

      <TopNavBar></TopNavBar>

      <hr />

      <Visuals data={data}></Visuals>

      <div
        aria-label="bottom navbar"
        className="fixed bottom-0 left-0 flex h-24 w-full items-center justify-between gap-10 bg-white px-10 py-2 shadow-[0_0_8px_rgb(168,168,168,0.5)]"
      >
        <div className="flex w-1/2 items-center gap-10">
          <div className="flex items-center gap-4">
            <MaseratiLogoSmall className="cursor-pointer"></MaseratiLogoSmall>
            <div className="flex flex-col">
              <div className="text-xl font-light">
                {state.name} {state.model}
              </div>
              <div className="text-xs uppercase text-[rgb(33,37,41)]">
                Engine - {state.engineLayout} - {state.displacement} -{" "}
                {state.maxPower}
              </div>
            </div>

            <div className="h-12 w-px bg-zinc-200/50"></div>
          </div>

          <div className="text-xl font-light">yours at: {state.price}</div>

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
    </div>
  );
};
