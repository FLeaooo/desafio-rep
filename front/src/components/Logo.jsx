import React from 'react';
import logo from '@/assets/logo.png';

const Logo = () => {
  return (
    <div className="bg-blue-800 inline-block m-5 p-2 select-none">
      <img src={logo} alt="Logo" className="w-[140px]" />
    </div>
  );
};

export default Logo;

