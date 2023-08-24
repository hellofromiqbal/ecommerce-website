import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductSection from '../home/ProductSection';

const CategoriesPage = () => {
  const { category } = useParams();

  const existingCategories = ['all', 'furnitures', 'electronics', 'lamps', 'apparel', 'beauty'];
  
  const [categoryNavTitle, setCategoryNavTitle] = useState('');
  
  const [productSection, setProductSection] = useState();
  
  useEffect(() => {
    const isCategoryExist = existingCategories.find((existingCategory) => existingCategory === category);

    if (!isCategoryExist) {
      return window.location.href = '/';
    } else {
      setCategoryNavTitle(category[0].toUpperCase() + category.slice(1));
      setProductSection(<ProductSection category={category}/>);
    }
  }, [category]);
  
  return (
    <>
      <section className='flex flex-col gap-4 items-center'>
        <h2 className='text-lg md:text-2xl font-semibold'>{categoryNavTitle}</h2>
        <ul className='flex gap-4 flex-wrap'>
          <li><Link to="/categories/all" className='border-2 px-2 py-1 hover:border-black transition delay-75'>All</Link></li>
          <li><Link to="/categories/furnitures" className='border-2 px-2 py-1 hover:border-black transition delay-75'>Furnitures</Link></li>
          <li><Link to="/categories/electronics" className='border-2 px-2 py-1 hover:border-black transition delay-75'>Electronics</Link></li>
          <li><Link to="/categories/lamps" className='border-2 px-2 py-1 hover:border-black transition delay-75'>Lamps</Link></li>
          <li><Link to="/categories/apparel" className='border-2 px-2 py-1 hover:border-black transition delay-75'>Apparel</Link></li>
          <li><Link to="/categories/beauty" className='border-2 px-2 py-1 hover:border-black transition delay-75'>Beauty</Link></li>
        </ul>
      </section>
      {productSection}
    </>
  )
};

export default CategoriesPage;