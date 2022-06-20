import React from 'react';

const ListItem = ({ id, name, description, price }) => {
  return (
    <div className='flex p-6 bg-gray-100 rounded-md'>
      <div className="min-w-[150px] min-h-[150px] bg-blue-200 flex justify-center items-center">
        150 X 150
      </div>
      <div className='text-left ml-3'>
        <h3 className='font-semibold text-base'>{name}</h3>
        <p className='text-xs'>{description}</p>
      </div>
    </div>
  );
};

export default ListItem;
