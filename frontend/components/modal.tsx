import React from "react";

const Modal = ({ title, body, footer = null, topRightClose }) => {
  return (
    <>
      <div
        tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed z-50 w-full h-modal md:h-full"
      >
        <div className="relative mx-auto my-auto p-4 w-full max-w-lg h-full md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow">
            {/* Modal header */}
            <div className="flex justify-between items-center p-5 rounded-t border-b">
              <h3 className="text-xl font-medium text-gray-900">{title}</h3>
              {topRightClose && (
                <button
                  type="button"
                  onClick={() => topRightClose()}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 justify-self-end inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
            {/* Modal body */}
            <div className="p-6">{body}</div>
            {/* Modal footer */}
            <div className="flex justify-between items-center p-6 space-x-2 rounded-b border-t border-gray-200">
              {footer}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40" />
    </>
  );
};

export default Modal;
