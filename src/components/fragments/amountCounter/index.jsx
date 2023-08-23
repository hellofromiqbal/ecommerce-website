import React from 'react';

const AmountCounter = (props) => {
  const { product, counter, decrementCounter, incrementCounter } = props;
  return (
    <div className='flex'>
      <button
        className='px-2 py-0 border-2 border-black font-bold bg-black text-white'
        onClick={decrementCounter}
        disabled={counter === 1}
      >-</button>
      <p className='px-2 py-0 border-y-2 border-black font-bold bg-white'>{counter}</p>
      <button
        className='px-2 py-0 border-2 border-black font-bold bg-black text-white'
        onClick={incrementCounter}
        disabled={counter === product.stock}
      >+</button>
    </div>
  )
};

export default AmountCounter;