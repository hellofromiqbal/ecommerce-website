import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const { product } = props;
  return (
    <Link to={`/categories/${product.category}/${product.id}`} className='flex flex-col h-96 md:h-80 lg:h-96 border-2 hover:border-black transition delay-75'>
      <div className={`basis-10/12 overflow-hidden`}>
        <img className='object-cover w-full h-full' src={product.imgUrl} alt={product.name} />
      </div>
      <div className='basis-2/12 flex flex-col p-2 justify-center'>
        <h3 className='font-semibold'>{product.name}</h3>
        <p className='text-black text-opacity-80'>${product.price}</p>
      </div>
    </Link>
  )
};

export default ProductCard;