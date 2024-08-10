import { Link } from "react-router-dom";
import { ChevronRight } from "../icons/chevron-right";

export const CarConfiguration = (props) => {
  return (
    <div aria-label="card" className="flex flex-col gap-5 pt-10">
      <div aria-label="text" className="flex flex-col">
        <h2 className="text-[26px]">
          {props.name} {props.model}
        </h2>

        <div className="flex items-baseline gap-1">
          <span className="text-sm font-light">Starting from</span>
          <span className="text-xl leading-none">{props.price}</span>
        </div>

        <p className="pt-6 text-[11px] font-medium">{props.year}</p>
      </div>

      <img className="w-full" src={props.imageUrl} />

      <div aria-label="characteristic" className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Engine Layout{" "}
          <div className="text-xl text-black">{props.engineLayout}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Displacement{" "}
          <div className="text-xl text-black">{props.displacement}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Acceleration{" "}
          <div className="text-xl text-black">{props.acceleration}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Max speed <div className="text-xl text-black">{props.maxSpeed}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Max power <div className="text-xl text-black">{props.maxPower}</div>
        </div>

        <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
          Traction <div className="text-xl text-black">{props.traction}</div>
        </div>
      </div>

      <div>
        <Link
          to={"/configurator"}
          state={props}
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
