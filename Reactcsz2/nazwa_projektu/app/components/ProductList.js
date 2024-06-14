"use client";
import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>List of products</h1>
      <label>
        Filter by product title:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
      <ul>
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
