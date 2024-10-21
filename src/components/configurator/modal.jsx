import ReactModal from "react-modal";

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

export const Modal = ({ onClose, isOpen, children }) => {
  return (
    <ReactModal
      // onAfterOpen={() => {
      //   document.body.style.top = `-${window.scrollY}px`;
      //   document.body.style.position = "fixed";
      // }}
      // onAfterClose={() => {
      //   const scrollY = document.body.style.top;
      //   document.body.style.position = "";
      //   document.body.style.top = "";
      //   window.scrollTo(0, parseInt(scrollY || "0") * -1);
      // }}
      onRequestClose={onClose}
      isOpen={isOpen}
      style={customStyles}
    >
      {children}
    </ReactModal>
  );
};
