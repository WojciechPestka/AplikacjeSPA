"use client";
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
