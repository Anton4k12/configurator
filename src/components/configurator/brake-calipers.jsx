import { useState } from "react";
import { Triangle } from "../icons/triangle";

const mockBrakeCalipers = [
  {
    name: "Gloss Black Painted Brake Calipers",
    imageUrl:
      "/configurator/GranTurismo/Brake Calipers/Gloss Black Painted Brake Calipers.jpg",
    price: 500,
  },
  {
    name: "Gloss Red Painted Brake Calipers",
    imageUrl:
      "/configurator/GranTurismo/Brake Calipers/Gloss Red Painted Brake Calipers.jpg",
    price: null,
  },
  {
    name: "Gloss Yellow Painted Brake Calipers",
    imageUrl:
      "/configurator/GranTurismo/Brake Calipers/Gloss Yellow Painted Brake Calipers.jpg",
    price: 500,
  },
  {
    name: "Anodized Red Calipers",
    imageUrl:
      "/configurator/GranTurismo/Brake Calipers/Anodized Red Calipers.jpg",
    price: 1000,
  },
  {
    name: "Brake Calipers Painted In Blue",
    imageUrl:
      "/configurator/GranTurismo/Brake Calipers/Brake Calipers Painted In Blue.jpg",
    price: 500,
  },
];

export const BrakeCalipers = () => {
  const initialBrake = mockBrakeCalipers.find((brake) => {
    if (brake.price === null) {
      return true;
    } else {
      return false;
    }
  });

  const [selectedBrake, setSelectedBrake] = useState(initialBrake);

  const handleBrakeClick = (brake) => {
    setSelectedBrake(brake);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="text-[40px] font-extralight leading-none">
        Brake Calipers
      </div>

      <div className="text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]">
        {selectedBrake.diameter} {selectedBrake.name}{" "}
        {selectedBrake.price !== null && <span>$ {selectedBrake.price}</span>}
      </div>

      <div data-brake className="flex gap-3">
        {mockBrakeCalipers.map((brake) => {
          const isSelectedBrake = selectedBrake.name === brake.name;
          if (isSelectedBrake) {
            return (
              <div
                key={brake.name}
                className="relative flex size-[50px] items-center justify-center rounded-full border border-black"
              >
                <Triangle className="absolute left-0 top-1/2 size-1 -translate-y-1/2 rotate-90"></Triangle>
                <img className="size-9 rounded-full" src={brake.imageUrl}></img>
              </div>
            );
          }
          return (
            <img
              onClick={() => handleBrakeClick(brake)}
              key={brake.name}
              className="size-[50px]"
              src={brake.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
