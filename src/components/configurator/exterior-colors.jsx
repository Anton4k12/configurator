import { useState } from "react";
import { cn } from "@/lib/utils";
import { Triangle } from "../icons/triangle";

export const ExteriorColor = ({ colorsTypes, colors }) => {
  const [selectedColorType, setSelectedColorType] = useState(colorsTypes[0]);

  const [selectedColor, setSelectedColor] = useState(colors[1]);

  // const isAllSelected = selectedColorType === "all";

  const displayedColors = colors.filter((color) => {
    return color.type === selectedColorType;
    // if (color.type === selectedColorType) {
    //   return true;
    // } else {
    //   return false;
    // }
  });

  // const displayedOptins = isAllSelected ? options : filteredOptions;

  const handleSelectColorType = (type) => {
    setSelectedColorType(type);
  };

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="text-[40px] font-extralight leading-none">
        Exterior Colors
      </div>
      <div className="text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]">
        {selectedColor.type} — {selectedColor.name}{" "}
        {selectedColor.price !== null && <span>$ {selectedColor.price}</span>}
      </div>
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
        {displayedColors.map((color) => {
          const isSelectedColor = selectedColor.name === color.name;
          if (isSelectedColor) {
            return (
              <div
                key={color.name}
                className="relative flex size-[50px] items-center justify-center rounded-full border border-black"
              >
                <Triangle className="absolute left-0 top-1/2 size-1 -translate-y-1/2 rotate-90"></Triangle>
                <img
                  className="size-9 cursor-pointer rounded-full"
                  src={color.imageUrl}
                ></img>
              </div>
            );
          }
          return (
            <img
              onClick={() => handleSelectColor(color)}
              key={color.name}
              className="size-[50px] cursor-pointer rounded-full"
              src={color.imageUrl}
            />
          );
          // return (
          //   <img className="size-[50px] rounded-full" src={color.imageUrl} />
          // );
        })}
      </div>
    </div>
  );
};
