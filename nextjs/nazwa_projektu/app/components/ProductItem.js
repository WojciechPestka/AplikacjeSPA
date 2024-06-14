"use client";
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <li>
      <Link to={`/product/${product.id}`}>{product.title} ({product.brand})</Link>
    </li>
  );
};

export default ProductItem;
