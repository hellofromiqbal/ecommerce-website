import React from 'react';

const Button = (props) => {
  const { text } = props;
  return (
    <button className='bg-black text-white w-max px-3 py-2 font-semibold text-sm md:text-base'>{text}</button>
  )
};

export default Button;