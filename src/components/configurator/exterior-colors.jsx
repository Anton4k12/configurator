import { cn, formatPrice } from "@/lib/utils";
import { useConfiguratorStore } from "@/state/v2";
import { useState } from "react";
import { Triangle } from "../icons/triangle";

export const ExteriorColor = ({ colorsTypes, colors }) => {
  const [selectedColorType, setSelectedColorType] = useState(colorsTypes[0]);

  const selectedColor = useConfiguratorStore((s) => s.selectedColor);
  const selectColor = useConfiguratorStore((s) => s.selectColor);

  const displayedColors = colors.filter((color) => {
    return color.type === selectedColorType;
  });

  const handleSelectColorType = (type) => {
    setSelectedColorType(type);
  };

  const handleSelectColor = (color) => {
    selectColor(color);
  };

  const formattedPrice = formatPrice(selectedColor.price);

  return (
    <div id="exterior" className="flex w-full flex-col gap-5 px-[35px] lg:px-0">
      <div className="text-[35px] font-extralight leading-none lg:text-[40px]">
        Exterior Colors
      </div>
      <div className="text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]">
        {selectedColor.type} — {selectedColor.name}{" "}
        {selectedColor.price !== null && <span>{formattedPrice}</span>}
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
      <div data-colors className="flex flex-wrap gap-3">
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
        })}
      </div>
    </div>
  );
};
