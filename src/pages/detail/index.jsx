import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { decrementStock, selectAllProducts } from '../../redux/products/productsSlice';
import { addToCart } from '../../redux/cart/cartSlice';
import AmountCounter from '../../components/fragments/amountCounter';

const DetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const allProducts = useSelector(selectAllProducts);

  const product = allProducts.find((product) => product.id === id);

  const [counter, setCounter] = useState(1);

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  };

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <section className='flex flex-col gap-4'>
      <h1 className='text-xl md:text-3xl font-semibold text-center'>{product.name}</h1>
      <div className='md:h-[35rem] flex flex-col md:flex-row gap-4'>
        <div className='basis-1/2 flex flex-col justify-center items-center'>
          <div className='basis-1/2 flex'>
            <img src={product.imgUrl} alt={product.name} className='md:max-w-[300px]'/>
          </div>
        </div>
        <div className='basis-1/2 bg-gray-200 flex flex-col justify-center p-4 md:p-10 gap-10'>
          <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi dolores iusto expedita, pariatur quibusdam molestiae inventore ad voluptatem veritatis?</p>
          <div className='flex flex-col md:flex-row gap-4 justify-between items-center scale-110 md:scale-100'>
            <h2 className='text-lg md:text-2xl font-semibold text-center'>Quantity</h2>
            <AmountCounter
              product={product}
              counter={counter}
              decrementCounter={decrementCounter}
              incrementCounter={incrementCounter}
            />
            <h2 className='text-lg md:text-2xl font-semibold text-center'>${product.price * counter}</h2>
          </div>
          <h2 className='text-lg font-semibold'>Stock: {product.stock}</h2>
          <div className='flex flex-col md:flex-row gap-4'>
            <button
              className='basis-1/2 p-3 border-2 border-black hover:border-transparent bg-transparent hover:bg-black hover:text-white text-lg font-medium transition delay-75'
              onClick={() => dispatch(addToCart(product, counter))}
              >ADD TO CHART</button>
            <button
              className='basis-1/2 p-3 border-2 border-transparent hover:border-red-700 bg-red-700 hover:bg-transparent text-white hover:text-red-700 text-lg font-medium transition delay-75'
              onClick={() => dispatch(decrementStock(product.id, counter))}
            >BUY NOW</button>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-3 gap-4'>
        <div className='flex flex-col gap-2 bg-gray-200 p-4'>
          <h2 className='text-lg md:text-xl font-semibold'>Texture:</h2>
          <p>{product.texture}</p>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200 p-4'>
          <h2 className='text-lg md:text-xl font-semibold'>Weight:</h2>
          <p>{product.weight}</p>
        </div>
        <div className='flex flex-col gap-2 bg-gray-200 p-4'>
          <h2 className='text-lg md:text-xl font-semibold'>Size:</h2>
          <p>{product.size}</p>
        </div>
      </div>
    </section>
  )
};

export default DetailPage;