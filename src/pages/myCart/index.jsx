import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCart } from '../../redux/cart/cartSlice';
import ProductSection from '../home/ProductSection';
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
            url={`/categories/${product.category}/${product.id}`}
            imgUrl={product.imgUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </ProductList>
    </section>
  )
};

export default MyCartPage;