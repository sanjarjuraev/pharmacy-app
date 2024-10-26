import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../libs/api';
import ProductCard from './ProductCard';

const ProductList = ({ data, isLoading, error }) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div className='flex'>
      {/* Medicine Cards */}
      <div className='w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {data?.map((medicine) => (
          <ProductCard key={medicine?.product_id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
