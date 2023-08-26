import React from 'react';

const Button = (props) => {
  const {
    borderStyle = 'border-2 border-black hover:border-transparent',
    bgColorStyle = 'bg-transparent hover:bg-black',
    colorStyle = 'text-black hover:text-white',
    textStyle = 'text-sm md:text-base',
    fontStyle = 'font-semibold',
    dimensionStyle = 'p-3 w-max',
    text,
    onClick = () => {},
    disabled = false
  } = props;
  return (
    <button
      className={`${dimensionStyle} ${disabled ? 'border-2 border-black' : borderStyle} ${disabled ? 'bg-gray-400' : bgColorStyle} ${disabled ? 'text-white' : colorStyle} ${textStyle} ${fontStyle} transition delay-75`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
};

export default Button;