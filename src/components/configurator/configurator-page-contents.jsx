import { useConfiguratorContext } from "@/hooks/useConfiguratorContext";
import { replace, useNavigate, useParams } from "react-router-dom";
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
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { useEffect } from "react";
import { ScrollToAnchor } from "../shared/scroller";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Footer } from "../shared/footer";
import useSWR from "swr";
import { formatPrice, getImagesHash } from "@/lib/utils";
import { fetcher } from "@/data";

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

  const state = {
    color: `${selectedColor.name}`,
    wheel: `${selectedWheel.name}`,
    brake: `${selectedBrake.name}`,
    trim: `${selectedTrim.name}`,
    seat: `${selectedSeat.name}__${selectedSeat.id}`,
  };
  const queryParam = `?color=${encodeURI(state.color)}&wheel=${encodeURI(state.wheel)}&brake=${encodeURI(state.brake)}&trim=${encodeURI(state.trim)}&seat=${encodeURI(state.seat)}`;

  const { data: images, isLoading } = useSWR(`/images${queryParam}`, fetcher);

  console.log({ images, isLoading });

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

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const logScroll = () => {
  //     const packages = document
  //       .querySelector("#packages")
  //       .getBoundingClientRect();

  //     if (packages.y <= 0) {
  //       navigate("#packages", { replace: true });
  //     }

  //     console.log(document.documentElement.scrollTop, { packages });
  //   };

  //   document.addEventListener("scroll", logScroll);

  //   return () => {
  //     document.removeEventListener("scroll", logScroll);
  //   };
  // }, []);

  return (
    <div>
      <Header color="#FFFFFF"></Header>

      <ScrollToAnchor></ScrollToAnchor>

      <TopNavBar></TopNavBar>

      <div className="flex gap-6 pl-3">
        {/* <div aria-label="image" className="sticky top-12 h-fit w-2/3 pt-6">
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
        </div> */}

        <Carousel
          className="sticky top-12 h-fit w-2/3 pt-6"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {images &&
              images.map((src, i) => {
                return (
                  <CarouselItem key={i}>
                    <img className="overflow-hidden rounded-2xl" src={src} />
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious></CarouselPrevious>
          <CarouselNext></CarouselNext>
        </Carousel>

        <div className="flex w-1/3 flex-col px-10 *:py-8">
          <ExteriorColor
            colorsTypes={data.colorsTypes}
            colors={data.colors}
          ></ExteriorColor>

          <Wheels selectedWheel={selectedWheel} wheels={data.wheels}></Wheels>

          <BrakeCalipers
            selectedBrake={selectedBrake}
            brakeCalipers={data.brakeCalipers}
          ></BrakeCalipers>

          <Seats selectedSeat={selectedSeat} seats={data.seats}></Seats>

          <Trim selectedTrim={selectedTrim} trim={data.trim}></Trim>
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

      <Footer></Footer>
    </div>
  );
};
