import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full px-4 lg:px-24 bg-black text-white'>
      <div className='flex'>
        <Link to="/" className='text-lg md:text-2xl font-bold'>IHKELA!</Link>
      </div>
      <ul className='flex gap-5 md:gap-10 font-semibold text-sm md:text-base'>
        <li><Link to="/categories/all">Categories</Link></li>
        <li><Link to="/my-cart">My Cart</Link></li>
      </ul>
    </nav>
  )
};

export default Navbar;