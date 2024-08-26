import { useState } from "react";
import { InfoIcon } from "../icons/info-icon";
import { PlusIcon } from "../icons/plus-icon";
import { MinusIcon } from "../icons/minus-icon";
import { cn } from "@/lib/utils";
import ReactModal from "react-modal";
import { ChevronRight } from "../icons/chevron-right";
import CloseIcon from "../icons/close-icon";
import { Modal } from "./modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 40,
  },
  content: {
    left: "50%",
    top: 0,
    bottom: 0,
    borderRadius: "none",
    border: "none",
    transform: "translateX(-50%)",
    width: 560,
    padding: "none",
  },
};

export const Option = ({ option }) => {
  const [isSelected, setIsSelected] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
            <img className="h-[350px]" src={option.imageUrl}></img>
          </div>

          <div data-header className="flex items-center justify-between p-6">
            <div data-text className="flex flex-col gap-2">
              <div className="text-xl font-light">{option.name}</div>

              <div className="text-xs text-[#404040]">$ {option.price}</div>
            </div>

            {!isSelected ? (
              <button
                onClick={handleSelect}
                className="flex items-center justify-center gap-1 border border-black px-6 py-4 text-[11px] uppercase"
              >
                Add<PlusIcon className="size-4"></PlusIcon>
              </button>
            ) : (
              <button
                onClick={handleSelect}
                className="flex items-center justify-center gap-1 border border-black px-6 py-4 text-[11px] uppercase"
              >
                Remove
                <MinusIcon strokeWidth={3} className="size-4"></MinusIcon>
              </button>
            )}
          </div>

          <hr />

          <div className="px-6 py-[22px]">
            <div className="py-3 text-sm leading-6 tracking-wider text-[#333]">
              {option.description}
            </div>
          </div>
        </div>
      </Modal>
      <div
        className={cn(
          "flex flex-col justify-between overflow-hidden rounded-2xl shadow-[1px_1px_6px_1px_rgb(238,238,238)]",
          isSelected && "bg-black text-white",
        )}
      >
        <img
          onClick={handleOpenModal}
          className="cursor-pointer"
          src={option.imageUrl}
        ></img>
        <div className="flex w-full flex-1 flex-col justify-between">
          <div className="flex items-baseline justify-between py-5">
            <div className="pl-5 pr-3 text-xl font-light">{option.name}</div>
            <button onClick={handleOpenModal} className="pr-3">
              <InfoIcon></InfoIcon>
            </button>
          </div>
          <div className="flex items-center justify-between px-5 py-5">
            <div className="text-xs">$ {option.price}</div>
            {!isSelected ? (
              <button
                onClick={handleSelect}
                className="flex items-center justify-center gap-1 border border-black px-6 py-4 text-[11px] uppercase"
              >
                Add<PlusIcon className="size-4"></PlusIcon>
              </button>
            ) : (
              <button
                onClick={handleSelect}
                className="flex items-center justify-center gap-1 border border-white px-6 py-4 text-[11px] uppercase"
              >
                Remove
                <MinusIcon strokeWidth={3} className="size-4"></MinusIcon>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
