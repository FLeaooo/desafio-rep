import React, { useState }from 'react';
import { useForm } from 'react-hook-form';
import '@/components/atomic/organisms/InvoiceForm.css'
import Input from '@/components/atomic/molecules/Input'

const InvoiceForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">

      <div className="red-div">
        <div className="flex justify-around items-center">
          <p className="font-semibold">
            Codigo do contrato: <span className="font-normal">11002200-01</span>
          </p>
          <p className="font-semibold">
            Titulo: <span className="font-normal">Título do segundo contrato de exemplo</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <Input register={register} name="noteNumber" label="Numero" type="number" errors={errors}/>
          </div>

          <div>
            <Input register={register} name="issueDate" label="Data de emissão" type="date" errors={errors}/>
          </div>

          <div>
            <Input register={register} name="dueDate" label="Data de vencimento" type="date" errors={errors}/>
          </div>
        </div>

        <div className="mt-4">
          <Input register={register} name="value" label="Valor" type="number" errors={errors}/>
        </div>

        <div className="mt-6">
            <div className="flex">
              <input type="checkbox" name="checkboxTax" checked={isChecked} onChange={handleCheckboxChange}/>
              <h3 className="text-lg font-semibold ps-3">Retenção de Impostos</h3>
            </div>
          <div className="relative border-[1.5px] border-red-400 mb-6 mt-4 rounded-md p-4">
            <h3 className="absolute -top-3 bg-white px-3 text-bold">Dados</h3>
            <div className="grid grid-cols-6 gap-4 mt-2">
              {['ISSQN', 'IRRF', 'CSLL', 'COFINS', 'INSS', 'PIS'].map((tax) => (
                <div key={tax}>
                  <Input register={register} name={tax.toLowerCase()} label={tax} type="number" errors={errors} requiredState={isChecked} disabled={!isChecked}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Retenção Técnica</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <p className="font-semibold">
              Valor (calculado automaticamente): <span className="font-normal">R$ 100</span>
            </p>
            <p className="font-semibold">
              Percentual (com base no contrato): <span className="font-normal">15%</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button type="button" className="px-4 py-2 bg-yellow-500 text-white rounded">Anterior</button>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Próximo</button>
      </div>
    </form>
  );
};

export default InvoiceForm;
