import { ChevronRight } from "../icons/chevron-right";

export const carConfigurations = [
  {
    name: "Trofeo",
    imageUrl: "/home/GranTurismo/Trofeo.webp",
    price: "$ 158,000",
    year: "2024",
    engineLayout: "V6",
    displacement: "3.0 L",
    acceleration: "3.7 sec",
    maxSpeed: "188 mph",
    maxPower: "483 HP",
    traction: "AWD",
  },
  {
    name: "Modena",
    imageUrl: "/home/GranTurismo/Modena.webp",
    price: "$ 190,000",
    year: "2024",
    engineLayout: "V6",
    displacement: "3.0 L",
    acceleration: "3.3 sec",
    maxSpeed: "199 mph",
    maxPower: "542 HP",
    traction: "AWD",
  },
  {
    name: "Folgore",
    imageUrl: "/home/GranTurismo/Folgore.webp",
    price: "$ 192,000",
    year: "2025",
    engineLayout: "EV",
    displacement: "-",
    acceleration: "2.6 sec",
    maxSpeed: "202 mph",
    maxPower: "751 HP",
    traction: "AWD",
  },
];

// export const isModena = carConfigurations.filter((car) => {
//   car.name === selectedCar;
// });

export const CarConfiguration = () => {
  const modelList = carConfigurations.map((model) => (
    <div key={model.name}>
      <div aria-label="card" className="flex flex-col gap-5">
        <div aria-label="text" className="flex flex-col gap-1">
          <h2 className="text-[26px]">GranTurismo {model.name}</h2>

          <p className="flex items-center gap-1 text-sm">
            Starting from <p className="text-xl">{model.price}</p>
          </p>

          <p className="pt-2 text-[11px] font-medium">{model.year}</p>
        </div>

        <img className="w-full" src={model.imageUrl} />

        <div aria-label="characteristic" className="flex flex-col gap-4">
          <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
            Engine Layout{" "}
            <div className="text-xl text-black">{model.engineLayout}</div>
          </div>

          <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
            Displacement{" "}
            <div className="text-xl text-black">{model.displacement}</div>
          </div>

          <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
            Acceleration{" "}
            <div className="text-xl text-black">{model.acceleration}</div>
          </div>

          <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
            Max speed <div className="text-xl text-black">{model.maxSpeed}</div>
          </div>

          <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
            Max power <div className="text-xl text-black">{model.maxPower}</div>
          </div>

          <div className="flex items-center justify-between text-sm text-[rgb(102,102,102)]">
            Traction <div className="text-xl text-black">{model.traction}</div>
          </div>
        </div>

        <div>
          <button className="relative flex w-full justify-start bg-[rgb(255,200,69)] py-5 pl-5 text-[11px] font-medium uppercase">
            Configure{" "}
            <ChevronRight
              strokeWidth={3}
              className="absolute right-3.5 top-1/2 size-3 -translate-y-1/2"
            ></ChevronRight>
          </button>
        </div>
      </div>
    </div>
  ));
  return <div className="grid grid-cols-4 gap-12">{modelList}</div>;
};
