import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { removeAllItemFromCart } from '../../Store';

const Backdrop = ({ setShowModal }) => {
  return (
    <div
      className="w-screen h-screen absolute bg-gray-600 opacity-60 z-10"
      onClick={() => setShowModal(false)}
    ></div>
  );
};

const Overlay = ({ showModal, setShowModal, totalPrice }) => {
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(removeAllItemFromCart());
    setConfirm(true);
  };

  return (
    <div className="z-50 w-[500px] max-h-[500px] overflow-y-auto py-10 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
      <p className="text-center pt-6 font-semibold text-lg">
        {showModal.length === 0 && (
          <div className="flex justify-center flex-col gap-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 stroke-red-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Add item first</span>
          </div>
        )}
      </p>

      <div>
        {showModal.length > 0 && !confirm && (
          <>
            <h3 className="font-bold text-xl mb-4 text-center">Are You sure</h3>
            <p className="text-center text-gray-500 mb-4">
              Items below will be confirmd
            </p>
            <table className="table-auto border-spacing-2 border-separate">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Qty</th>
                </tr>
                <tbody>
                  {showModal.map((item) => (
                    <tr key={item.id} className="text-center">
                      <td className="px-8 text-left">
                        {item.name.slice(0, 10)}
                      </td>
                      <td className="px-8 text-left">{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </thead>
            </table>
            <hr />
            <p className="text-center">Total : {totalPrice}</p>
            <div className="text-center mt-10">
              <button
                className="px-4 py-2 border rounded-md mr-4"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 border rounded-md bg-gray-600 text-white"
                onClick={submitHandler}
              >
                Confirm
              </button>
            </div>
          </>
        )}
      </div>
      {confirm && (
        <div className="flex justify-center flex-col gap-5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 stroke-green-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span>Supply request confirmed</span>
        </div>
      )}
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
          totalPrice={props.totalPrice}
        />,
        document.getElementById('overlay')
      )}
    </>
  );
};

export default Modal;
