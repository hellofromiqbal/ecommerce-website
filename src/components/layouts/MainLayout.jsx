import React from 'react';
import Navbar from '../elements/navbar';
import useScrollToTop from '../../hooks/useScrollToTop';

const MainLayout = (props) => {
  const {children} = props;
  useScrollToTop();
  return (
    <>
      <header className='flex h-14 w-full fixed top-0 left-0 right-0 z-10 shadow-md'>
        <Navbar/>
      </header>
      <main className='mt-14 h-max md:min-h-screen flex flex-col gap-4 px-4 lg:px-24 py-4'>
        {children}
      </main>
      <footer className='bg-black flex flex-col gap-10 text-white px-4 lg:px-24 py-4'>
        <ul className='grid grid-cols-3 gap-2 text-center font-semibold text-sm md:text-base'>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Store Location</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <small className='text-center'>Created by Muhammad Iqbal</small>
      </footer>
    </>
  )
};

export default MainLayout;