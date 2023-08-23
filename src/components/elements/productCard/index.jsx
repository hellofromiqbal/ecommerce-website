import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AmountCounter from '../../fragments/amountCounter';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/products/productsSlice';

const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className='border-2 hover:border-black transition delay-75'>
      <Link to={`/categories/${product.category}/${product.id}`} className='flex flex-col h-96 md:h-80 lg:h-96'>
        <div className={`basis-10/12 overflow-hidden`}>
          <img className='object-cover w-full h-full' src={product.imgUrl} alt={product.name} />
        </div>
        <div className='basis-2/12 flex flex-col p-2 justify-center'>
          <div className='flex flex-col'>
            <h3 className='font-semibold'>{product.name}</h3>
            <p className='text-black text-opacity-80'>${product.price}</p>
          </div>
        </div>
      </Link>
      {product.amountOnCart > 0 && window.location.pathname === '/my-cart' &&
        <div className='p-2'>
          <AmountCounter
            product={product}
            counter={product.amountOnCart}
          />
        </div>
      }
    </div>
  )
};

export default ProductCard;