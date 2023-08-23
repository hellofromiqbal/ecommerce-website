import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../../components/fragments/productList';
import ProductCard from '../../components/elements/productCard';
import { selectAllProducts } from '../../redux/products/productsSlice';

const MyCartPage = () => {
  const allProducts = useSelector(selectAllProducts);
  return (
    <section className='min-h-screen'>
      <ProductList>
        {allProducts.map((product) => {
          if (product.amountOnCart !== 0) {
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          }
        })}
      </ProductList>
    </section>
  );
};

export default MyCartPage;