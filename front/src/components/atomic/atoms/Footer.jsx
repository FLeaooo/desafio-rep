import React from 'react';
import Logo from '@/components/atomic/atoms/Logo'

const Footer = () => {
 return (
    <div className="flex items-center">
      <div className="mr-4">
        <Logo />
      </div>
      <div className="text-center mt-6 text-gray-500">
        © 2022-2022 Construindo Patrimônios
      </div>
    </div>
 );
};

export default Footer;
