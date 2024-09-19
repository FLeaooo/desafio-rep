import React from 'react';
import logo from '@/assets/logo.png';

const Logo = ({ size = 200 }) => {
  return (
    <div className={`bg-blue-800 inline-block m-5 p-2 select-none w-[${size}px]`}>
      <img src={logo} alt="Logo"/>
    </div>
  );
};

export default Logo;

