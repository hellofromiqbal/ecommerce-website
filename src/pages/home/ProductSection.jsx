import React from 'react';
import ProductList from '../../components/fragments/productList';
import ProductCard from '../../components/elements/productCard';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../redux/products/productsSlice';

const ProductSection = (props) => {
  const { title, category } = props;

  const allProducts = useSelector(selectAllProducts);

  const products = category === 'all' ? allProducts : allProducts.filter((product) => product.category === category);
  
  return (
    <section className='flex flex-col gap-4'>
      {title && <h2 className='text-lg md:text-2xl font-semibold'>{title}</h2>}
      <ProductList>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            url={`/categories/${item.category}/${item.id}`}
            imgUrl={item.imgUrl}
            name={item.name}
            price={item.price}
          />
        ))}
      </ProductList>
    </section>
  )
};

export default ProductSection;