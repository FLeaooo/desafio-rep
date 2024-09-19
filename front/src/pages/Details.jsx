import React from 'react';
import HeaderTable from '@/components/atomic/atoms/HeaderTable';
import HeaderPage from '@/components/atomic/molecules/HeaderPage';
import InfoUser from '@/components/atomic/molecules/InfoUser';
import InvoiceDetails from '@/components/atomic/organisms/InvoiceDetails';
import Footer from '@/components/atomic/atoms/Footer'

const Invoice = () => {
  return (
    <div>

      <HeaderPage />

      <InfoUser />

      <HeaderTable name="Detalhes do contrato"/>

      <InvoiceDetails />

      <Footer />
    </div>
  );

};
export default Invoice;
