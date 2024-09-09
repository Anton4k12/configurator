import { useConfiguratorContext } from "@/hooks/useConfiguratorContext";
import { useParams } from "react-router-dom";
import { ChevronRight } from "../icons/chevron-right";
import { Header } from "../shared/header";
import { BottomNavBar } from "./bottom-navbar";
import { BrakeCalipers } from "./brake-calipers";
import { ExteriorColor } from "./exterior-colors";
import { Options } from "./options";
import { Packages } from "./packages";
import { Seats } from "./seats";
import { Summary } from "./summary";
import { TopNavBar } from "./top-navbar";
import { Trim } from "./trim";
import { Wheels } from "./wheels";

export const ConfiguratorPageContents = ({ data, subModels }) => {
  const { modelName, subModelName } = useParams();

  const selectedColor = useConfiguratorContext((s) => s.selectedColor);

  const selectedWheel = useConfiguratorContext((s) => s.selectedWheel);

  const selectedBrake = useConfiguratorContext((s) => s.selectedBrake);

  const selectedTrim = useConfiguratorContext((s) => s.selectedTrim);

  const selectedSeat = useConfiguratorContext((s) => s.selectedSeat);

  const selectedPackagesIds = useConfiguratorContext(
    (s) => s.selectedPackagesIds,
  );

  const selectedOptionsIds = useConfiguratorContext(
    (s) => s.selectedOptionsIds,
  );

  const subModel = subModels.find((subModel) => {
    return subModel.modelName === modelName && subModel.name === subModelName;
  });

  const getPrice = useConfiguratorContext((s) => s.getPrice);

  const price = getPrice({
    startingPrice: subModel.startingPrice,
    packages: data.packages,
    options: data.options,
  });

  const personalizatedPrice = price - subModel.startingPrice;

  return (
    <div className="pb-96">
      <Header color="#FFFFFF"></Header>

      <TopNavBar></TopNavBar>

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
            <Wheels selectedWheel={selectedWheel} wheels={data.wheels}></Wheels>
          </div>

          <div data-brake-calipers>
            <BrakeCalipers
              selectedBrake={selectedBrake}
              brakeCalipers={data.brakeCalipers}
            ></BrakeCalipers>
          </div>

          <div data-seats>
            <Seats selectedSeat={selectedSeat} seats={data.seats}></Seats>
          </div>

          <div data-trims>
            <Trim selectedTrim={selectedTrim} trim={data.trim}></Trim>
          </div>
        </div>
      </div>

      <Packages
        selectedIds={selectedPackagesIds}
        packages={data.packages}
      ></Packages>

      <Options
        selectedIds={selectedOptionsIds}
        optionsTypes={data.optionsTypes}
        options={data.options}
      ></Options>

      <Summary
        price={price}
        personalizatedPrice={personalizatedPrice}
        subModel={subModel}
      ></Summary>

      <BottomNavBar subModel={subModel} price={price}></BottomNavBar>
    </div>
  );
};
