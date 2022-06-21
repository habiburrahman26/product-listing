import React, { useState } from 'react';
import List from '../List/List';

const Home = () => {
  const [search, setSearch] = useState('');

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="pt-4">
      <div className="px-4">
        <p className="text-xl font-semibold">
          <span>Dashboard</span> {'>'} <span>Supply Room</span>
        </p>
        <div className="flex items-center gap-3 mt-2">
          <input
            type="text"
            className="border px-2 py-1 rounded-md placeholder:text-sm"
            placeholder="Search Item"
            onChange={changeHandler}
          />
          <select name="" id="" className="border px-2 py-1 rounded-md text-sm">
            <option value="">select</option>
            <option value="tag1">tag1</option>
            <option value="tag2">tag2</option>
            <option value="tag3">tag3</option>
            <option value="tag4">tag4</option>
            <option value="tag5">tag5</option>
          </select>
          <select
            name=""
            id=""
            className="border px-2 py-1 rounded-md text-sm "
          >
            <option value="">select</option>
            <option value="filter1">filter1</option>
            <option value="filter2">filter2</option>
            <option value="filter3">filter3</option>
            <option value="filter4">filter4</option>
            <option value="filter5">filter5</option>
          </select>
        </div>
      </div>
      <List search={search}/>
    </div>
  );
};

export default Home;
