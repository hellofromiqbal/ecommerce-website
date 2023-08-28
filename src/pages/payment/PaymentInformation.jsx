import React, { useState } from 'react';
import { decrementStock, removeProductFromCart } from '../../redux/products/productsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/elements/button';

const PaymentInformation = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [deliveryMethod, setDeliveryMethod] = useState('');

  const deliveryFee = () => {
    if (deliveryMethod === 'Regular') return 10;
    if (deliveryMethod === 'Cargo') return 15;
    if (deliveryMethod === 'Next Day') return 20;
    return 0;
  };

  const [paymentMethod,  setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    notify(`You just bought ${product.amountOnCart} ${product.name}! We'll deliver your item(s) today.`);
    dispatch(removeProductFromCart(product.id));
    dispatch(decrementStock(product.id, product.amountOnCart));
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const notify = (message) => toast.success(message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <section className='flex flex-col gap-4'>
      <h1 className='text-xl md:text-3xl font-bold'>Payment Page</h1>
      <form action="" className='grid lg:grid-cols-2 gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <h2 className='font-medium text-md md:text-lg'>Payment Form</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="name" className="text-sm md:text-base">Name:</label>
              <input id='name' type="text" className='border-2 border-gray-200 focus:border-black px-2 py-1' required/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className="text-sm md:text-base">Email:</label>
              <input id='email' type="email" className='border-2 border-gray-200 focus:border-black px-2 py-1' required/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="phone" className="text-sm md:text-base">Phone:</label>
              <input id='phone' type="text" className='border-2 border-gray-200 focus:border-black px-2 py-1' required/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="address" className="text-sm md:text-base">Address:</label>
              <textarea name="address" id="address" className='border-2 border-gray-200 focus:border-black px-2 py-1 resize-none' required></textarea>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="deliveryMethod" className="text-sm md:text-base">Delivery Method</label>
              <select name="deliveryMethod" id="deliveryMethod" className='border-2 border-gray-200 focus:border-black px-2 py-1' onChange={(e) => setDeliveryMethod(e.target.value)} required>
                <option value="" className='text-sm md:text-base'>-- Select delivery method --</option>
                <option value="Regular" className='text-sm md:text-base'>Regular</option>
                <option value="Cargo" className='text-sm md:text-base'>Cargo</option>
                <option value="Next Day" className='text-sm md:text-base'>Next Day</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="paymentMethod" className="text-sm md:text-base">Payment Method</label>
              <select name="paymentMethod" id="paymentMethod" className='border-2 border-gray-200 focus:border-black px-2 py-1' onChange={(e) => setPaymentMethod(e.target.value)} required>
                <option value="" className='text-sm md:text-base'>-- Select payment method --</option>
                <option value="Bank Transfer" className='text-sm md:text-base'>Bank Transfer</option>
                <option value="Cash On Delivery" className='text-sm md:text-base'>Cash On Delivery</option>
              </select>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 bg-gray-200 p-4'>
          <div className='flex flex-col'>
            <p className='font-medium text-md md:text-lg'>Payment Details</p>
            <div className='flex justify-between'>
              <p className='text-sm md:text-base text-black text-opacity-80'>Name</p>
              <p className='text-sm md:text-base'>{product.name}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm md:text-base text-black text-opacity-80'>Texture</p>
              <p className='text-sm md:text-base'>{product.texture}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm md:text-base text-black text-opacity-80'>Weight</p>
              <p className='text-sm md:text-base'>{product.weight}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm md:text-base text-black text-opacity-80'>Size</p>
              <p className='text-sm md:text-base'>{product.size}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm md:text-base text-black text-opacity-80'>Price/unit</p>
              <p className='text-sm md:text-base'>${product.price}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm md:text-base text-black text-opacity-80'>Amount on cart</p>
              <p className='text-sm md:text-base'>{product.amountOnCart}</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='font-medium text-md md:text-lg'>Product Total Price</p>
            <p className='text-sm md:text-base text-black text-opacity-80'>Amount on cart x Price/unit</p>
            <div className='flex justify-between'>
              <p className='text-sm md:text-base text-black text-opacity-80'>{product.amountOnCart} x ${product.price}</p>
              <p className='text-sm md:text-base font-medium'>${product.amountOnCart * product.price}</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='font-medium text-md md:text-lg'>Delivery Method</p>
            <div className='flex justify-between'>
              <p className='text-sm md:text-base text-black text-opacity-80'>{deliveryMethod}</p>
              <p className='text-sm md:text-base font-medium'>${deliveryFee()}</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='font-medium text-md md:text-lg'>Payment Method</p>
            <p className='text-sm md:text-base text-black text-opacity-80'>{paymentMethod}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='font-medium text-md md:text-lg'>Total Payment</p>
            <p className='font-bold text-xl'>${(product.amountOnCart * product.price) + deliveryFee()}</p>
          </div>
        </div>
        <div className='flex justify-end lg:justify-normal'>
          <Button
            borderStyle="border-2 border-transparent hover:border-red-700"
            bgColorStyle="bg-red-700 hover:bg-transparent"
            colorStyle="text-white hover:text-red-700"
            text="MAKE ORDER"
          />
        </div>
      </form>
    </section>
  )
};

export default PaymentInformation;