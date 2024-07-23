// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, holiday }) => {
  if (!isOpen || !holiday) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-primary p-4">
          <h3 className="text-lg leading-6 font-medium text-primary-content">
            {holiday.localName}
          </h3>
        </div>
        <div className="p-4">
          <img src={holiday.icon} alt={holiday.localName} className="w-16 h-16 mx-auto"/>
          <p className="mt-4 text-sm text-gray-500">{holiday.description}</p>
          <a href={holiday.reference} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Læs mere</a>
        </div>
        <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-focus focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Luk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;