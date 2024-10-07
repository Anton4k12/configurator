import { fetcher } from "@/data";
import { useConfiguratorStore } from "@/state";
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
import useScrollSpy from "@/hooks/useScrollSpy";

export const ScrollTestPage = () => {
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

  const { data: images, isLoading } = useSWR(`/images${queryParam}`, fetcher);

  console.log({ images, isLoading });

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

  const scrollIds = ["exterior", "interior", "packages", "options", "summary"];

  useScrollSpy(scrollIds, 48);

  return (
    <div>
      <Header color="#FFFFFF"></Header>

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
