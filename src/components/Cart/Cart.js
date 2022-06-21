import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.items);

//   const totalPrice = cart.items.reduce((acc, cur) => {
//     return acc.price + cur.price;
//   }, 0);

//   console.log(totalPrice);

  return (
    <div className="p-6 bg-gray-100 h-[700px] mr-4">
      <p className="text-left text-sm">List of item have been selected</p>
      <table className='table-auto border-spacing-4 border-separate'>
        <thead>
          <th>SL No.</th>
          <th>Item Name</th>
          <th>Qty</th>
          <th>Price</th>
        </thead>
        <tbody>
          {cart.items.map((item,i) => (
            <CartItem
              key={item.id}
              sl={i+1}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.totalPrice}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
