import { useState } from "react";
import { ChevronRight } from "../icons/chevron-right";
import { Header } from "../shared/header";
import { BottomNavBar } from "./bottom-navbar";
import { BrakeCalipers } from "./brake-calipers";
import { ExteriorColor } from "./exterior-colors";
import { Options } from "./options";
import { Packages } from "./packages";
import { Seats } from "./seats";
import { TopNavBar } from "./top-navbar";
import { Trim } from "./trim";
import { Wheels } from "./wheels";
import { useLocation } from "react-router-dom";

export const ConfiguratorPageContents = ({ data }) => {
  const { state, pathname } = useLocation();

  const initialWheel = data.wheels.find((wheel) => {
    if (wheel.price === null) {
      return true;
    } else {
      return false;
    }
  });

  const [selectedWheel, setSelectedWheel] = useState(initialWheel);

  const price = state.price + selectedWheel?.price;
  console.log(price);

  return (
    <div className="pb-96">
      <Header color="#FFFFFF"></Header>

      <TopNavBar></TopNavBar>

      {/* <Visuals data={data}></Visuals> */}
      <div className="flex gap-6 pl-3">
        <div aria-label="image" className="sticky top-12 h-fit w-2/3 pt-6">
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

        <div className="flex w-1/3 flex-col gap-16 px-10 pt-6">
          <div>
            <ExteriorColor
              colorsTypes={data.colorsTypes}
              colors={data.colors}
            ></ExteriorColor>
          </div>

          <div aria-label="wheels">
            <Wheels
              selectedWheel={selectedWheel}
              onWheelSelect={setSelectedWheel}
              wheels={data.wheels}
            ></Wheels>
          </div>

          <div data-brake-calipers>
            <BrakeCalipers></BrakeCalipers>
          </div>

          <div data-seats>
            <Seats seats={data.seats}></Seats>
          </div>

          <div data-trims>
            <Trim trim={data.trim}></Trim>
          </div>
        </div>
      </div>

      <Packages packages={data.packages}></Packages>

      <Options
        optionsTypes={data.optionsTypes}
        options={data.options}
      ></Options>

      <BottomNavBar price={price}></BottomNavBar>
    </div>
  );
};
