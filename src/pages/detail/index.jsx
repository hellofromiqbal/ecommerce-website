import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart, decrementStock, selectAllProducts } from '../../redux/products/productsSlice';
import AmountCounter from '../../components/fragments/amountCounter';
import Button from '../../components/elements/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

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

  const allProducts = useSelector(selectAllProducts);

  const product = allProducts.find((product) => product.id === id);

  const [counter, setCounter] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart(product.id, counter));
    notify(`${product.name} has been added to cart!`);
  };

  const handleDecrementStock = () => {
    dispatch(decrementStock(product.id, counter));
  };

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  };

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <section className='flex flex-col gap-4 md:relative'>
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
      <h1 className='text-xl md:text-3xl font-bold text-center md:absolute left-0 right-0 m-auto'>{product.name}</h1>
      <div className='md:h-[35rem] flex flex-col md:flex-row gap-4'>
        <div className='basis-1/2 flex flex-col justify-center items-center'>
          <div className='basis-1/2 flex'>
            <img src={product.imgUrl} alt={product.name} className='md:max-w-[300px]'/>
          </div>
        </div>
        <div className='basis-1/2 bg-gray-200 flex flex-col justify-center p-4 md:p-10 gap-10'>
          <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi dolores iusto expedita, pariatur quibusdam molestiae inventore ad voluptatem veritatis?</p>
          <p className='text-lg font-semibold'>Stock: {product.stock}</p>
          <div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
            <h2 className='text-lg md:text-2xl font-semibold text-center'>Quantity</h2>
            <AmountCounter
              product={product}
              counter={counter}
              decrementCounter={decrementCounter}
              incrementCounter={incrementCounter}
            />
            <h2 className='text-lg md:text-2xl font-semibold text-center'>${product.price * counter}</h2>
          </div>
          <div className='grid grid-cols-2 md:flex-row gap-4'>
            <Button
              dimensionStyle="p-3 w-full"
              text="ADD TO CART"
              onClick={handleAddToCart}
            />
            <Button
              borderStyle="border-2 border-transparent hover:border-red-700"
              bgColorStyle="bg-red-700 hover:bg-transparent"
              colorStyle="text-white hover:text-red-700"
                dimensionStyle="p-3 w-full"
              text="MAKE ORDER"
              onClick={() => navigate(`/payment/${product.id}`)}
            />
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