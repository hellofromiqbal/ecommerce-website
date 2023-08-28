import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../redux/products/productsSlice';
import { ToastContainer, toast } from 'react-toastify';
import PaymentInformation from './PaymentInformation';

const PaymentPage = () => {
  const { id } = useParams();

  const allProducts = useSelector(selectAllProducts);

  const product = allProducts.find((product) => product.id === id);

  return (
    <>
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
      {product ?
        <PaymentInformation product={product}/>
        :
        <div className='flex flex-col md:w-2/3 lg:w-full min-h-screen gap-4 text-start lg:m-auto'>
          <h1 className='text-2xl md:text-5xl font-semibold'>Product doesn't exist!</h1>
          <p className='text-sm md:text-base text-black text-opacity-80'>We don't have the product you were looking for. Please check again!</p>
        </div>
      }
    </>
  )
};

export default PaymentPage;