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

        <>
          <div className="flex items-center px-[60px] pb-[60px] pt-10">
            {data && <img src={data.carLogo} className="mx-auto h-6"></img>}

            <button
              onClick={handleGoBack}
              className="absolute left-10 flex items-center gap-1 text-xs font-medium uppercase"
            >
              <ChevronRight
                strokeWidth={3}
                className="size-2.5 rotate-180"
              ></ChevronRight>
              All models
            </button>
          </div>

          <div className="grid grid-cols-4 gap-12">
            {data &&
              data.subModels.map((subModel) => (
                <SubModel
                  subModel={subModel}
                  modelName={modelName}
                  key={subModel.id}
                ></SubModel>
              ))}
          </div>
        </>
      </div>
    </>
  );
};
