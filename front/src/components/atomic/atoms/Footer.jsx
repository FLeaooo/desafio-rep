import React from 'react';
import Logo from '@/components/atomic/atoms/Logo'

const Footer = () => {
 return (
    <div className="flex justify-between items-center">
      <div className="mr-4">
        <Logo size={100}/>
      </div>
      <div className="text-center mt-6 text-gray-500 me-3 pe-3">
        © 2022-2022 Construindo Patrimônios
      </div>
    </div>
 );
};

export default Footer;
