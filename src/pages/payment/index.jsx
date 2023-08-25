import React from 'react'
import Button from '../../components/elements/button';

const PaymentPage = () => {
  return (
    <>
      <section className='flex flex-col gap-4'>
        <h1 className='text-xl md:text-3xl font-bold'>Payment Page</h1>
        <form action="" className='grid lg:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <h2 className='font-medium text-md md:text-lg'>Payment Form</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="name" className="text-sm md:text-base">Name:</label>
                <input id='name' type="text" className='border-2 border-gray-200 focus:border-black px-2 py-1'/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="email" className="text-sm md:text-base">Email:</label>
                <input id='email' type="email" className='border-2 border-gray-200 focus:border-black px-2 py-1'/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="phone" className="text-sm md:text-base">Phone:</label>
                <input id='phone' type="number" className='border-2 border-gray-200 focus:border-black px-2 py-1'/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="address" className="text-sm md:text-base">Address:</label>
                <textarea name="address" id="address" className='border-2 border-gray-200 focus:border-black px-2 py-1 resize-none'></textarea>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="deliveryMethod" className="text-sm md:text-base">Delivery Method</label>
                <select name="deliveryMethod" id="deliveryMethod" className='border-2 border-gray-200 focus:border-black px-2 py-1'>
                  <option value="" className='text-sm md:text-base'>-- Select delivery method --</option>
                  <option value="regular" className='text-sm md:text-base'>Regular</option>
                  <option value="cargo" className='text-sm md:text-base'>Cargo</option>
                  <option value="nextDay" className='text-sm md:text-base'>Next Day</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="paymentMethod" className="text-sm md:text-base">Payment Method</label>
                <select name="paymentMethod" id="paymentMethod" className='border-2 border-gray-200 focus:border-black px-2 py-1'>
                  <option value="" className='text-sm md:text-base'>-- Select payment method --</option>
                  <option value="bankTransfer" className='text-sm md:text-base'>Bank Transfer</option>
                  <option value="cashOnDelivery" className='text-sm md:text-base'>Cash On Delivery</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 bg-gray-200 p-4'>
            <div className='flex flex-col'>
              <p className='font-medium text-md md:text-lg'>Payment Details</p>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-black text-opacity-80'>Name</p>
                <p className='text-sm md:text-base'>Brown Drawer</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-black text-opacity-80'>Texture</p>
                <p className='text-sm md:text-base'>Wood</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-black text-opacity-80'>Weight</p>
                <p className='text-sm md:text-base'>18kg</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-black text-opacity-80'>Size</p>
                <p className='text-sm md:text-base'>50cm x 50cm</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-black text-opacity-80'>Price/unit</p>
                <p className='text-sm md:text-base'>$80</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-black text-opacity-80'>Amount on cart</p>
                <p className='text-sm md:text-base'>2</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='font-medium text-md md:text-lg'>Product Total Price</p>
              <p className='text-sm md:text-base text-black text-opacity-80'>Amount on cart x Price/unit</p>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-black text-opacity-80'>2 x $80</p>
                <p className='text-sm md:text-base font-medium'>$560</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='font-medium text-md md:text-lg'>Delivery Fee</p>
              <p className='text-sm md:text-base text-black text-opacity-80'>Delivery Method</p>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-black text-opacity-80'>Regular</p>
                <p className='text-sm md:text-base font-medium'>$10</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='font-medium text-md md:text-lg'>Payment Fee</p>
              <p className='text-sm md:text-base text-black text-opacity-80'>Payment Method</p>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-black text-opacity-80'>Cash On Delivery</p>
                <p className='text-sm md:text-base font-medium'>$0</p>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <p className='font-medium text-md md:text-lg'>Total Payment</p>
              <p className='font-bold text-xl'>$570</p>
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
    </>
  )
};

export default PaymentPage;