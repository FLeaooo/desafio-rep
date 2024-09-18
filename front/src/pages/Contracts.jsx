import React, { useEffect, useContext, useState } from 'react';

import HeaderTable from '@/components/atomic/atoms/HeaderTable';
import HeaderPage from '@/components/atomic/molecules/HeaderPage';
import InfoUser from '@/components/atomic/molecules/InfoUser';
import ContractsTable from '@/components/atomic/organisms/ContractsTable'

import AppContext from '@/contexts/AppContext';
import { fetchContracts } from '@/api/contractsApi';


const Contracts = () => {
  const { user, setContracts, updateAllInvoices } = useContext(AppContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContracts = async () => {
      const cnpjString = user.cnpj.toString();
      try {
        const response = await fetchContracts(cnpjString);
        setContracts(response.data);
        updateAllInvoices(response.data);
      } catch (err) {
        setError("Erro ao carregar contratos");
        console.error(err);
      }
    };

    loadContracts();
  }, [setContracts]);

  if (error) return <p>{error}</p>;

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

