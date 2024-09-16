import React from 'react';
import HeaderTable from '@/components/atomic/atoms/HeaderTable';
import HeaderPage from '@/components/atomic/molecules/HeaderPage';
import InfoUser from '@/components/atomic/molecules/InfoUser';
import InvoiceForm from '@/components/atomic/organisms/InvoiceForm';


const Invoice = () => {
  return (
    <div className="p-2 bg-white shadow-md rounded-lg">

      <HeaderPage />

      <InfoUser />

      <HeaderTable name="Dados da nota fiscal"/>

      <InvoiceForm />
    </div>
  );

};
export default Invoice;
