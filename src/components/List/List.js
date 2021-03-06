import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ListItem from './ListItem';

const List = ({ search }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [inventroys, setInventorys] = useState([]);
  const [lists, setLists] = useState([]);

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

  useEffect(() => {
    if (products.length > 0 || inventroys.length > 0) {
      products?.forEach((p) => {
        const list = inventroys?.find((i) => i.product_id === p.id);
        const product = {
          id: list?.id,
          name: p?.name,
          description: p?.description,
          price: list?.unit_price,
        };

        const existingItem = lists.find((i) => i.id === product.id);
        if (!existingItem) {
          setLists((prevState) => [...prevState, product]);
        }
      });
    }
  }, [products, inventroys, lists]);

  if (isLoading) {
    return <p className="px-4 pt-4">Loading...</p>;
  }

  const productsList = lists.filter((i) =>
    i?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-8 py-5">
      <div className="grid grid-cols-2 col-span-2 gap-5 px-4 max-h-[600px] overflow-y-auto py-4">
        {productsList?.map((list) => (
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
