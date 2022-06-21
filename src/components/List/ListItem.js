import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store';

const ListItem = ({ id, name, description, price }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (id, name, price) => {
    dispatch(addToCart({ id, name, price, quantity: 1 }));
  };

  return (
    <div className="flex gap-3 p-6 bg-gray-100 rounded-md">
      <div className="min-w-[150px] min-h-[150px] bg-blue-200 flex justify-center items-center">
        150 X 150
      </div>
      <div className="text-left">
        <h3 className="font-semibold text-base mb-4">{name}</h3>
        <p className="text-xs">{description}</p>
      </div>
      <div className="self-end ">
        <button
          className="w-[100px] px-2 py-1 hover:bg-gray-300 bg-gray-200 text-sm mb-2 rounded-md"
          onClick={() => addToCartHandler(id, name, price)}
        >
          Add to list
        </button>
        <button className="w-[100px] px-2 py-1 hover:bg-gray-300  bg-gray-200 text-sm rounded-md">
          Details
        </button>
      </div>
    </div>
  );
};

export default ListItem;
