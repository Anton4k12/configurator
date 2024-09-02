import { Link } from "react-router-dom";
import { ChevronRight } from "../icons/chevron-right";
import { formatPrice } from "@/lib/utils";

export const Model = ({ model, carName }) => {
  const formattedPrice = formatPrice(model.startingPrice);

  return (
    <div aria-label="card" className="flex flex-col gap-5 pt-10">
      <div aria-label="text" className="flex flex-col">
        <h2 className="text-[26px]">
          {carName} {model.name}
        </h2>

        <div className="flex items-baseline gap-1">
          <span className="text-sm font-light">Starting from</span>
          <span className="text-xl leading-none">{formattedPrice}</span>
        </div>

        <p className="pt-6 text-[11px] font-medium">{model.year}</p>
      </div>

      <Link to={"/configurator"} state={model}>
        <img className="w-full" src={model.imageUrl} />
      </Link>

      <div aria-label="characteristic" className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Engine Layout{" "}
          <div className="text-xl text-black">{model.engineLayout}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Displacement{" "}
          <div className="text-xl text-black">{model.displacement}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Acceleration{" "}
          <div className="text-xl text-black">{model.acceleration}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Max speed <div className="text-xl text-black">{model.maxSpeed}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Max power <div className="text-xl text-black">{model.maxPower}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Traction <div className="text-xl text-black">{model.traction}</div>
        </div>
      </div>

      <div>
        <Link
          to={"/configurator"}
          state={model}
          className="relative flex w-full justify-start bg-[rgb(255,200,69)] py-5 pl-5 text-[11px] font-medium uppercase"
        >
          Configure{" "}
          <ChevronRight
            strokeWidth={3}
            className="absolute right-3.5 top-1/2 size-3 -translate-y-1/2"
          ></ChevronRight>
        </Link>
      </div>
    </div>
  );
};
