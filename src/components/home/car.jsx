import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "../icons/chevron-right";

export const Car = ({ name, imageUrl, isLoading }) => {
  const carPath = `/${name}`;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(carPath);
  };

  // if (isLoading) {
  // <div className="flex flex-col items-center gap-4">
  //   <div className="animate-pulse bg-zinc-600 pt-10 text-2xl"></div>
  //   <div className="w-[432px] animate-pulse cursor-pointer bg-zinc-600" />
  //   <div className="relative animate-pulse border border-black bg-zinc-600 px-5 py-4 pr-44 text-[11px] font-medium uppercase"></div>
  // </div>;
  // }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="pt-10 text-2xl">{name}</div>
      <img
        onClick={handleClick}
        src={imageUrl}
        className="w-[432px] cursor-pointer"
      />
      <Link
        to={carPath}
        className="relative border border-black px-5 py-4 pr-44 text-[11px] font-medium uppercase"
      >
        Select{" "}
        <ChevronRight
          strokeWidth={2}
          className="absolute right-3.5 top-1/2 size-3 -translate-y-1/2"
        ></ChevronRight>
      </Link>
    </div>
  );
};
