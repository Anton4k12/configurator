import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "../icons/chevron-right";

export const Model = ({ name, imageUrl }) => {
  const modelPath = `/${name}`;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(modelPath);
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="pt-10 text-2xl">{name}</div>
      <img
        onClick={handleClick}
        src={imageUrl}
        className="h-[165px] w-full cursor-pointer object-contain md:h-[137px] lg:h-[210px]"
      />
      <Link
        to={modelPath}
        className="relative w-full border border-black py-4 pl-5 text-[11px] font-medium uppercase tracking-[1px] lg:w-7/12"
      >
        Select{" "}
        <ChevronRight
          strokeWidth={3}
          className="absolute right-3.5 top-1/2 size-3 -translate-y-1/2"
        ></ChevronRight>
      </Link>
    </div>
  );
};
