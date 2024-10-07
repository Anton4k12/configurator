import { formatPrice } from "@/lib/utils";
import { Triangle } from "../icons/triangle";
import { useConfiguratorStore } from "@/state";

export const BrakeCalipers = ({ selectedBrake, brakeCalipers }) => {
  const selectBrake = useConfiguratorStore((s) => s.selectBrake);

  const formattedPrice = formatPrice(selectedBrake.price);
  return (
    <div className="flex flex-col gap-5 px-8 lg:px-0">
      <div className="text-[35px] font-extralight leading-none lg:text-[40px]">
        Brake Calipers
      </div>

      <div className="text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]">
        {selectedBrake.diameter} {selectedBrake.name}{" "}
        {selectedBrake.price !== null && <span>{formattedPrice}</span>}
      </div>

      <div data-brake className="flex flex-wrap gap-3">
        {brakeCalipers.map((brake) => {
          const isSelectedBrake = selectedBrake.name === brake.name;
          if (isSelectedBrake) {
            return (
              <div
                key={brake.name}
                className="relative flex size-[50px] items-center justify-center rounded-full border border-black"
              >
                <Triangle className="absolute left-0 top-1/2 size-1 -translate-y-1/2 rotate-90"></Triangle>
                <img
                  className="size-9 cursor-pointer rounded-full"
                  src={brake.imageUrl}
                ></img>
              </div>
            );
          }
          return (
            <img
              onClick={() => selectBrake(brake)}
              key={brake.name}
              className="size-[50px] cursor-pointer rounded-full"
              src={brake.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
