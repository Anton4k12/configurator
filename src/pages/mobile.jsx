import { BrakeCalipers } from "@/components/configurator/brake-calipers";
import { ExteriorColor } from "@/components/configurator/exterior-colors";
import { Seats } from "@/components/configurator/seats";
import { Summary } from "@/components/configurator/summary";
import { TopNavBar } from "@/components/configurator/top-navbar";
import { Trim } from "@/components/configurator/trim";
import { Wheels } from "@/components/configurator/wheels";
import { Header } from "@/components/shared/header";
import { useConfiguratorStore } from "@/state/v2";
import { useParams } from "react-router-dom";

export const Mobile = ({ data, subModels }) => {
  const { modelName, subModelName } = useParams();

  const selectedColor = useConfiguratorStore((s) => s.selectedColor);

  const selectedWheel = useConfiguratorStore((s) => s.selectedWheel);

  const selectedBrake = useConfiguratorStore((s) => s.selectedBrake);

  const selectedTrim = useConfiguratorStore((s) => s.selectedTrim);

  const selectedSeat = useConfiguratorStore((s) => s.selectedSeat);

  const getPrice = useConfiguratorStore((s) => s.getPrice);

  const subModel = subModels.find((subModel) => {
    return subModel.modelName === modelName && subModel.name === subModelName;
  });

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

      <div data-exterior>
        <div className="sticky top-0 z-40 overflow-hidden px-7 pt-[41px]">
          <img className="rounded-2xl" src="/home/GranTurismo/gfx1.jpeg" />
        </div>

        <div className="py-16">
          <ExteriorColor
            colorsTypes={data.colorsTypes}
            colors={data.colors}
          ></ExteriorColor>
        </div>

        <div className="pb-16">
          <Wheels selectedWheel={selectedWheel} wheels={data.wheels}></Wheels>
        </div>

        <div className="pb-16">
          <BrakeCalipers
            selectedBrake={selectedBrake}
            brakeCalipers={data.brakeCalipers}
          ></BrakeCalipers>
        </div>
      </div>

      <div data-interior>
        <div className="sticky top-0 z-40 overflow-hidden px-7 pt-4">
          <img className="rounded-2xl" src="/home/GranTurismo/gfx5.jpeg" />
        </div>

        <div className="py-16">
          <Seats selectedSeat={selectedSeat} seats={data.seats}></Seats>
        </div>

        <div className="pb-16">
          <Trim selectedTrim={selectedTrim} trim={data.trim}></Trim>
        </div>

        <div className="px-3">
          <div className="flex flex-col gap-[8px] bg-[#eee] p-6">
            <span className="text-[11px] font-medium uppercase tracking-[1px]">
              Packages, options and accessories
            </span>
            <p className="text-[11px] font-light leading-[15px] tracking-[1px]">
              This information is only accessible on a desktop device. To
              discover these sections and get more info about the additional
              equipment for your GranTurismo Modena save this configuration for
              later or contact your nearest dealer
            </p>
          </div>
        </div>
      </div>

      <div>
        <Summary
          price={price}
          personalizatedPrice={personalizatedPrice}
          subModel={subModel}
        ></Summary>
      </div>
    </div>
  );
};
