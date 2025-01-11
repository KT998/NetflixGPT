import React from "react";

const Modal = ({ closeModalHandler, children }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-75"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={closeModalHandler}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="relative inline-block align-bottom text-white text-xl border border-gray-600 rounded-lg px-2 pt-5 pb-2 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-800"
            onClick={closeModalHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
