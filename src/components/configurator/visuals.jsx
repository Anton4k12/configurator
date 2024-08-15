import { ChevronRight } from "../icons/chevron-right";
import { BrakeCalipers } from "./brake-calipers";
import { Wheels } from "./wheels";

export const Visuals = ({ data }) => {
  return (
    <div className="flex gap-6 pl-3 pt-6">
      <div aria-label="image" className="relative w-2/3">
        <img
          className="rounded-2xl"
          src="/home/GranTurismo/Trofeo/configurator/GranTurismo-config.jpeg"
        />

        <div className="absolute right-6 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white">
          <ChevronRight strokeWidth={3} className="size-3"></ChevronRight>
        </div>

        <div className="absolute left-6 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white">
          <ChevronRight
            strokeWidth={3}
            className="size-3 rotate-180"
          ></ChevronRight>
        </div>
      </div>

      <div className="flex flex-col gap-16 px-10">
        <div aria-label="wheels">
          <Wheels wheels={data.wheels}></Wheels>
        </div>

        <div data-brake-calipers>
          <BrakeCalipers></BrakeCalipers>
        </div>
      </div>
    </div>
  );
};
