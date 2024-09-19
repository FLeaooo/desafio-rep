import React from 'react';

const HeaderContract = ({ code, name }) => {
  return (
      <div>
        <div className="flex justify-around items-center">
          <p className="font-semibold">
            Código do contrato: <span className="font-normal">{code}</span>
          </p>
          <p className="font-semibold">
            Título: <span className="font-normal">{name}</span>
          </p>
        </div>
      </div>
  )
}

export default HeaderContract;
