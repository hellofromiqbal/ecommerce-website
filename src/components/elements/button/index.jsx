import React from 'react';

const Button = (props) => {
  const {
    borderStyle = 'border-2 border-black hover:border-transparent',
    bgColorStyle = 'bg-transparent hover:bg-black',
    colorStyle = 'text-black hover:text-white',
    textStyle = 'text-sm md:text-base',
    fontStyle = 'font-semibold',
    paddingStyle = 'p-3',
    text,
    onClick = () => {}
  } = props;
  return (
    <button
      className={`${paddingStyle} ${borderStyle} ${bgColorStyle} ${colorStyle} ${textStyle} ${fontStyle} transition delay-75`}
      onClick={onClick}
    >
      {text}
    </button>
  )
};

export default Button;