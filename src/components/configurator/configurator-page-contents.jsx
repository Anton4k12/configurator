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

  const initialTrim = data.trim.find((trim) => {
    if (trim.price === null) {
      return true;
    } else {
      return false;
    }
  });

  const initialBrake = data.brakeCalipers.find((brake) => {
    if (brake.price === null) {
      return true;
    } else {
      return false;
    }
  });

  const [selectedWheel, setSelectedWheel] = useState(initialWheel);

  const [selectedColor, setSelectedColor] = useState(data.colors[1]);

  const [selectedTrim, setSelectedTrim] = useState(initialTrim);

  const [selectedBrake, setSelectedBrake] = useState(initialBrake);

  const [selectedPackagesIds, setSelectedPackagesIds] = useState([]);

  const [selectedOptionsIds, setSelectedOptionsIds] = useState([]);

  const handleAddPackage = (id) => {
    setSelectedPackagesIds([...selectedPackagesIds, id]);
  };

  const handleRemovePackage = (id) => {
    const newIds = selectedPackagesIds.filter((pack) => {
      if (id !== pack.id) {
        return false;
      } else {
        return true;
      }
    });
    setSelectedPackagesIds(newIds);
  };

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

  const handleAddOption = (id) => {
    setSelectedOptionsIds([...selectedOptionsIds, id]);
  };

  const handleRemoveOption = (id) => {
    const newIds = selectedOptionsIds.filter((option) => {
      if (id !== option.id) {
        return false;
      } else {
        return true;
      }
    });
    setSelectedOptionsIds(newIds);
  };

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

  const price =
    state.price +
    selectedWheel.price +
    selectedColor.price +
    selectedTrim.price +
    selectedBrake.price +
    totalPricePackage +
    totalPriceOption;
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
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
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
            <BrakeCalipers
              selectedBrake={selectedBrake}
              onBrakeSelect={setSelectedBrake}
              brakeCalipers={data.brakeCalipers}
            ></BrakeCalipers>
          </div>

          <div data-seats>
            <Seats seats={data.seats}></Seats>
          </div>

          <div data-trims>
            <Trim
              selectedTrim={selectedTrim}
              onTrimSelect={setSelectedTrim}
              trim={data.trim}
            ></Trim>
          </div>
        </div>
      </div>

      <Packages
        selectedIds={selectedPackagesIds}
        packages={data.packages}
        onPackAdd={handleAddPackage}
        onPackRemove={handleRemovePackage}
      ></Packages>

      <Options
        selectedIds={selectedOptionsIds}
        optionsTypes={data.optionsTypes}
        options={data.options}
        onOptionAdd={handleAddOption}
        onOptionRemove={handleRemoveOption}
      ></Options>

      <BottomNavBar price={price}></BottomNavBar>
    </div>
  );
};