import { useConfiguratorStore } from "@/state";
import { Triangle } from "../icons/triangle";

export const Seats = ({ seats, selectedSeat }) => {
  const selectSeat = useConfiguratorStore((s) => s.selectSeat);
  return (
    <div className="flex flex-col gap-5 px-8 lg:px-0">
      <div className="text-[35px] font-extralight leading-none lg:text-[40px]">
        Seats
      </div>

      <div>
        <div className="pb-2 text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]">
          Interior color — {selectedSeat.name}
        </div>
        <div className="w-fit border-b border-black p-1 pb-1 text-[11px] font-medium uppercase">
          Interior color
        </div>
      </div>

      <div data-wheels className="flex flex-wrap gap-3">
        {seats.map((seat) => {
          const isSelectedSeat = selectedSeat.name === seat.name;
          if (isSelectedSeat) {
            return (
              <div
                key={seat.name}
                className="relative flex size-[50px] items-center justify-center rounded-full border border-black"
              >
                <Triangle className="absolute left-0 top-1/2 size-1 -translate-y-1/2 rotate-90"></Triangle>
                <img
                  className="size-9 cursor-pointer rounded-full"
                  src={seat.imageUrl}
                ></img>
              </div>
            );
          }
          return (
            <img
              onClick={() => selectSeat(seat)}
              key={seat.name}
              className="size-[50px] cursor-pointer rounded-full"
              src={seat.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
