import React from 'react';

const ProductList = (props) => {
  const { children } = props;
  return (
    <div className='grid md:grid-cols-4 gap-4'>
      { children }
    </div>
  )
};

export default ProductList;