import React from 'react';

const InfoUser = () => {
  return (
    <div className="border-2 border-red-400 rounded-md p-4 mx-8 mt-2 flex justify-between">
      <div>
        <p className="font-semibold">
          Razão Social: <span className="font-normal">Razão Social do Fornecedor Logado</span>
        </p>
        <p className="font-semibold">
          Nome Fantasia: <span className="font-normal">Nome Fantasia do Fornecedor Logado</span>
        </p>
      </div>
      <div>
        <p className="font-semibold">
          CNPJ: <span className="font-normal">00.000.000/0000-00</span>
        </p>
      </div>
    </div>
  )
}

export default InfoUser;
