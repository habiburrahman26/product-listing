import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = ({ setShowModal }) => {
  return (
    <div
      className="w-screen h-screen absolute bg-gray-600 opacity-60 z-10"
      onClick={() => setShowModal(false)}
    ></div>
  );
};

const Overlay = ({ showModal, setShowModal }) => {
  return (
    <div className="z-50 w-[400px] h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
      <p>{showModal.length ===0 && <span>Add item first</span>}</p>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setShowModal={props.setShowModal} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <Overlay
          setShowModal={props.setShowModal}
          showModal={props.showModal}
        />,
        document.getElementById('overlay')
      )}
    </>
  );
};

export default Modal;
