import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export const TestPage = () => {
  return (
    <div className="pl-52">
      <Carousel className="max-w-xs">
        <CarouselContent>
          <CarouselItem>
            <img src="/home/GranTurismo/Trofeo/configurator/GranTurismo-config.jpeg" />
          </CarouselItem>
          <CarouselItem>
            <img src="/home/GranTurismo/gfx1.jpeg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious></CarouselPrevious>
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>
  );
};
