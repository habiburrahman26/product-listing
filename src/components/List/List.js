import React, { useEffect, useState } from 'react';

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


  return <div>List</div>;
};

export default List;
