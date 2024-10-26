import Layout from '../components/layout/Layout';
import SearchBar from '../components/common/SearchBar';
import CatalogList from '../components/common/CatalogList';
import ProductList from '@/components/ProductList';
import { fetchProducts } from '@/libs/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const [selectedCategory, setSelectedCategory] = useState('ALL');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  // Filter products based on the selected category
  const filteredMedicines = data.filter((medicine) => {
    if (selectedCategory === 'ALL') {
      return true;
    }
    if (selectedCategory === 'HUMAN PRESCRIPTION DRUG') {
      return medicine.product_type === 'HUMAN PRESCRIPTION DRUG';
    }
    if (selectedCategory === 'HUMAN OTC DRUG') {
      return medicine.product_type === 'HUMAN OTC DRUG';
    }
    // "OTHERS" category to catch items that don't match existing categories
    return (
      medicine.product_type !== 'HUMAN PRESCRIPTION DRUG' &&
      medicine.product_type !== 'HUMAN OTC DRUG'
    );
  });

  // Pass the category selection handler to CatalogList
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Layout>
      <div className='flex '>
        <CatalogList onCategoryChange={handleCategoryChange} />
        <div className='flex-grow'>
          <SearchBar />
          <ProductList
            data={filteredMedicines}
            isLoading={isLoading}
            error={error}
          />
          {/* Product list or featured medicines can be displayed here */}
        </div>
      </div>
    </Layout>
  );
}
