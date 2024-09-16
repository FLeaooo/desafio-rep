import React from 'react';
import Logo from '@/components/atomic/atoms/Logo';

const HeaderPage = ({ flex }) => {
  return (
    <div className={`flex flex-row justify-between p-5 items-center w-full ${flex}`}>
      <Logo />
      <h1 className="font-bold text-4xl text-center flex-1">
          Pagamento de Fornecedor
      </h1>
    </div>
  )
}

export default HeaderPage;
