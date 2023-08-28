import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../../components/fragments/productList';
import ProductCard from '../../components/elements/productCard';
import { selectAllProducts } from '../../redux/products/productsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProductListSection from './CartProductListSection';
import MainLayout from '../../components/layouts/MainLayout';

const MyCartPage = () => {
  const allProducts = useSelector(selectAllProducts);

  const productsOnCart = allProducts.filter((product) => product.amountOnCart > 0);

  return (
    <MainLayout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {productsOnCart.length > 0 ?
        <CartProductListSection productsOnCart={productsOnCart}/>
        :
        <div className='flex flex-col md:w-2/3 lg:w-full min-h-screen gap-4 text-start lg:m-auto'>
          <h1 className='text-2xl md:text-5xl font-semibold'>No products on cart yet!</h1>
          <p className='text-sm md:text-base text-black text-opacity-80'>You can add to cart a product by clicking "ADD TO CART" button on the product detail page.</p>
        </div>
      }
    </MainLayout>
  );
};

export default MyCartPage;