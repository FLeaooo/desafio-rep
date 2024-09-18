import React, { useContext } from 'react';
import AppContext from '@/contexts/AppContext'

const InfoUser = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="red-div mt-2 flex justify-between">
      <div>
        <p className="font-semibold">
          Razão Social: <span className="font-normal">{user.businessName}</span>
        </p>
        <p className="font-semibold">
          Nome Fantasia: <span className="font-normal">{user.tradingName}</span>
        </p>
      </div>
      <div>
        <p className="font-semibold">
          CNPJ: <span className="font-normal">{user.cnpj}</span>
        </p>
      </div>
    </div>
  )
}

export default InfoUser;
