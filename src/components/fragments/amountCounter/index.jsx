import React from 'react';
import Button from '../../elements/button';

const AmountCounter = (props) => {
  const { product, counter, decrementCounter, incrementCounter } = props;
  return (
    <div className='flex'>
      <Button
        borderStyle="border-2 border-transparent"
        bgColorStyle="bg-black"
        colorStyle="text-white"
        dimensionStyle="px-3 py-1 w-max"
        text="-"
        onClick={decrementCounter}
        disabled={counter === 1}
      />
      <div className='bg-white w-8 flex justify-center items-center border-2 border-s-0 border-e-0 border-black'>
        <p className='font-bold'>{counter}</p>
      </div>
      <Button
        borderStyle="border-2 border-transparent"
        bgColorStyle="bg-black"
        colorStyle="text-white"
        dimensionStyle="px-3 py-1 w-max"
        text="+"
        onClick={incrementCounter}
        disabled={counter === product.stock}
      />
    </div>
  )
};

export default AmountCounter;