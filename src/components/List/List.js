import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ListItem from './ListItem';

const List = () => {
  const [products, setProducts] = useState([]);
  const [inventroys, setInventorys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [lists, setLists] = useState([]);
  const lists = [];

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fec-inventory-api.herokuapp.com/product-info')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fec-inventory-api.herokuapp.com/inventory-info')
      .then((res) => res.json())
      .then((data) => {
        setInventorys(data);
        setIsLoading(false);
      });
  }, []);

  products?.forEach((p) => {
    const list = inventroys?.find((i) => i.product_id === p.id);
    const products = {
      id: list.id,
      name: p.name,
      description: p.description,
      price: list.unit_price,
    };

    lists.push(products);
  });


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-8 py-5">
      <div className="grid grid-cols-2 col-span-2 gap-5 px-4 max-h-[700px] overflow-y-auto py-4">
        {lists.map((list) => (
          <ListItem
            key={list.id}
            id={list.id}
            name={list.name}
            description={list.description}
            price={list.price}
          />
        ))}
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default List;
