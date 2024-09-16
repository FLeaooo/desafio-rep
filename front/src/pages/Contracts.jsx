import React from "react";
import HeaderTable from '@/components/atomic/atoms/HeaderTable';
import HeaderPage from '@/components/atomic/molecules/HeaderPage';
import InfoUser from '@/components/atomic/molecules/InfoUser';
import ContractsTable from '@/components/atomic/organisms/ContractsTable'


const Contracts = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">

      <HeaderPage />

      <InfoUser />

      <HeaderTable name="Contratos vinculados" />

      <ContractsTable />

    </div>
  );
};

export default Contracts;

