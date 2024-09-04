import { ConfiguratorContext } from "@/state";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "zustand";
import SaveIcon from "../icons/save-icon";

export const Summary = ({ price, personalizatedPrice }) => {
  const { state, pathname } = useLocation();

  const store = useContext(ConfiguratorContext);

  const selectedColor = useStore(store, (state) => state.selectedColor);
  const selectedSeat = useStore(store, (state) => state.selectedSeat);
  return (
    <div>
      <div className="flex flex-col items-center rounded-2xl bg-[#eee] py-10 text-6xl font-extralight">
        <div className="tracking-wide">
          Your {state.carName} {state.name}
        </div>
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
            <div className="text-[11px] uppercase tracking-[1px]">
              <div className="py-9 font-medium">exterior</div>

              <hr className="border-zinc-400" />

              <div className="py-9 font-medium">interior</div>

              <hr className="border-zinc-400" />
            </div>

            <div className="pb-[60px]">
              <div className="pb-6 text-[26px] font-light">Specifications</div>

              <hr className="border-zinc-400" />
              <div className="pb-6 pt-[30px] font-light">
                <div className="text-sm tracking-[1px] text-[#666]">
                  Engine layout
                </div>

                <div className="text-xl">
                  {state.engineLayout} {state.maxPower}
                </div>
              </div>

              <hr className="border-zinc-400" />

              <div className="py-[35px] text-[11px] font-medium uppercase tracking-[1px]">
                Technical specifications
              </div>

              <hr className="border-zinc-400" />
            </div>

            <div>
              <div className="pb-6 text-[26px] font-light">Prices recap</div>

              <hr className="border-black" />

              <div className="pt-8">
                <div className="text-sm font-medium">
                  Base price ${state.startingPrice}
                </div>

                {personalizatedPrice !== 0 && (
                  <div className="text-sm font-medium">
                    Personalization ${personalizatedPrice}
                  </div>
                )}

                <div className="text-sm font-medium">
                  As configured ${price}
                </div>
              </div>
            </div>
          </div>

          <div data-sticky-summary className="w-1/3 bg-white px-[43px] py-8">
            <div className="pb-8">
              <div className="flex justify-between pb-[6px] text-center">
                <div className="text-[40px] font-light">
                  {state.carName} {state.name}
                </div>
                <SaveIcon></SaveIcon>
              </div>

              <div className="text-sm tracking-[1px] text-[#666]">
                Total price
              </div>

              <div className="text-xl">${price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
