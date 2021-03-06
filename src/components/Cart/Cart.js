import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [showModal, setShowModal] = useState(null);

  const showModalHandler = () => {
    setShowModal(cart.items || true);
  };

  const totalPrice = cart.items.reduce((acc, cur) => {
    return acc + cur.totalPrice;
  }, 0);

  return (
    <div className="p-6 px-3 bg-gray-100 h-[600px] mr-4 overflow-y-auto relative">
      <p className="text-left text-sm">List of item have been selected</p>
      <table className="table-auto border-spacing-6 border-separate">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Item Name</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item, i) => (
            <CartItem
              key={item.id}
              sl={i + 1}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.totalPrice}
              unitPrice={item.price}
            />
          ))}
        </tbody>
      </table>
      <div>
        <hr />
        <p className="text-right mt-4">Total: {totalPrice}</p>
      </div>
      <div className="absolute bottom-5 left-1/2 mt-6">
        <button
          className="px-4 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
          onClick={showModalHandler}
        >
          Confirm
        </button>
      </div>

      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} totalPrice={totalPrice}/>}
    </div>
  );
};

export default Cart;
