import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

export const CarouselMobile = ({ images }) => {
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

  return (
    <Carousel
      setApi={setApi}
      className="top-0 z-30 h-fit px-4 pb-16 pt-[41px]"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((src, i) => {
          return (
            <CarouselItem key={i}>
              <img className="overflow-hidden rounded-2xl" src={src} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious></CarouselPrevious>
      <CarouselNext></CarouselNext>

      <div className="absolute left-1/2 top-56 flex -translate-x-1/2 gap-1">
        {images.map((_, i) => (
          <div
            className={cn(
              "size-2 rounded-full bg-gray-300",
              i === current && "bg-black",
            )}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};
