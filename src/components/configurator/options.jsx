import { cn } from "@/lib/utils";
import { useConfiguratorStore } from "@/state";
import { useState } from "react";
import { Option } from "./option";

export const Options = ({ options, optionsTypes, selectedIds }) => {
  const addOption = useConfiguratorStore((s) => s.addOption);
  const removeOption = useConfiguratorStore((s) => s.removeOption);

  const handleOptionsSearchValueChange = useConfiguratorStore(
    (s) => s.handleOptionsSearchValueChange,
  );

  const optionsSearchValue = useConfiguratorStore((s) => s.optionsSearchValue);

  const [selectedOptionType, setSelectedOptionType] = useState("All");

  const handleSelectOptionType = (type) => {
    setSelectedOptionType(type);
  };

  const handleSelectAllType = () => {
    setSelectedOptionType("All");
  };

  const isAllSelected = selectedOptionType === "All";

  const filteredOptions = options.filter((option) => {
    return option.type === selectedOptionType;
    // if (color.type === selectedColorType) {
    //   return true;
    // } else {
    //   return false;
    // }
  });

  const displayedOptions = isAllSelected ? options : filteredOptions;

  const searcheableOptions = displayedOptions.filter((option) => {
    return option.name.toLowerCase().includes(optionsSearchValue.toLowerCase());
  });

  return (
    <div className="hidden pt-6 lg:block">
      <h2>
        <span className="px-10 text-[40px] font-extralight leading-[96px]">
          Options
        </span>
      </h2>

      <div
        data-buttons
        className="sticky top-12 flex items-center gap-10 bg-white px-5 pb-4 pt-3 text-[11px] font-medium text-[#666]"
      >
        <button
          onClick={() => handleSelectAllType()}
          className={cn(
            "uppercase transition-colors hover:text-black",
            selectedOptionType === "All" && "border-b border-black text-black",
          )}
        >
          All
        </button>
        {optionsTypes.map((type) => {
          return (
            <button
              key={type}
              onClick={() => handleSelectOptionType(type)}
              className={cn(
                "uppercase transition-colors hover:text-black",
                selectedOptionType === type &&
                  "border-b border-black text-black",
              )}
            >
              {type}
            </button>
          );
        })}
        <input
          value={optionsSearchValue}
          type="text"
          placeholder="Search"
          onChange={handleOptionsSearchValueChange}
          className="border border-transparent border-b-black py-1 focus-visible:outline-none"
        />
      </div>

      <div className="grid grid-cols-4 gap-6 px-3 pt-[26px]">
        {searcheableOptions.map((option) => {
          const isSelected = selectedIds.includes(option.id);
          return (
            <Option
              key={option.id}
              option={option}
              isSelected={isSelected}
              id={option.id}
              onAdd={addOption}
              onRemove={removeOption}
            ></Option>
          );
        })}
      </div>

      <div className="px-3 py-[30px] text-center font-light tracking-[1px]">
        * Some options may not be available as they are already included in a
        previously-activated packages or they are incompatible with the options
        selected as part of a package. To select the options, please modify the
        previously-selected packages.
      </div>
    </div>
  );
};
