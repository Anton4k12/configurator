import { formatPrice } from "@/lib/utils";
import { useConfiguratorStore } from "@/state/v2";
import { Triangle } from "../icons/triangle";

export const Trim = ({ trim, selectedTrim }) => {
  const selectTrim = useConfiguratorStore((state) => state.selectTrim);

  const formattedPrice = formatPrice(selectedTrim.price);

  return (
    <div className="flex flex-col gap-5 px-8 lg:px-0">
      <div className="text-[35px] font-extralight leading-none lg:text-[40px]">
        Trim
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]">
          {selectedTrim.name}{" "}
          {selectedTrim.price !== null && <span>{formattedPrice}</span>}
        </div>
      </div>

      <div data-wheels className="flex flex-wrap gap-3">
        {trim.map((trim) => {
          const isSelectedTrim = selectedTrim.name === trim.name;
          if (isSelectedTrim) {
            return (
              <div
                key={trim.name}
                className="relative flex size-[50px] items-center justify-center rounded-full border border-black"
              >
                <Triangle className="absolute left-0 top-1/2 size-1 -translate-y-1/2 rotate-90"></Triangle>
                <img
                  className="size-9 cursor-pointer rounded-full"
                  src={trim.imageUrl}
                ></img>
              </div>
            );
          }
          return (
            <img
              onClick={() => selectTrim(trim)}
              key={trim.name}
              className="size-[50px] cursor-pointer rounded-full"
              src={trim.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
