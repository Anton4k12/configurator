import { fetcher } from "@/data";
import { useConfiguratorStore } from "@/state/v2";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { ScrollToAnchor } from "@/components/shared/scroller";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BottomNavBar } from "@/components/configurator/bottom-navbar";
import { BrakeCalipers } from "@/components/configurator/brake-calipers";
import { ExteriorColor } from "@/components/configurator/exterior-colors";
import { Options } from "@/components/configurator/options";
import { Packages } from "@/components/configurator/packages";
import { Seats } from "@/components/configurator/seats";
import { Summary } from "@/components/configurator/summary";
import { TopNavBar } from "@/components/configurator/top-navbar";
import { Trim } from "@/components/configurator/trim";
import { Wheels } from "@/components/configurator/wheels";
import { useEffect, useState } from "react";
import { usePrevious } from "@/hooks/usePrevious";
import useScrollSpy from "@/hooks/useScrollSpy";

export const ConfiguratorPage = () => {
  const { modelName, subModelName } = useParams();

  const detailsData = useConfiguratorStore((s) => s.detailsData);

  const subModels = useConfiguratorStore((s) => s.subModels);

  const selectedColor = useConfiguratorStore((s) => s.selectedColor);

  const selectedWheel = useConfiguratorStore((s) => s.selectedWheel);

  const selectedBrake = useConfiguratorStore((s) => s.selectedBrake);

  const selectedTrim = useConfiguratorStore((s) => s.selectedTrim);

  const selectedSeat = useConfiguratorStore((s) => s.selectedSeat);

  const selectedPackagesIds = useConfiguratorStore(
    (s) => s.selectedPackagesIds,
  );

  const selectedOptionsIds = useConfiguratorStore((s) => s.selectedOptionsIds);

  const state = {
    color: `${selectedColor.name}`,
    wheel: `${selectedWheel.name}`,
    brake: `${selectedBrake.name}`,
    trim: `${selectedTrim.name}`,
    seat: `${selectedSeat.id}`,
  };
  const queryParam = `?color=${encodeURI(state.color)}&wheel=${encodeURI(state.wheel)}&brake=${encodeURI(state.brake)}&trim=${encodeURI(state.trim)}&seat=${encodeURI(state.seat)}`;

  const { data: images, isLoading } = useSWR(`/images${queryParam}`, fetcher, {
    keepPreviousData: true,
  });

  // const prevImages = usePrevious(images);

  // const dispayedImages = images ? images : prevImages;

  console.log({ images });

  // if (images) {
  //   const croppedImages = images.slice(0, 7);
  //   return croppedImages;
  // }

  const subModel = subModels.find((subModel) => {
    return subModel.modelName === modelName && subModel.name === subModelName;
  });

  const getPrice = useConfiguratorStore((s) => s.getPrice);

  const price = getPrice({
    startingPrice: subModel.startingPrice,
    packages: detailsData.packages,
    options: detailsData.options,
  });

  const personalizatedPrice = price - subModel.startingPrice;

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // useScrollSpy(48);

  return (
    <div>
      <Header color="#FFFFFF"></Header>

      <TopNavBar></TopNavBar>

      <div
        data-desktop
        className="hidden flex-col px-3 lg:flex lg:flex-row lg:gap-6 lg:pl-3"
      >
        <Carousel
          setApi={setApi}
          className="sticky top-0 z-30 h-fit px-4 pb-16 pt-[41px] lg:w-2/3 lg:px-0 lg:pb-0 lg:pt-6"
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

        <div className="flex flex-col *:py-8 lg:w-1/3 lg:px-10">
          <ExteriorColor
            colorsTypes={detailsData.colorsTypes}
            colors={detailsData.colors}
          ></ExteriorColor>

          <Wheels
            selectedWheel={selectedWheel}
            wheels={detailsData.wheels}
          ></Wheels>

          <BrakeCalipers
            selectedBrake={selectedBrake}
            brakeCalipers={detailsData.brakeCalipers}
          ></BrakeCalipers>

          <Seats selectedSeat={selectedSeat} seats={detailsData.seats}></Seats>

          <Trim selectedTrim={selectedTrim} trim={detailsData.trim}></Trim>
        </div>
      </div>

      <div
        data-mobile
        className="flex flex-col px-3 lg:hidden lg:flex-row lg:gap-6 lg:pl-3"
      >
        <div className="flex flex-col *:py-8">
          <Carousel
            setApi={setApi}
            className="sticky top-0 z-30 h-fit px-4 pb-16 pt-[41px] lg:w-2/3 lg:px-0 lg:pb-0 lg:pt-6"
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

          <ExteriorColor
            colorsTypes={detailsData.colorsTypes}
            colors={detailsData.colors}
          ></ExteriorColor>

          <Wheels
            selectedWheel={selectedWheel}
            wheels={detailsData.wheels}
          ></Wheels>

          <BrakeCalipers
            selectedBrake={selectedBrake}
            brakeCalipers={detailsData.brakeCalipers}
          ></BrakeCalipers>
        </div>

        <div className="flex flex-col *:py-8">
          <Carousel
            setApi={setApi}
            className="sticky top-0 z-30 h-fit px-4 pb-16 pt-[41px] lg:hidden lg:w-2/3 lg:pb-0 lg:pt-6"
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

          <Seats selectedSeat={selectedSeat} seats={detailsData.seats}></Seats>

          <Trim selectedTrim={selectedTrim} trim={detailsData.trim}></Trim>

          <div className="pt-8">
            <div className="flex flex-col gap-[8px] bg-[#eee] p-6">
              <span className="text-[11px] font-medium uppercase tracking-[1px]">
                Packages, options and accessories
              </span>
              <p className="text-[11px] font-light leading-[15px] tracking-[1px]">
                This information is only accessible on a desktop device. To
                discover these sections and get more info about the additional
                equipment for your GranTurismo Modena save this configuration
                for later or contact your nearest dealer
              </p>
            </div>
          </div>
        </div>
      </div>

      <Packages
        selectedIds={selectedPackagesIds}
        packages={detailsData.packages}
      ></Packages>

      <Options
        selectedIds={selectedOptionsIds}
        optionsTypes={detailsData.optionsTypes}
        options={detailsData.options}
      ></Options>

      <Summary
        price={price}
        personalizatedPrice={personalizatedPrice}
        subModel={subModel}
      ></Summary>

      <BottomNavBar subModel={subModel} price={price}></BottomNavBar>

      <Footer modelName={modelName} subModel={subModel}></Footer>
    </div>
  );
};
