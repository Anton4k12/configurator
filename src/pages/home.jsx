import { useState } from "react";
import { ChevronRight } from "../components/icons/chevron-right";
import { Header } from "../components/shared/header";
import { SelectModel } from "../components/home/select-model";
import { CarConfigurations } from "../components/home/car-configurations";

export function HomePage() {
  const [selectedCar, setSelectedCar] = useState();

  const handleCarSelect = (name) => {
    setSelectedCar(name);
  };

  const handleGoBack = () => {
    setSelectedCar(undefined);
  };

  const isCarSelected = selectedCar !== undefined;

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

        {isCarSelected ? (
          <CarConfigurations
            onGoBack={handleGoBack}
            modelName={selectedCar}
          ></CarConfigurations>
        ) : (
          <SelectModel onCarSelect={handleCarSelect}></SelectModel>
        )}
      </div>
    </>
  );
}
