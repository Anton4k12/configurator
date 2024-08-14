import { useState } from "react";
import { cn } from "@/lib/utils";

export const Wheels = ({ wheels }) => {
  const initialWheel = wheels.find((wheel) => {
    if (wheel.price === null) {
      return true;
    } else {
      return false;
    }
  });

  const [selectedWheel, setSelectedWheel] = useState(initialWheel);

  const handleWheelClick = (wheel) => {
    setSelectedWheel(wheel);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="text-[40px] font-extralight leading-none">Wheels</div>

      <div className="text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]">
        {selectedWheel.diameter} {selectedWheel.name}{" "}
        {selectedWheel.price !== null && <span>$ {selectedWheel.price}</span>}
      </div>

      <div data-wheels className="flex gap-3">
        {wheels.map((wheel) => {
          const isSelectedWheel = selectedWheel.name === wheel.name;
          if (isSelectedWheel) {
            return (
              <div className="flex size-[50px] items-center justify-center rounded-full border border-black">
                <img className="size-9 rounded-full" src={wheel.imageUrl}></img>
              </div>
            );
          }
          return (
            <img
              onClick={() => handleWheelClick(wheel)}
              key={wheel.name}
              className="size-[50px]"
              src={wheel.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
