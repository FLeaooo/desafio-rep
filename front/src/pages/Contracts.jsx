import React, { useEffect, useContext, useState } from 'react';

import HeaderTable from '@/components/atomic/atoms/HeaderTable';
import HeaderPage from '@/components/atomic/molecules/HeaderPage';
import InfoUser from '@/components/atomic/molecules/InfoUser';
import ContractsTable from '@/components/atomic/organisms/ContractsTable'
import Footer from '@/components/atomic/atoms/Footer'

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
    <div className="w-[900px]">

      <HeaderPage />

      <InfoUser />

      <HeaderTable name="Contratos vinculados" />

      <ContractsTable />
      
      <Footer />

    </div>
  );
};

export default Contracts;

