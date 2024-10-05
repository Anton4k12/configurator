import { SubModel } from "@/components/home/sub-model";
import { ChevronRight } from "@/components/icons/chevron-right";
import { GranTurismoIcon } from "@/components/icons/granturismo-logo";
import { Header } from "@/components/shared/header";
import { fetcher } from "@/data";
import { routes } from "@/router";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

export const ModelPage = () => {
  const { modelName } = useParams();

  const { data: data, isLoading } = useSWR(`/subModels/${modelName}`, fetcher);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

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

            <button className="relative w-full border border-black py-4 pr-28 text-[11px] font-medium uppercase tracking-[1px] lg:w-7/12">
              Open existing configurator{" "}
              <ChevronRight
                strokeWidth={3}
                className="absolute right-3.5 top-1/2 size-3 -translate-y-1/2"
              ></ChevronRight>
            </button>
          </div>
        </div>

        <hr className="border-zinc-400" />

        <>
          <div className="flex pb-[60px] pt-10 lg:items-center lg:px-[60px]">
            {data && (
              <div className="flex size-40 h-6 items-start pt-[60px] lg:mx-auto lg:pt-0">
                <img src={data.carLogo}></img>
              </div>
            )}

            <button
              onClick={handleGoBack}
              className="absolute left-3 flex items-center gap-1 text-xs font-medium uppercase lg:left-10"
            >
              <ChevronRight
                strokeWidth={3}
                className="size-2.5 rotate-180"
              ></ChevronRight>
              All models
            </button>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {!isLoading ? (
              <>
                {" "}
                {data &&
                  data.subModels.map((subModel) => (
                    <SubModel
                      subModel={subModel}
                      modelName={modelName}
                      key={subModel.id}
                    ></SubModel>
                  ))}
              </>
            ) : (
              <>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
              </>
            )}
          </div>
        </>
      </div>
    </>
  );
};

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <div
        aria-label="text"
        className="flex h-[102px] animate-pulse flex-col rounded-2xl bg-zinc-100"
      ></div>
      <div className="h-36 w-full animate-pulse rounded-2xl bg-zinc-100" />
      <div>
        <div
          aria-label="characteristic"
          className="flex h-52 animate-pulse flex-col gap-2 rounded-2xl bg-zinc-100"
        ></div>
        <div className="h-14 animate-pulse rounded-2xl bg-zinc-100"></div>
      </div>
    </div>
  );
};
