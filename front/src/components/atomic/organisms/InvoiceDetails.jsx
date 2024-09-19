import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '@/contexts/AppContext';
import HeaderContract from '@/components/atomic/molecules/HeaderContract'
import { useNavigate } from "react-router-dom";
import { fetchContracts } from '@/api/contractsApi';

const InvoiceDetails = () => {
  const [selectedContract, setSelectedContract] = useState(null);
  const { contractId } = useParams();
  const { user, contracts, setContracts, updateAllInvoices } = useContext(AppContext);
  const navigate = useNavigate();

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

  useEffect(() => {
    const foundContract = contracts.find(contract => contract.id.toString() === contractId);
    if (contracts && contractId) {
      setSelectedContract(foundContract);
    }
    console.log(selectedContract)
  }, [contracts, contractId]);

  const handleButtonPrev = () => {
    navigate(`/contracts/${user.cnpj}`)
  }

  if (!selectedContract) {
    return <p>Carregando contrato...</p>;
  }

  return (
    <div>
      <div className="red-div invoice-details">
        <HeaderContract code={selectedContract.contractCode} name={selectedContract.name}/>
        <h3 className="bold bg-gray-300 rounded w-[50%] p-3">Nota Fiscal</h3>
        <p><strong>Número:</strong> {selectedContract.invoice.invoiceNumber}</p>
        <p><strong>Data de Emissão:</strong> {new Date(selectedContract.invoice.issueDate).toISOString().split('T')[0]}</p>
        <p><strong>Data de Vencimento:</strong> {new Date(selectedContract.invoice.dueDate).toISOString().split('T')[0]}</p>
        <p><strong>Valor:</strong> R$ {selectedContract.invoice.amount}</p>
        <p><strong>PdfUrl:</strong> {selectedContract.invoice.pdfUrl}</p>
        <h3 className="bold bg-gray-300 rounded w-[50%] p-3">Retenção Tecnica</h3>
        <p><strong>Percentual:</strong> {selectedContract.retention}%</p>
        <p><strong>Valor Retido:</strong> R$ {(selectedContract.invoice.amount * selectedContract.retention / 100).toFixed(2)}</p>
      </div>

      <div className="flex justify-end">
        
      <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded w-[200px] mx-3" onClick={handleButtonPrev}>Contratos</button>

      </div>
    </div>
  );
};

export default InvoiceDetails;

