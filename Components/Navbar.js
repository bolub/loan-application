import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const openLink = (url) => {
    if (typeof window !== 'undefined') {
      window.open(url);
    }
  };

  return (
    <nav
      className=' px-5 md:px-16 mt-5 py-6 sticky top-0 flex bg-white'
      style={{ maxHeight: '100px' }}
    >
      <h1 className='font-bold text-blue-500 text-md uppercase'>
        Loan Application
      </h1>
    </nav>
  );
};

export default Navbar;
