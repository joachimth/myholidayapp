import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%', // Adjusts the max-width for better responsiveness
    width: '100%',
    padding: '20px', // Adds padding for better spacing
  },
};

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onRequestClose, contentLabel, children }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel={contentLabel}
  >
    <div className="flex flex-col items-center">
      <button
        onClick={onRequestClose}
        className="btn btn-sm btn-secondary self-end mb-4"
      >
        Luk
      </button>
      {children}
    </div>
  </ReactModal>
);

export default Modal;