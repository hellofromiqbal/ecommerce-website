import React from 'react';
import JumboSection from './JumboSection';
import ProductSection from './ProductSection';
import BannerSection from './BannerSection';

const HomePage = () => {
  return (
    <>
      <JumboSection/>
      <ProductSection
        title="New Products"
        category="furnitures"
      />
      <BannerSection/>
      <ProductSection
        title="Trending Products"
        category="electronics"
      />
      <BannerSection reversed={true}/>
    </>
  )
};

export default HomePage;