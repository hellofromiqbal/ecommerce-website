import React from 'react';
import JumboSection from './JumboSection';
import ProductSection from './ProductSection';
import BannerSection from './BannerSection';
import MainLayout from '../../components/layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  )
};

export default HomePage;