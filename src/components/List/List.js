import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

const List = () => {
  const [products, setProducts] = useState([]);
  const [inventroys, setInventorys] = useState([]);
  const lists = [];

  useEffect(() => {
    fetch('https://fec-inventory-api.herokuapp.com/product-info')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://fec-inventory-api.herokuapp.com/inventory-info')
      .then((res) => res.json())
      .then((data) => {
        setInventorys(data);
      });
  }, []);

  products.forEach((p) => {
    const list = inventroys.find((i) => i.product_id === p.id);
    const products = {
      id: list.id,
      name: p.name,
      description: p.description,
      price: list.unit_price,
    };

    lists.push(products);
  });

  return (
    <div className="grid grid-cols-3 gap-8 py-5">
      <div className='grid grid-cols-2 col-span-2 gap-5 px-4 max-h-[700px] overflow-y-auto py-4'>
        {lists.map((list) => (
          <ListItem
            key={list.id}
            id={list.id}
            name={list.name}
            description={list.description}
            price={list.unit_price}
          />
        ))}
      </div>
      <div>List</div>
    </div>
  );
};

export default List;
