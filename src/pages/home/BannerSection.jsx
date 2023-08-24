import React from 'react';
import Button from '../../components/elements/button';

const BannerSection = (props) => {
  const { reversed } = props;
  return (
    <section className={`flex ${reversed? 'flex-row-reverse' : 'flex-row'} bg-gray-200 my-10 h-96`}>
      <div className='basis-full md:basis-1/2 flex flex-col gap-4 justify-center px-10'>
        <h3 className='text-lg md:text-2xl font-semibold'>Elegant House Furniture</h3>
        <p className='text-black text-opacity-80'>IHKELA! products are all made to standard sizes so that you can mix and match them as you want.</p>
        <Button
          borderStyle="border-2 border-transparent hover:border-black"
          bgColorStyle="bg-black hover:bg-transparent"
          colorStyle="text-white hover:text-black"
          text="SHOP NOW"
          onClick={() => {}}
        />
      </div>
      <div className='basis-0 md:basis-1/2 bg-[url("/img/ctaSection/ctaImg1.jpg")] bg-cover bg-center'></div>
    </section>
  )
};

export default BannerSection;