import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 absolute inset-0" onClick={onClose} />
      <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 w-full max-w-lg mx-auto">
        {children}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
