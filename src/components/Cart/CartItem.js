import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  removeWholeItemFromCart,
} from '../../Store';

const CartItem = ({ sl, id, name, price, unitPrice, quantity }) => {
  const dispatch = useDispatch();

  const increaseQuantityHandler = (id) => {
    dispatch(addToCart({ id, name, quantity: 1, price: unitPrice }));
  };

  const decreaseQuantityHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const removeItem = (id) => {
    dispatch(removeWholeItemFromCart(id));
  };

  return (
    <tr>
      <td>{sl}</td>
      <td className="text-sm" title={name}>
        {name.length > 15 ? name.slice(0, 15) : name}
      </td>
      <td className="flex gap-2 text-sm">
        <button className="" onClick={() => decreaseQuantityHandler(id)}>
          -
        </button>
        <p className="bg-white px-4">{quantity}</p>
        <button className="" onClick={() => increaseQuantityHandler(id)}>
          +
        </button>
      </td>
      <td className="text-sm">{price}</td>
      <td>
        <button onClick={() => removeItem(id)}>x</button>
      </td>
    </tr>
  );
};

export default CartItem;
