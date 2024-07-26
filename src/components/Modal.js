import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onRequestClose, children }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Holiday Details"
    className="modal"
    overlayClassName="modal-overlay"
  >
    {children}
  </ReactModal>
);

export default Modal;