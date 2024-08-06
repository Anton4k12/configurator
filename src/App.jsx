import { Car } from "./components/home/car";
import { ChevronRight } from "./components/icons/chevron-right";
import { Header } from "./components/shared/header";

export function App() {
  return (
    <>
      <Header></Header>
      <div className="max-w-screen-xl border mx-auto min-h-screen">
        <div
          aria-label="main text"
          className="flex flex-col gap-10 w-1/2 pt-44 pl-20 pb-[72px]"
        >
          <h1 className="text-6xl font-extralight">Build your own</h1>
          <div className="flex flex-col items-start gap-7">
            <p className="text-xl font-light">
              Every Maserati is like a work of art constructed with the care and
              attention that only the human hand can provide
            </p>
            <button className="relative uppercase border border-black px-5 py-4 pr-28 text-[11px] font-medium">
              Open existing configurator{" "}
              <ChevronRight className="absolute size-4 top-1/2 -translate-y-1/2 right-3.5"></ChevronRight>
            </button>
          </div>
        </div>

        <hr className="border-zinc-600" />

        <div aria-label="cars selector" className="grid w-full">
          <div className="flex">
            <Car
              name="GranTurismo"
              imageUrl="/home/cars/GranTurismo.webp"
            ></Car>
            <Car name="GranCabrio" imageUrl="/home/cars/GranCabrio.webp"></Car>
          </div>
        </div>
      </div>
    </>
  );
}
