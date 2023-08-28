import React from 'react';
import { toast } from 'react-toastify';
import ProductList from '../../components/fragments/productList';
import ProductCard from '../../components/elements/productCard';

const CartProductListSection = (props) => {
  const { productsOnCart } = props;

  const notify = (message) => toast.success(message, {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
    
  return (
    <section className='min-h-screen'>
      <ProductList>
        {productsOnCart.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            callback={notify}
          />
        ))}
      </ProductList>
    </section>
  )
};

export default CartProductListSection;