import { useState } from "react";
import { InfoIcon } from "../icons/info-icon";
import { PlusIcon } from "../icons/plus-icon";
import ReactModal from "react-modal";
import { cn, formatPrice } from "@/lib/utils";
import { MinusIcon } from "../icons/minus-icon";
import { ChevronRight } from "../icons/chevron-right";
import CloseIcon from "../icons/close-icon";
import { Modal } from "./modal";

export const Package = ({
  imageUrl,
  price,
  characteristics,
  name,
  isSelected,
  id,
  onAdd,
  onRemove,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formattedPrice = formatPrice(price);

  return (
    <>
      {isModalOpen && (
        <button
          onClick={handleCloseModal}
          className="fixed left-1/2 top-2 z-50 ml-[300px] -translate-x-1/2 rounded-full bg-white p-1"
        >
          <CloseIcon className="size-4"></CloseIcon>
        </button>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div>
          <div className="relative">
            <img className="h-[350px]" src={imageUrl}></img>

            <div className="absolute right-6 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white">
              <ChevronRight strokeWidth={3} className="size-3"></ChevronRight>
            </div>

            <div className="absolute left-6 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white">
              <ChevronRight
                strokeWidth={3}
                className="size-3 rotate-180"
              ></ChevronRight>
            </div>
          </div>

          <div data-header className="flex justify-between p-6">
            <div data-text className="flex flex-col gap-2">
              <div className="text-xl font-light">{name}</div>

              <div className="text-xs text-[#404040]">{formattedPrice}</div>
            </div>

            {!isSelected ? (
              <button
                onClick={() => onAdd(id)}
                className="flex items-center justify-center gap-1 border border-black px-6 py-4 text-[11px] uppercase"
              >
                Add<PlusIcon className="size-4"></PlusIcon>
              </button>
            ) : (
              <button
                onClick={() => onRemove(id)}
                className="flex items-center justify-center gap-1 border border-black px-6 py-4 text-[11px] uppercase"
              >
                Remove
                <MinusIcon strokeWidth={3} className="size-4"></MinusIcon>
              </button>
            )}
          </div>

          <hr />

          <ul className="list-inside list-disc px-6 py-6 text-sm font-light tracking-wider text-[#333]">
            <div className="py-3">The package contains:</div>

            {characteristics.map((char, i) => {
              return (
                <li key={i} className="py-2 pl-6">
                  {char}
                </li>
              );
            })}
          </ul>
        </div>
      </Modal>
      <div
        className={cn(
          "flex overflow-hidden rounded-2xl pb-10 shadow-[1px_1px_6px_1px_rgb(238,238,238)]",
          isSelected && "bg-black text-white",
        )}
      >
        <div data-image className="flex-1 space-y-5">
          <img
            onClick={handleOpenModal}
            className="h-[205px] cursor-pointer"
            src={imageUrl}
          />
          <div className="flex items-center justify-between">
            <div className="pl-5 text-xs">{formattedPrice}</div>

            {!isSelected ? (
              <button
                onClick={() => onAdd(id)}
                className="flex items-center justify-center gap-1 border border-black px-6 py-4 text-[11px] uppercase"
              >
                Add<PlusIcon className="size-4"></PlusIcon>
              </button>
            ) : (
              <button
                onClick={() => onRemove(id)}
                className="flex items-center justify-center gap-1 border border-white px-6 py-4 text-[11px] uppercase"
              >
                Remove
                <MinusIcon strokeWidth={3} className="size-4"></MinusIcon>
              </button>
            )}
          </div>
        </div>

        <div data-text className="relative flex-1 space-y-5 px-5 pt-5">
          <div className="text-xl">{name}</div>
          <ul
            className={cn(
              "list-disc pl-3.5 text-[#212529]/85",
              isSelected && "text-white",
            )}
          >
            {characteristics.map((char, i) => {
              return <li key={i}>{char}</li>;
            })}
          </ul>
          <button onClick={handleOpenModal} className="absolute right-3 top-0">
            <InfoIcon></InfoIcon>
          </button>
        </div>
      </div>
    </>
  );
};
