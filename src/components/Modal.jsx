import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        onClose();
      }, 4000); // Close modal after 4 seconds
    }
    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-green-700 p-8 rounded-lg z-50 border-1 border-white">
            <div className="text-white text-xl mb-4 text-center">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
