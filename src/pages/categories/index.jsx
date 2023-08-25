import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductSection from '../home/ProductSection';
import { useSelector } from 'react-redux';
import { selectExistingCategories } from '../../redux/products/productsSlice';

const CategoriesPage = () => {
  const { category } = useParams();

  const navigate = useNavigate();

  const existingCategories = useSelector(selectExistingCategories);

  const [categoryNavTitle, setCategoryNavTitle] = useState('');
  
  const [productSection, setProductSection] = useState();
  
  useEffect(() => {
    const isCategoryExist = existingCategories.find((existingCategory) => existingCategory === category);

    if (!isCategoryExist) {
      navigate('/');
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
          {existingCategories.map((existingCategory, index) => (
            <li key={index}><Link to={`/categories/${existingCategory}`} className='border-2 px-2 py-1 hover:border-black transition delay-75'>{existingCategory.charAt(0).toUpperCase() + existingCategory.slice(1)}</Link></li>
          ))}
        </ul>
      </section>
      {productSection}
    </>
  )
};

export default CategoriesPage;