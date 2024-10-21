import { Model } from "@/components/home/model";
import { fetcher } from "@/data";
import useSWR from "swr";
import { ChevronRight } from "../components/icons/chevron-right";
import { Header } from "../components/shared/header";
import { showNotImplementedYet } from "@/lib/toasts";

export function HomePage() {
  const { data: modelsData, isLoading } = useSWR("/models", fetcher);
  const model = modelsData?.[0];
  return (
    <>
      <Header color={{ backgroundColor: "#F6F6F6" }}></Header>
      <div className="max-w-screen-[1448px] mx-auto min-h-screen px-4 pb-40 lg:px-10">
        <div
          aria-label="main text"
          className="flex flex-col gap-10 pb-[72px] pt-[110px] lg:w-1/2 lg:pl-20 lg:pt-44"
        >
          <h1 className="text-[35px] font-extralight lg:text-6xl">
            Build your own
          </h1>
          <div className="flex flex-col items-start gap-7">
            <p className="text-lg font-light tracking-[-0.4px] lg:text-xl">
              Every Maserati is like a work of art constructed with the care and
              attention that only the human hand can provide
            </p>

            <button
              onClick={showNotImplementedYet}
              className="relative w-full border border-black py-4 pr-28 text-[11px] font-medium uppercase tracking-[1px] lg:w-7/12"
            >
              Open existing configurator{" "}
              <ChevronRight
                strokeWidth={3}
                className="absolute right-3.5 top-1/2 size-3 -translate-y-1/2"
              ></ChevronRight>
            </button>
          </div>
        </div>
        <hr className="border-zinc-400" />

        <div aria-label="cars selector" className="w-full">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {!isLoading ? (
              <>
                {modelsData && (
                  <Model
                    key={model.id}
                    name={model.name}
                    imageUrl={model.imageUrl}
                  ></Model>
                )}
              </>
            ) : (
              <>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const Skeleton = () => {
  return (
    <div className="flex flex-col items-center gap-2 pt-10">
      <div className="h-8 w-1/3 animate-pulse rounded-xl bg-zinc-100 text-2xl"></div>
      <div className="h-52 w-full animate-pulse cursor-pointer rounded-xl bg-zinc-100" />
      <div className="relative h-14 w-2/3 animate-pulse rounded-xl bg-zinc-100 px-5 py-4 pr-44 text-[11px] font-medium uppercase"></div>
    </div>
  );
};
