import { useConfiguratorContext } from "@/hooks/useConfiguratorContext";
import { formatPrice } from "@/lib/utils";
import ArrowCircleIcon from "../icons/arrow-circle-icon";
import ArrowUturnIcon from "../icons/arrow-uturn-icon";
import { ChevronRight } from "../icons/chevron-right";
import DownloadIcon from "../icons/download-icon";
import SaveIcon from "../icons/save-icon";

export const Summary = ({ price, personalizatedPrice, subModel }) => {
  const selectedColor = useConfiguratorContext((state) => state.selectedColor);
  const selectedSeat = useConfiguratorContext((state) => state.selectedSeat);
  const selectedWheel = useConfiguratorContext((state) => state.selectedWheel);
  const selectedBrake = useConfiguratorContext((state) => state.selectedBrake);
  const selectedTrim = useConfiguratorContext((state) => state.selectedTrim);

  const formattedPrice = formatPrice(price);
  const formattedPersonalizatedPrice = formatPrice(personalizatedPrice);
  const formattedStartingPrice = formatPrice(subModel.startingPrice);

  const formatterColorPrice = formatPrice(selectedColor.price);
  const formatterWheelPrice = formatPrice(selectedWheel.price);
  const formatterBrakePrice = formatPrice(selectedBrake.price);
  const formatterTrimPrice = formatPrice(selectedTrim.price);

  return (
    <div>
      <div className="flex flex-col items-center rounded-2xl bg-[#eee] pt-10 font-extralight">
        <div className="text-6xl tracking-wide">
          Your {subModel.modelName} {subModel.name}
        </div>
        <div className="flex gap-3 pl-3 pt-[60px]">
          <div
            data-summary
            className="flex w-2/3 flex-col gap-[60px] rounded-t-2xl bg-white px-[93px] pt-[60px]"
          >
            <img className="rounded-2xl" src="/home/GranTurismo/gfx1.jpeg" />

            <div>
              <div className="pb-6 text-2xl font-normal">
                Configuration recap
              </div>

              <hr className="border-zinc-400" />

              <div className="flex justify-between pt-10 *:flex-1">
                <Detail
                  imageUrl={selectedColor.imageUrl}
                  name={selectedColor.name}
                  category="Exterior Color"
                ></Detail>

                <Detail
                  imageUrl={selectedSeat.imageUrl}
                  name={selectedSeat.name}
                  category="Seats"
                ></Detail>
              </div>
            </div>

            <div>
              <div className="py-9 text-[11px] font-medium uppercase tracking-[1px]">
                exterior
              </div>

              <img
                className="mb-[30px] rounded-2xl"
                src="/home/GranTurismo/gfx2.jpeg"
              />

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <Detail
                    imageUrl={selectedColor.imageUrl}
                    name={selectedColor.name}
                    category="Exterior Color"
                  ></Detail>

                  {selectedColor.price === null ? (
                    <div className="text-[#212529]">$ 0</div>
                  ) : (
                    <div className="text-[#212529]">{formatterColorPrice}</div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <Detail
                    imageUrl={selectedWheel.imageUrl}
                    name={selectedWheel.name}
                    category="Wheels"
                  ></Detail>

                  {selectedWheel.price === null ? (
                    <div className="text-[#212529]">$ 0</div>
                  ) : (
                    <div className="text-[#212529]">{formatterWheelPrice}</div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <Detail
                    imageUrl={selectedBrake.imageUrl}
                    name={selectedBrake.name}
                    category="Brake Calipers"
                  ></Detail>

                  {selectedBrake.price === null ? (
                    <div className="text-[#212529]">$ 0</div>
                  ) : (
                    <div className="text-[#212529]">{formatterBrakePrice}</div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <hr className="border-zinc-400" />

              <div className="py-9 text-[11px] font-medium uppercase tracking-[1px]">
                interior
              </div>

              <img
                className="mb-[30px] rounded-2xl"
                src="/home/GranTurismo/gfx7.jpeg"
              />

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <Detail
                    imageUrl={selectedSeat.imageUrl}
                    name={selectedSeat.name}
                    category="Seats"
                  ></Detail>

                  <div className="text-[#212529]">$ 0</div>
                </div>

                <div className="flex items-center justify-between">
                  <Detail
                    imageUrl={selectedTrim.imageUrl}
                    name={selectedTrim.name}
                    category="Trim"
                  ></Detail>

                  {selectedTrim.price === null ? (
                    <div className="text-[#212529]">$ 0</div>
                  ) : (
                    <div className="text-[#212529]">{formatterTrimPrice}</div>
                  )}
                </div>
              </div>
            </div>

            <hr className="border-zinc-400 text-[11px] uppercase tracking-[1px]" />

            <div className="pb-[60px]">
              <div className="pb-6 text-[26px] font-light">Specifications</div>

              <hr className="border-zinc-400" />
              <div className="pb-6 pt-[30px] font-light">
                <div className="text-sm tracking-[1px] text-[#666]">
                  Engine layout
                </div>

                <div className="text-xl">
                  {subModel.engineLayout} {subModel.maxPower}
                </div>
              </div>

              <hr className="border-zinc-400" />

              <div className="py-[35px] text-[11px] font-medium uppercase tracking-[1px]">
                Technical specifications
              </div>

              <hr className="border-zinc-400" />
            </div>

            <div>
              <div className="pb-6 text-[26px] font-light">Prices recap</div>

              <hr className="border-black" />

              <div className="pb-20 pt-8">
                <div className="text-sm font-medium">
                  Base price {formattedStartingPrice}
                </div>

                {personalizatedPrice !== 0 && (
                  <div className="text-sm font-medium">
                    Personalization {formattedPersonalizatedPrice}
                  </div>
                )}

                <div className="text-sm font-medium">
                  As configured {formattedPrice}
                </div>
              </div>

              <hr className="border-zinc-400" />

              <div className="pt-6">
                <div className="text-xs font-medium tracking-[1px] text-[#212529]">
                  *MSRP listed may not include preparation, delivery and
                  destination charges: USD 1,495 for all Ghibli and Levante
                  models; USD 1,995 for all Quattroporte, GranTurismo, and
                  GranTurismo Convertible models
                </div>

                <br />

                <br />

                <div className="text-xs font-medium tracking-[1px] text-[#212529]">
                  Maserati cars may be factory equipped with low-profile, high
                  performance summer tires which are more susceptible to road
                  hazards and consequential damages and may wear at an
                  accelerated rate. Driving over rough or damaged road surfaces,
                  as well as debris, curbs and other obstacles can cause serious
                  damage to wheels, tires and suspension parts. Be careful to
                  avoid road hazards and reduce your speed accordingly. Summer
                  tires are not recommended for driving in cold-weather
                  conditions; Maserati recommends winter tires for these
                  conditions. See your Maserati Dealer for available tire
                  options.
                </div>
              </div>
            </div>
          </div>

          <div
            data-sticky-summary
            className="sticky top-9 h-fit w-1/3 rounded-t-2xl bg-white px-[43px] py-8"
          >
            <div className="pb-8">
              <div className="flex items-center justify-between pb-[6px] text-left leading-none">
                <div className="text-[40px] font-light">
                  {subModel.modelName} {subModel.name}
                </div>
                <div className="pr-2">
                  <SaveIcon></SaveIcon>
                </div>
              </div>

              <div className="text-sm tracking-[1px] text-[#666]">
                Total price
              </div>

              <div className="text-xl">{formattedPrice}</div>
            </div>

            <div data-buttons className="flex flex-col gap-3 pb-9">
              <div>
                <button className="relative w-full border border-[#ffc845] bg-[#ffc845] py-4 pl-6 text-left text-[11px] font-medium uppercase tracking-[1px]">
                  Test drive{" "}
                  <ChevronRight
                    strokeWidth={3}
                    className="absolute right-7 top-1/2 size-3 -translate-y-1/2"
                  ></ChevronRight>
                </button>
              </div>
              <div>
                <button className="relative w-full border border-black py-4 pl-6 text-left text-[11px] font-medium uppercase tracking-[1px]">
                  More info{" "}
                  <ChevronRight
                    strokeWidth={3}
                    className="absolute right-7 top-1/2 size-3 -translate-y-1/2"
                  ></ChevronRight>
                </button>
              </div>
              <div>
                <button className="relative w-full border border-black py-4 pl-6 text-left text-[11px] font-medium uppercase tracking-[1px]">
                  Request a quote{" "}
                  <ChevronRight
                    strokeWidth={3}
                    className="absolute right-7 top-1/2 size-3 -translate-y-1/2"
                  ></ChevronRight>
                </button>
              </div>
            </div>

            <div className="flex flex-col pb-6">
              <button className="relative border-b border-black py-5 pl-11 text-left text-[11px] font-medium uppercase tracking-[1px]">
                <SaveIcon className="absolute left-2 top-1/2 -translate-y-1/2"></SaveIcon>{" "}
                Save{" "}
                <ChevronRight
                  strokeWidth={3}
                  className="absolute right-7 top-1/2 size-3 -translate-y-1/2"
                ></ChevronRight>
              </button>
              <button className="relative border-b border-black py-5 pl-11 text-left text-[11px] font-medium uppercase tracking-[1px]">
                <ArrowUturnIcon className="absolute left-2 top-1/2 -translate-y-1/2 rotate-180"></ArrowUturnIcon>{" "}
                Restart configurator{" "}
                <ChevronRight
                  strokeWidth={3}
                  className="absolute right-7 top-1/2 size-3 -translate-y-1/2"
                ></ChevronRight>
              </button>
              <button className="relative border-b border-black py-5 pl-11 text-left text-[11px] font-medium uppercase tracking-[1px]">
                <ArrowCircleIcon className="absolute left-2 top-1/2 -translate-y-1/2"></ArrowCircleIcon>{" "}
                Change model{" "}
                <ChevronRight
                  strokeWidth={3}
                  className="absolute right-7 top-1/2 size-3 -translate-y-1/2"
                ></ChevronRight>
              </button>
              <button className="relative border-b border-black py-5 pl-11 text-left text-[11px] font-medium uppercase tracking-[1px]">
                <DownloadIcon className="absolute left-2 top-1/2 -translate-y-1/2"></DownloadIcon>{" "}
                pdf{" "}
                <ChevronRight
                  strokeWidth={3}
                  className="absolute right-7 top-1/2 size-3 -translate-y-1/2"
                ></ChevronRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ imageUrl, name, category }) => {
  return (
    <div className="flex items-center gap-4">
      <img className="rounded-full" src={imageUrl}></img>

      <div className="flex flex-col">
        <div className="text-sm font-light tracking-[1px] text-[#666]">
          {category}
        </div>

        <div className="text-sm font-normal tracking-[1px]">{name}</div>
      </div>
    </div>
  );
};
