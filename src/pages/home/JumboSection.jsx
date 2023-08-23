import React from 'react';
import JumboCard from '../../components/elements/jumboCard';

const JumboSection = () => {
  const jumboCards = [
    { title: 'Furniture', url: '/categories/furnitures', imgUrl: '/img/jumbotron/jumbo-furniture.jpg' },
    { title: 'Beauty', url: '/categories/beauty', imgUrl: '/img/jumbotron/jumbo-beauty.jpg' },
    { title: 'Apparel', url: '/categories/apparel', imgUrl: '/img/jumbotron/jumbo-apparel.jpg' },
    { title: 'Electronics', url: '/categories/electronics', imgUrl: '/img/jumbotron/jumbo-electronics.jpg' }
  ];

  return (
    <section className='flex flex-col md:flex-row gap-4 h-[40rem] md:h-[35rem]'>
      <div className='basis-1/2 md:basis-2/3 flex gap-4'>
        {jumboCards.slice(0, 2).map((item, index) => (
          <JumboCard
            key={index}
            title={item.title}
            url={item.url}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
      <div className='basis-1/2 md:basis-1/3 flex md:flex-col gap-4'>
        {jumboCards.slice(2).map((item, index) => (
          <JumboCard
            key={index}
            title={item.title}
            url={item.url}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </section>
  )
};

export default JumboSection;