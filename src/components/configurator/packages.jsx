import { useContext, useState } from "react";
import { PlusIcon } from "../icons/plus-icon";
import { Package } from "./package";
import { MinusIcon } from "../icons/minus-icon";
import { ConfiguratorContext } from "@/state";
import { useStore } from "zustand";

export const Packages = ({ packages, selectedIds }) => {
  const store = useContext(ConfiguratorContext);

  const addPackage = useStore(store, (state) => state.addPackage);
  const removePackage = useStore(store, (state) => state.removePackage);

  const [isExtended, setIsExtended] = useState(false);

  const croppedPackages = packages.slice(0, 4);

  const handleExtend = () => {
    setIsExtended(!isExtended);
  };

  const displayedPackages = isExtended ? packages : croppedPackages;

  return (
    <div className="px-3 pt-6">
      <h2>
        <span className="px-7 text-[40px] font-extralight leading-[96px]">
          Packages
        </span>
      </h2>

      <div className="grid grid-cols-2 gap-6 pt-5">
        {displayedPackages.map((pack) => {
          const isSelected = selectedIds.includes(pack.id);
          return (
            <Package
              key={pack.name}
              name={pack.name}
              imageUrl={pack.imageUrl}
              price={pack.price}
              characteristics={pack.characteristics}
              isSelected={isSelected}
              id={pack.id}
              onAdd={addPackage}
              onRemove={removePackage}
            ></Package>
          );
        })}
      </div>

      <div className="flex flex-col items-center pt-5">
        {!isExtended ? (
          <div className="text-xs uppercase text-[#666]">
            Show more packages
          </div>
        ) : (
          <div className="text-xs uppercase text-[#666]">Hide packages</div>
        )}

        <div className="pt-[10px]">
          <button
            onClick={handleExtend}
            className="w-fit rounded-full border border-black p-3"
          >
            {!isExtended ? (
              <PlusIcon></PlusIcon>
            ) : (
              <MinusIcon className="size-5"></MinusIcon>
            )}
          </button>
        </div>

        <div className="px-3 pt-[30px] text-center font-light tracking-[0.7px]">
          * Note: package choices may require other mandatory packages or
          options, depending on country. The price of each package may change
          according to the addition or deletion of other packages or options.
        </div>
      </div>
    </div>
  );
};
