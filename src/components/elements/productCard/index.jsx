import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AmountCounter from '../../fragments/amountCounter';
import { useDispatch } from 'react-redux';
import { decrementAmountOnCart, incrementAmountOnCart } from '../../../redux/products/productsSlice';

const ProductCard = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  const [counter, setCounter] = useState(product.amountOnCart);

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
    dispatch(decrementAmountOnCart(product.id, counter));
  };

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
    dispatch(incrementAmountOnCart(product.id, counter));
  };

  return (
    <div className='border-2 hover:border-black transition delay-75 relative'>
      {window.location.pathname === '/my-cart' &&
        <button className='rounded-full text-2xl font-medium absolute top-0 right-2'>X</button>
      }
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
        <>
          <div className='p-2 flex justify-between items-center'>
          <p className='text-black text-opacity-80'>Quantity on cart</p>
            <AmountCounter
              product={product}
              counter={counter}
              incrementCounter={incrementCounter}
              decrementCounter={decrementCounter}
            />
          </div>
          <div className='p-2 flex justify-between items-center'>
            <p className='text-black text-opacity-80'>Total price</p>
            <h2 className='text-lg md:text-2xl font-semibold text-center'>${product.amountOnCart * product.price}</h2>
          </div>
          <div className='p-2 flex flex-col gap-2'>
            <button className='bg-red-700 text-white w-full p-2 text-md md:text-base font-medium'>Buy Now</button>
          </div>
        </>
      }
    </div>
  )
};

export default ProductCard;