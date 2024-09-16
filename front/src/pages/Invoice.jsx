import React from 'react';
import { useForm } from 'react-hook-form';
import Logo from '@/components/atomic/atoms/Logo'

const Invoice = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white shadow-md rounded-lg">

      {/* Header */}
      <div className="flex justify-between p-1 items-center w-full">
        <Logo />
        <h1 className="font-bold text-4xl text-center flex-1">
          Pagamento de Fornecedor
        </h1>
      </div>

      {/* Info user */}
      <div className="border-[1.5px] border-red-400 rounded-md p-4 mx-8 mt-2 flex justify-between">
        <div>
          <p className="font-semibold">
            Razão Social: <span className="font-normal">Razão Social do Fornecedor Logado</span>
          </p>
          <p className="font-semibold">
            Nome Fantasia: <span className="font-normal">Nome Fantasia do Fornecedor Logado</span>
          </p>
        </div>
        <div>
          <p className="font-semibold">
            CNPJ: <span className="font-normal">00.000.000/0000-00</span>
          </p>
        </div>
      </div>

      {/* Header Contratos vinculados */}
      <div className="border-[1.5px] border-red-400 rounded-md mt-4 mx-8 py-2">
        <h2 className="text-center font-semibold">Dados da nota fiscal</h2>
      </div>


      <div className="border-[1.5px] border-red-400 mb-6 mt-4 rounded-md mx-8 p-4">
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
            <label className="block text-sm font-medium text-gray-700">Número da Nota</label>
            <input {...register('noteNumber', { required: true })}
              type="number"
              className={'mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md ${erros?.name ? "input-error" : " "}'} />
              {errors?.noteNumber?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">Número da nota é obrigatório</p>
              )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Data de Emissão</label>
            <input type="date" 
              {...register('issueDate', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
              {errors?.issueDate?.type === "required" && (
                <p className="text-red-600 text-sm mt-1"> Data de emissão é obrigatório</p>
              )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Data de Vencimento</label>
            <input type="date" {...register('dueDate')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Valor</label>
          <input {...register('value')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="R$ 159,26" />
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Retenção de Impostos</h3>
          <div className="grid grid-cols-6 gap-4 mt-2">
            {['ISSQN', 'IRRF', 'CSLL', 'COFINS', 'INSS', 'PIS'].map((imposto) => (
              <div key={imposto}>
                <label className="block text-sm font-medium text-gray-700">{imposto}</label>
                <input {...register(imposto.toLowerCase())} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Retenção Técnica</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Valor</label>
              <input {...register('technicalRetentionValue')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="R$ 23,85" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Percentual</label>
              <input {...register('technicalRetentionPercentage')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="15" />
            </div>
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
export default Invoice;
