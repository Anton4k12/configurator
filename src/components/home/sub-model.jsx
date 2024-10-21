import { Link } from "react-router-dom";
import { ChevronRight } from "../icons/chevron-right";
import { formatPrice } from "@/lib/utils";

export const SubModel = ({ subModel, modelName }) => {
  const formattedPrice = formatPrice(subModel.startingPrice);

  return (
    <div aria-label="card" className="flex flex-col gap-5 px-4 pt-10 lg:px-0">
      <div aria-label="text" className="flex flex-col">
        <h2 className="text-[21px] lg:text-[26px]">
          {modelName} {subModel.name}
        </h2>

        <div className="flex items-baseline gap-1">
          <span className="text-xs font-light lg:text-sm">Starting from</span>
          <span className="text-xl leading-none">{formattedPrice}</span>
        </div>

        <p className="pt-6 text-[11px] font-medium">{subModel.year}</p>
      </div>

      <Link to={`/${modelName}/${subModel.name}`}>
        <img
          className="h-[152px] w-full object-contain"
          src={subModel.imageUrl}
        />
      </Link>

      <div aria-label="characteristic" className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-[rgb(102,102,102)] lg:text-sm">
          Engine Layout{" "}
          <div className="text-xl text-black">{subModel.engineLayout}</div>
        </div>

        <div className="flex items-center justify-between text-xs text-[rgb(102,102,102)] lg:text-sm">
          Displacement{" "}
          <div className="text-xl text-black">
            {subModel.displacement ? subModel.displacement : "—"}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[rgb(102,102,102)] lg:text-sm">
          Acceleration{" "}
          <div className="text-xl text-black">{subModel.acceleration}</div>
        </div>

        <div className="flex items-center justify-between text-xs text-[rgb(102,102,102)] lg:text-sm">
          Max speed{" "}
          <div className="text-xl text-black">{subModel.maxSpeed}</div>
        </div>

        <div className="flex items-center justify-between text-xs text-[rgb(102,102,102)] lg:text-sm">
          Max power{" "}
          <div className="text-xl text-black">{subModel.maxPower}</div>
        </div>

        <div className="flex items-center justify-between text-xs text-[rgb(102,102,102)] lg:text-sm">
          Traction <div className="text-xl text-black">{subModel.traction}</div>
        </div>
      </div>

      <div>
        <Link
          to={`/${modelName}/${subModel.name}`}
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
