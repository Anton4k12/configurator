import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Triangle } from "../icons/triangle";

export const ExteriorColor = ({ colorsTypes, colors }) => {
  const [selectedColorType, setSelectedColorType] = useState(colorsTypes[0]);

  const shownColors = colors.filter((color) => {
    return color.type === selectedColorType;
  });

  const handleSelectColorType = (type) => {
    setSelectedColorType(type);
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="text-[40px] font-extralight leading-none">
        Exterior Colors
      </div>
      <div className="text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]"></div>
      <div data-tabs className="flex w-full gap-8">
        {colorsTypes.map((type) => {
          return (
            <button
              onClick={() => handleSelectColorType(type)}
              key={type}
              className={cn(
                "pb-1 text-xs font-medium uppercase",
                selectedColorType === type && "border-b border-black",
              )}
            >
              {type} colors
            </button>
          );
        })}
      </div>
      <div data-colors className="flex gap-3">
        {shownColors.map((color) => {
          return (
            <img className="size-[50px] rounded-full" src={color.imageUrl} />
          );
          return (
            <div
              key={color.name}
              className="relative flex size-[50px] items-center justify-center rounded-full border border-black"
            >
              <Triangle className="absolute left-0 top-1/2 size-1 -translate-y-1/2 rotate-90"></Triangle>
              <img className="size-9 rounded-full" src={color.imageUrl}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};
