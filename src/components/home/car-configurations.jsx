import { ChevronRight } from "../icons/chevron-right";

export const CarConfigurations = ({ modelName, onGoBack }) => {
  const isGranTurismo = modelName === "GranTurismo";

  return (
    <>
      <button
        onClick={onGoBack}
        className="uppercase flex items-center text-xs font-medium"
      >
        <ChevronRight className="rotate-180 size-4"></ChevronRight>All models
      </button>
      {isGranTurismo && (
        <div className="flex">
          <img src="/home/GranTurismo/Modena.webp"></img>
          <img src="/home/GranTurismo/Trofeo.webp"></img>
          <img src="/home/GranTurismo/Folgore.webp"></img>
        </div>
      )}
    </>
  );
};
