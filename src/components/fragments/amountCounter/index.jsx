import React from 'react';
import Button from '../../elements/button';
import { BiPlus as IconPlus, BiMinus as IconMinus } from 'react-icons/bi';

const AmountCounter = (props) => {
  const { product, counter, decrementCounter, incrementCounter } = props;
  return (
    <div className='flex'>
      <Button
        borderStyle="border-2 border-transparent"
        bgColorStyle="bg-black"
        colorStyle="text-white"
        dimensionStyle="px-2 py-2 w-max"
        text={IconMinus()}
        onClick={decrementCounter}
        disabled={counter === 1}
      />
      <div className='bg-white w-10 flex justify-center items-center border-2 border-s-0 border-e-0 border-black'>
        <p className='font-bold'>{counter}</p>
      </div>
      <Button
        borderStyle="border-2 border-transparent"
        bgColorStyle="bg-black"
        colorStyle="text-white"
        dimensionStyle="px-2 py-2 w-max"
        text={IconPlus()}
        onClick={incrementCounter}
        disabled={counter === product.stock || product.stock < 1}
      />
    </div>
  )
};

export default AmountCounter;