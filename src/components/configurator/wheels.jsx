import { useState } from "react";
import { Triangle } from "../icons/triangle";
import { formatPrice } from "@/lib/utils";

export const Wheels = ({ wheels, selectedWheel, onWheelSelect }) => {
  // const [selectedWheel, setSelectedWheel] = useState(initialWheel);

  const handleWheelClick = (wheel) => {
    onWheelSelect(wheel);
  };

  const formattedPrice = formatPrice(selectedWheel.price);

  return (
    <div className="flex flex-col gap-5">
      <div className="text-[40px] font-extralight leading-none">Wheels</div>

      <div className="text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]">
        {selectedWheel.diameter} {selectedWheel.name}{" "}
        {selectedWheel.price !== null && <span>{formattedPrice}</span>}
      </div>

      <div data-wheels className="flex gap-3">
        {wheels.map((wheel) => {
          const isSelectedWheel = selectedWheel.name === wheel.name;
          if (isSelectedWheel) {
            return (
              <div
                key={wheel.name}
                className="relative flex size-[50px] items-center justify-center rounded-full border border-black"
              >
                <Triangle className="absolute left-0 top-1/2 size-1 -translate-y-1/2 rotate-90"></Triangle>
                <img
                  className="size-9 cursor-pointer rounded-full"
                  src={wheel.imageUrl}
                ></img>
              </div>
            );
          }
          return (
            <img
              onClick={() => handleWheelClick(wheel)}
              key={wheel.name}
              className="size-[50px] cursor-pointer rounded-full"
              src={wheel.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
