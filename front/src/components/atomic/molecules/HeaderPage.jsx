import React from 'react';
import Logo from '@/components/atomic/atoms/Logo';

const HeaderPage = () => {
  return (
    <div className="flex justify-between p-5 items-center w-full">
      <Logo />
      <h1 className="font-bold text-4xl text-center flex-1">
          Pagamento de Fornecedor
      </h1>
    </div>
  )
}

export default HeaderPage;
