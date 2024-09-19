import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AppContext from '@/contexts/AppContext';
import { sendData } from '@/api/invoiceApi'
import { useNavigate } from "react-router-dom";

// components
import HeaderContract from '@/components/atomic/molecules/HeaderContract'
import Input from '@/components/atomic/molecules/Input';
import '@/components/atomic/organisms/InvoiceForm.css';
import FileUpload from '@/components/atomic/molecules/FileUpload';

const InvoiceForm = () => {
  // Formulario
  const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const onSubmit = async (data) => {

    data.invoiceNumber = parseInt(data.invoiceNumber);
    data.retentionAmount = valueRetention;
    data.percentage = selectedContract.retention;
    data.contractId = parseInt(contractId, 10);
    console.log(data)

    try {
      const response = await sendData(data);
      if (response.status == 201) {
        console.log(`Solicitação ${response.data.id} foi enviada com sucesso.`);
        navigate(`/details/${response.data.authorId}`)
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Contrato e nota fiscal
  const [selectedContract, setSelectedContract] = useState(null);
  const { contractId } = useParams();
  const { user, contracts } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const foundContract = contracts.find(contract => contract.id.toString() === contractId);
    if (contracts && contractId) {
      setSelectedContract(foundContract);
    }
  }, [contracts, contractId]);

  useEffect(() => {
    if (selectedContract && selectedContract.invoice.id){
      navigate(`/details/${selectedContract.invoice.authorId}`)
    }
  }, [selectedContract])

  // Calcular valor percentual
  const [valueRetention, setValueRetention] = useState(0);
  const [calculatedRetention, setCalculatedRetention] = useState(0);
  const inputValue = watch('amount');

  useEffect(() => {
    if (selectedContract) {
      if (inputValue === undefined){
        setCalculatedRetention(selectedContract.invoice.amount * selectedContract.retention / 100);
      } else {
        setCalculatedRetention(inputValue * selectedContract.retention / 100);
      }
      setValueRetention(calculatedRetention);
    }
  }, [inputValue, selectedContract, []]);

  // Botao anterior
  const handleButtonPrev = () => {
    navigate(`/contracts/${user.cnpj}`)
  }



  if (!selectedContract) {
    return <p>Carregando contrato...</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="red-div">
        <HeaderContract code={selectedContract.contractCode} name={selectedContract.name}/>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <Input register={register} name="invoiceNumber" label="Número" type="number" errors={errors} value={selectedContract.invoice.invoiceNumber} />
          </div>

          <div>
            <Input register={register} name="issueDate" label="Data de emissão" type="date" errors={errors} value={new Date(selectedContract.invoice.issueDate).toISOString().split('T')[0]} />
          </div>

          <div>
            <Input register={register} name="dueDate" label="Data de vencimento" type="date" errors={errors} value={new Date(selectedContract.invoice.dueDate).toISOString().split('T')[0]} />
          </div>
        </div>

        <div className="mt-4">
          <Input register={register} name="amount" label="Valor" type="number" errors={errors} value={selectedContract.invoice.amount} />
        </div>

        <div className="mt-6">
          <div className="flex">
            <input type="checkbox" name="checkboxTax" checked={isChecked} onChange={handleCheckboxChange} />
            <h3 className="text-lg font-semibold ps-3">Retenção de Impostos</h3>
          </div>

          <div className="relative border-[1.5px] border-red-400 mb-6 mt-4 rounded-md p-4">
            <h3 className="absolute -top-3 bg-white px-3 text-bold">Dados</h3>
            <div className="grid grid-cols-6 gap-4 mt-2">
              {['ISSQN', 'IRRF', 'CSLL', 'COFINS', 'INSS', 'PIS'].map((tax) => (
                <div key={tax}>
                  <Input register={register} name={tax.toLowerCase()} label={tax} type="number" errors={errors} requiredState={isChecked} value={selectedContract.invoice[tax.toLowerCase()]} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex">
            <h3 className="text-lg font-semibold ps-3">Retenção Técnica</h3>
          </div>

          <div className="relative border-[1.5px] border-red-400 mb-6 mt-4 rounded-md p-4">
            <h3 className="absolute -top-3 bg-white px-3 text-bold">Dados</h3>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
              <p className="font-semibold"> Valor:</p>
                <span className="font-normal input disabled-input">R${valueRetention}</span>
              </div>
              <div>
                <p className="font-semibold"> Percentual:</p>
                  <span className="font-normal input disabled-input">{selectedContract.retention}%</span>
              </div>
            </div>
          </div>
          <FileUpload register={register} setValue={setValue}/>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button type="button" className="px-4 py-2 bg-yellow-500 text-white rounded w-[200px] mx-3" onClick={handleButtonPrev}>Anterior</button>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded w-[200px] mx-3">Próximo</button>
      </div>
    </form>
  );
};

export default InvoiceForm;

