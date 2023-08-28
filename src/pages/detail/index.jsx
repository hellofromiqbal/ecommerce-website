import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllProducts } from '../../redux/products/productsSlice';
import ProductDetailSection from './productDetailSection';

const DetailPage = () => {
  const { id } = useParams();

  const allProducts = useSelector(selectAllProducts);

  const product = allProducts.find((product) => product.id === id);

  return (
    <>
    {product ?
      <ProductDetailSection product={product}/>
      :
      <div className='flex flex-col md:w-2/3 lg:w-full min-h-screen gap-4 text-start lg:m-auto'>
        <h1 className='text-2xl md:text-5xl font-semibold'>Product doesn't exist!</h1>
        <p className='text-sm md:text-base text-black text-opacity-80'>We don't have the product you were looking for. Please check again!</p>
      </div>
    }
    </>
  )
};

export default DetailPage;