import { Model } from "@/components/home/model";
import { fetcher } from "@/data";
import useSWR from "swr";
import { ChevronRight } from "../components/icons/chevron-right";
import { Header } from "../components/shared/header";

export function HomePage() {
  const { data: modelsData, isLoading } = useSWR("/models", fetcher);
  return (
    <>
      <Header color={{ backgroundColor: "#F6F6F6" }}></Header>
      <div className="max-w-screen-[1448px] mx-auto min-h-screen px-10 pb-40">
        <div
          aria-label="main text"
          className="flex w-1/2 flex-col gap-10 pb-[72px] pl-20 pt-44"
        >
          <h1 className="text-6xl font-extralight">Build your own</h1>
          <div className="flex flex-col items-start gap-7">
            <p className="text-xl font-light">
              Every Maserati is like a work of art constructed with the care and
              attention that only the human hand can provide
            </p>

            <button className="relative border border-black px-5 py-4 pr-28 text-[11px] font-medium uppercase">
              Open existing configurator{" "}
              <ChevronRight className="absolute right-3.5 top-1/2 size-3 -translate-y-1/2"></ChevronRight>
            </button>
          </div>
        </div>
        <hr className="border-zinc-400" />

        <div aria-label="cars selector" className="w-full">
          <div className="grid grid-cols-3 gap-12">
            {!isLoading ? (
              <>
                {modelsData &&
                  modelsData.map((model) => (
                    <Model
                      key={model.id}
                      name={model.name}
                      imageUrl={model.imageUrl}
                    ></Model>
                  ))}
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
