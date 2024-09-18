import React from 'react';
import HeaderTable from '@/components/atomic/atoms/HeaderTable';
import HeaderPage from '@/components/atomic/molecules/HeaderPage';
import InfoUser from '@/components/atomic/molecules/InfoUser';
import InvoiceForm from '@/components/atomic/organisms/InvoiceForm';
import Footer from '@/components/atomic/atoms/Footer'


const Invoice = () => {
  return (
    <div>

      <HeaderPage />

      <InfoUser />

      <HeaderTable name="Dados da nota fiscal"/>

      <InvoiceForm />

      <Footer />
    </div>
  );

};
export default Invoice;
