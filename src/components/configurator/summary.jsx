import { ConfiguratorContext } from "@/state";
import { useContext } from "react";
import { useStore } from "zustand";

export const Summary = () => {
  const store = useContext(ConfiguratorContext);

  const selectedColor = useStore(store, (state) => state.selectedColor);
  const selectedSeat = useStore(store, (state) => state.selectedSeat);
  return (
    <div>
      <div className="rounded-2xl bg-[#eee] py-10 text-6xl">
        Your ...
        <div className="flex gap-3 pl-3 pt-[60px]">
          <div
            data-summary
            className="flex w-2/3 flex-col gap-[60px] bg-white px-[93px] pt-[60px]"
          >
            <img className="rounded-2xl" src="/home/GranTurismo/gfx1.jpeg" />
            <div>
              <div className="pb-6 text-2xl font-normal">
                Configuration recap
              </div>
              <hr className="border-zinc-400" />
              <div className="flex justify-between pt-10">
                <div className="flex flex-1 items-center gap-4">
                  <img
                    className="rounded-full"
                    src={selectedColor.imageUrl}
                  ></img>
                  <div className="flex flex-col">
                    <div className="text-sm text-[#666]">Exterior Color</div>
                    <div className="text-sm">{selectedColor.name}</div>
                  </div>
                </div>
                <div className="flex flex-1 items-center gap-4">
                  <img
                    className="rounded-full"
                    src={selectedSeat.imageUrl}
                  ></img>
                  <div className="flex flex-col">
                    <div className="text-sm text-[#666]">Seats</div>
                    <div className="text-sm">{selectedSeat.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-sticky-summary className="w-1/3 bg-white">
            <div className="w-full">hi</div>
          </div>
        </div>
      </div>
    </div>
  );
};
