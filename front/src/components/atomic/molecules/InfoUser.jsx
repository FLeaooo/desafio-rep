import React, { useContext } from 'react';
import UserContext from '@/contexts/UserContext'

const InfoUser = () => {
  const { cnpj, businessName, tradingName } = useContext(UserContext);

  return (
    <div className="red-div mt-2 flex justify-between">
      <div>
        <p className="font-semibold">
          Razão Social: <span className="font-normal">{businessName}</span>
        </p>
        <p className="font-semibold">
          Nome Fantasia: <span className="font-normal">{tradingName}</span>
        </p>
      </div>
      <div>
        <p className="font-semibold">
          CNPJ: <span className="font-normal">{cnpj}</span>
        </p>
      </div>
    </div>
  )
}

export default InfoUser;
