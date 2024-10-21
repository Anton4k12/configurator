import { BottomNavBar } from "@/components/configurator/bottom-navbar";
import { BrakeCalipers } from "@/components/configurator/brake-calipers";
import { CarouselMobile } from "@/components/configurator/carousel-mobile";
import { ExteriorColor } from "@/components/configurator/exterior-colors";
import { Options } from "@/components/configurator/options";
import { Packages } from "@/components/configurator/packages";
import { Seats } from "@/components/configurator/seats";
import { Summary } from "@/components/configurator/summary";
import { TopNavBar } from "@/components/configurator/top-navbar";
import { Trim } from "@/components/configurator/trim";
import { Wheels } from "@/components/configurator/wheels";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetcher } from "@/data";
import { useConfiguratorStore } from "@/state";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { useMediaQuery } from "usehooks-ts";

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

  const croppedImages = images ? images.slice(0, 8) : undefined;
  const exteriorImages = images ? images.slice(0, 4) : undefined;
  const interiorImages = images ? images.slice(4, 8) : undefined;

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

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [distance, setDistance] = useState(0);

  const calculateDistance = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    const distanceFromBottom =
      documentHeight - (scrollPosition + viewportHeight);
    setDistance(distanceFromBottom);
  };

  useEffect(() => {
    // Calculate the distance on initial load
    calculateDistance();

    // Recalculate the distance whenever the user scrolls
    window.addEventListener("scroll", calculateDistance);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", calculateDistance);
    };
  }, []);

  const firstPicSummary = images
    ? images.filter((pic) => {
        if (pic.includes("gfx1")) {
          return true;
        } else {
          return false;
        }
      })
    : undefined;

  const secondPicSummary = images
    ? images.filter((pic) => {
        if (pic.includes("gfx2")) {
          return true;
        } else {
          return false;
        }
      })
    : undefined;

  const thirdPicSummary = images
    ? images.filter((pic) => {
        if (pic.includes("gfx7")) {
          return true;
        } else {
          return false;
        }
      })
    : undefined;

  return (
    <div>
      <Header color="#FFFFFF"></Header>

      <TopNavBar></TopNavBar>

      {isDesktop && (
        <div
          data-desktop
          className="hidden flex-col px-3 lg:flex lg:flex-row lg:gap-6 lg:pl-3"
        >
          {images ? (
            <Carousel
              className="sticky top-0 h-fit px-4 pb-16 pt-[41px] lg:w-2/3 lg:px-0 lg:pb-0 lg:pt-6"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {croppedImages.map((src, i) => {
                  return (
                    <CarouselItem key={i}>
                      <img
                        className="h-[37vw] overflow-hidden rounded-2xl"
                        src={src}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious></CarouselPrevious>
              <CarouselNext></CarouselNext>
            </Carousel>
          ) : (
            <div className="sticky top-0 z-30 h-fit px-4 pb-16 pt-[41px] lg:w-2/3 lg:px-0 lg:pb-0 lg:pt-6">
              <div className="h-full w-full animate-pulse rounded-2xl bg-zinc-100"></div>
            </div>
          )}

          <div className="flex flex-col *:py-8 lg:w-1/3 lg:px-10">
            <div id="exterior">
              <ExteriorColor
                colorsTypes={detailsData.colorsTypes}
                colors={detailsData.colors}
              ></ExteriorColor>
            </div>

            <Wheels
              selectedWheel={selectedWheel}
              wheels={detailsData.wheels}
            ></Wheels>

            <BrakeCalipers
              selectedBrake={selectedBrake}
              brakeCalipers={detailsData.brakeCalipers}
            ></BrakeCalipers>

            <div id="interior">
              <Seats
                selectedSeat={selectedSeat}
                seats={detailsData.seats}
              ></Seats>
            </div>

            <Trim selectedTrim={selectedTrim} trim={detailsData.trim}></Trim>
          </div>
        </div>
      )}

      {!isDesktop && (
        <div data-mobile className="flex flex-col px-3">
          <div id="exterior" className="flex flex-col *:py-8">
            {images && (
              <CarouselMobile images={exteriorImages}></CarouselMobile>
            )}

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

          <div id="interior" className="flex flex-col *:py-8">
            {images && (
              <CarouselMobile images={interiorImages}></CarouselMobile>
            )}

            <Seats
              selectedSeat={selectedSeat}
              seats={detailsData.seats}
            ></Seats>

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
      )}

      <div id="packages">
        <Packages
          selectedIds={selectedPackagesIds}
          packages={detailsData.packages}
        ></Packages>
      </div>

      <div id="options">
        <Options
          selectedIds={selectedOptionsIds}
          optionsTypes={detailsData.optionsTypes}
          options={detailsData.options}
        ></Options>
      </div>

      <div id="summary">
        <Summary
          firstPic={firstPicSummary}
          secondPic={secondPicSummary}
          thirdPic={thirdPicSummary}
          price={price}
          personalizatedPrice={personalizatedPrice}
          subModel={subModel}
        ></Summary>
      </div>

      <AnimatePresence>
        {distance >= 90.5 && (
          <motion.div
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            initial={{ y: 100 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0"
          >
            <BottomNavBar subModel={subModel} price={price}></BottomNavBar>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer modelName={modelName} subModel={subModel}></Footer>
    </div>
  );
};
