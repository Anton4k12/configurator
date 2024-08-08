import { ChevronRight } from "../icons/chevron-right";
import { GranTurismoIcon } from "../icons/granturismo-logo";
import { CarConfiguration } from "./car-configuration";

export const CarConfigurations = ({ modelName, onGoBack }) => {
  const isGranTurismo = modelName === "GranTurismo";

  return (
    <>
      <div className="flex items-center px-[60px] pb-[60px] pt-10">
        <GranTurismoIcon className="relative mx-auto"></GranTurismoIcon>

        <button
          onClick={onGoBack}
          className="absolute left-10 flex items-center text-xs font-medium uppercase"
        >
          <ChevronRight
            strokeWidth={3}
            className="size-2.5 rotate-180"
          ></ChevronRight>
          All models
        </button>
      </div>

      {isGranTurismo && (
        <div className="flex">
          <CarConfiguration></CarConfiguration>
          {/* <img src="/home/GranTurismo/Modena.webp"></img>
          <img src="/home/GranTurismo/Trofeo.webp"></img>
          <img src="/home/GranTurismo/Folgore.webp"></img> */}
        </div>
      )}
    </>
  );
};
