import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCart } from '../../redux/cart/cartSlice';
import ProductList from '../../components/fragments/productList';
import ProductCard from '../../components/elements/productCard';

const MyCartPage = () => {
  const myCart = useSelector(selectAllCart);
  return (
    <section className='min-h-screen'>
      <ProductList>
        {myCart.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ProductList>
    </section>
  )
};

export default MyCartPage;