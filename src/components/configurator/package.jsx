import { useState } from "react";
import { InfoIcon } from "../icons/info-icon";
import { PlusIcon } from "../icons/plus-icon";
import ReactModal from "react-modal";
import { cn } from "@/lib/utils";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    left: "50%",
    top: 0,
    bottom: 0,
    borderRadius: "none",
    border: "none",
    transform: "translateX(-50%)",
    minWidth: 560,
    padding: "none",
  },
};

export const Package = ({ imageUrl, price, characteristics, name }) => {
  const [isSelected, setIsSelected] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ReactModal
        style={customStyles}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      >
        hello
      </ReactModal>
      <div
        className={cn(
          "flex overflow-hidden rounded-2xl pb-10 shadow-lg",
          isSelected && "bg-black text-white",
        )}
      >
        <div data-image className="flex-1 space-y-5">
          <img src={imageUrl} />
          <div className="flex items-center justify-between">
            <div className="pl-5 text-xs">$ {price}</div>
            <button className="flex items-center justify-center gap-1 border border-black px-6 py-4 text-[11px] uppercase">
              Add<PlusIcon className="size-4"></PlusIcon>
            </button>
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
            {characteristics.map((char) => {
              return <li className="">{char}</li>;
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
