import { useContext, useRef, useState } from "react";
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
import { useLocation, useParams } from "react-router-dom";
import { createConfiguratorStore, ConfiguratorContext } from "@/state";
import { useStore } from "zustand";
import { Summary } from "./summary";
import useSWR from "swr";
import { fetcher } from "@/data";
import { LoadingScreen } from "../shared/loading-screen";

export const ConfiguratorPageContents = ({ data, models }) => {
  const store = useContext(ConfiguratorContext);

  const { carName, carModel } = useParams();

  const selectedWheel = useStore(store, (state) => state.selectedWheel);
  const selectWheel = useStore(store, (state) => state.selectWheel);

  const selectedColor = useStore(store, (state) => state.selectedColor);
  const selectColor = useStore(store, (state) => state.selectColor);

  const selectedBrake = useStore(store, (state) => state.selectedBrake);
  const selectBrake = useStore(store, (state) => state.selectBrake);

  const selectedTrim = useStore(store, (state) => state.selectedTrim);
  const selectTrim = useStore(store, (state) => state.selectTrim);

  const selectedSeat = useStore(store, (state) => state.selectedSeat);
  const selectSeat = useStore(store, (state) => state.selectSeat);

  const selectedPackagesIds = useStore(
    store,
    (state) => state.selectedPackagesIds,
  );
  const addPackage = useStore(store, (state) => state.addPackage);
  const removePackage = useStore(store, (state) => state.removePackage);

  const selectedOptionsIds = useStore(
    store,
    (state) => state.selectedOptionsIds,
  );
  const addOption = useStore(store, (state) => state.addOption);
  const removeOption = useStore(store, (state) => state.removeOption);

  const selectedPackages = data.packages.filter((pack) => {
    if (selectedPackagesIds.includes(pack.id)) {
      return true;
    } else {
      return false;
    }
  });

  const totalPricePackage = selectedPackages.reduce(
    (acc, pack) => acc + pack.price,
    0,
  );

  const selectedOptions = data.options.filter((option) => {
    if (selectedOptionsIds.includes(option.id)) {
      return true;
    } else {
      return false;
    }
  });

  const totalPriceOption = selectedOptions.reduce(
    (acc, option) => acc + option.price,
    0,
  );

  const model = models.find((model) => {
    return model.carName === carName && model.name === carModel;
  });

  const personalizatedPrice =
    selectedWheel.price +
    selectedColor.price +
    selectedTrim.price +
    selectedBrake.price +
    totalPricePackage +
    totalPriceOption;

  const price =
    model.startingPrice +
    selectedWheel.price +
    selectedColor.price +
    selectedTrim.price +
    selectedBrake.price +
    totalPricePackage +
    totalPriceOption;

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
              selectedColor={selectedColor}
              onColorSelect={selectColor}
              colorsTypes={data.colorsTypes}
              colors={data.colors}
            ></ExteriorColor>
          </div>

          <div aria-label="wheels">
            <Wheels
              selectedWheel={selectedWheel}
              onWheelSelect={selectWheel}
              wheels={data.wheels}
            ></Wheels>
          </div>

          <div data-brake-calipers>
            <BrakeCalipers
              selectedBrake={selectedBrake}
              onBrakeSelect={selectBrake}
              brakeCalipers={data.brakeCalipers}
            ></BrakeCalipers>
          </div>

          <div data-seats>
            <Seats
              selectedSeat={selectedSeat}
              onSeatSelect={selectSeat}
              seats={data.seats}
            ></Seats>
          </div>

          <div data-trims>
            <Trim
              selectedTrim={selectedTrim}
              onTrimSelect={selectTrim}
              trim={data.trim}
            ></Trim>
          </div>
        </div>
      </div>

      <Packages
        selectedIds={selectedPackagesIds}
        packages={data.packages}
        onPackAdd={addPackage}
        onPackRemove={removePackage}
      ></Packages>

      <Options
        selectedIds={selectedOptionsIds}
        optionsTypes={data.optionsTypes}
        options={data.options}
        onOptionAdd={addOption}
        onOptionRemove={removeOption}
      ></Options>

      <Summary
        price={price}
        personalizatedPrice={personalizatedPrice}
        model={model}
      ></Summary>

      <BottomNavBar model={model} price={price}></BottomNavBar>
    </div>
  );
};
