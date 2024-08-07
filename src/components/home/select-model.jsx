import { CarModel } from "./car-model";

export const SelectModel = ({ onCarSelect }) => {
  return (
    <div aria-label="cars selector" className="w-full">
      <div className="grid grid-cols-3 gap-12">
        <CarModel
          name="GranTurismo"
          imageUrl="/home/cars/GranTurismo.webp"
          onCarSelect={onCarSelect}
        ></CarModel>
        <CarModel
          name="GranCabrio"
          imageUrl="/home/cars/GranCabrio.webp"
          onCarSelect={onCarSelect}
        ></CarModel>
      </div>
    </div>
  );
};
