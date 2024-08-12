import { ChevronRight } from "../icons/chevron-right";
import { GranTurismoIcon } from "../icons/granturismo-logo";
import { CarConfiguration } from "./car-configuration";

export const mockCarConfigurations = [
  {
    name: "GranTurismo",
    model: "Modena",
    imageUrl: "/home/GranTurismo/Modena/Modena.webp",
    price: "$ 158,000",
    year: "2024",
    engineLayout: "V6",
    displacement: "3.0 L",
    acceleration: "3.7 sec",
    maxSpeed: "188 mph",
    maxPower: "483 HP",
    traction: "AWD",
  },
  {
    name: "GranTurismo",
    model: "Trofeo",
    imageUrl: "/home/GranTurismo/Trofeo/Trofeo.webp",
    price: "$ 190,000",
    year: "2024",
    engineLayout: "V6",
    displacement: "3.0 L",
    acceleration: "3.3 sec",
    maxSpeed: "199 mph",
    maxPower: "542 HP",
    traction: "AWD",
  },
  {
    name: "GranTurismo",
    model: "Folgore",
    imageUrl: "/home/GranTurismo/Folgore/Folgore.webp",
    price: "$ 192,000",
    year: "2025",
    engineLayout: "EV",
    displacement: "-",
    acceleration: "2.6 sec",
    maxSpeed: "202 mph",
    maxPower: "751 HP",
    traction: "AWD",
  },
];

export const CarConfigurations = ({ modelName, onGoBack }) => {
  const isGranTurismo = modelName === "GranTurismo";

  return (
    <>
      <div className="flex items-center px-[60px] pb-[60px] pt-10">
        <GranTurismoIcon className="relative mx-auto"></GranTurismoIcon>

        <button
          onClick={onGoBack}
          className="absolute left-10 flex items-center gap-1 text-xs font-medium uppercase"
        >
          <ChevronRight
            strokeWidth={3}
            className="size-2.5 rotate-180"
          ></ChevronRight>
          All models
        </button>
      </div>

      {isGranTurismo && (
        <div className="grid grid-cols-4 gap-12">
          {mockCarConfigurations.map((model) => (
            <CarConfiguration {...model} key={model.model}></CarConfiguration>
          ))}
        </div>
      )}
    </>
  );
};
