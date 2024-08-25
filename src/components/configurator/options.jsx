import { cn } from "@/lib/utils";
import { useState } from "react";
import { InfoIcon } from "../icons/info-icon";
import { PlusIcon } from "@radix-ui/react-icons";

export const Options = ({ options, optionsTypes }) => {
  const [selectedOptionType, setSelectedOptionType] = useState("All");

  const handleSelectOptionType = (type) => {
    setSelectedOptionType(type);
  };

  const handleSelectAllType = () => {
    setSelectedOptionType("All");
  };

  const isAllSelected = selectedOptionType === "All";

  const displayedOptions = options.filter((option) => {
    return option.type === selectedOptionType;
    // if (color.type === selectedColorType) {
    //   return true;
    // } else {
    //   return false;
    // }
  });

  const displayedOptins = isAllSelected ? options : displayedOptions;

  return (
    <div className="px-3 pt-6">
      <h2 className="pb-3">
        <span className="px-7 text-[40px] font-extralight leading-[96px]">
          Options
        </span>
      </h2>

      <div data-buttons className="flex gap-5 px-2">
        <button
          onClick={() => handleSelectAllType()}
          className={cn(
            "pb-1 text-xs font-medium uppercase",
            selectedOptionType === "All" && "border-b border-black",
          )}
        >
          All
        </button>
        {optionsTypes.map((type) => {
          return (
            <button
              onClick={() => handleSelectOptionType(type)}
              className={cn(
                "pb-1 text-xs font-medium uppercase",
                selectedOptionType === type && "border-b border-black",
              )}
            >
              {type}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-4 gap-6 pt-[42px]">
        {displayedOptins.map((option) => {
          return (
            <div className="flex flex-col justify-between overflow-hidden rounded-2xl shadow-[1px_1px_6px_1px_rgb(238,238,238)]">
              <img src={option.imageUrl}></img>
              <div className="flex w-full flex-1 flex-col justify-between">
                <div className="flex justify-between py-5">
                  <div className="px-5 text-xl font-light">{option.name}</div>
                  <div className="pr-3">
                    <InfoIcon></InfoIcon>
                  </div>
                </div>
                <div className="flex items-center justify-between px-5 py-5">
                  <div className="text-xs">$ {option.price}</div>
                  <button className="flex items-center justify-center gap-1 border border-black px-6 py-4 text-[11px] uppercase">
                    Add<PlusIcon className="size-4"></PlusIcon>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
