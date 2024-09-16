import React from "react";
import HeaderTable from '@/components/atomic/atoms/HeaderTable';
import HeaderPage from '@/components/atomic/molecules/HeaderPage';
import InfoUser from '@/components/atomic/molecules/InfoUser';


const Contracts = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">

      <HeaderPage />

      <InfoUser />

      <HeaderTable name="Dados da Nota Fiscal" />

      {/* Header Contratos vinculados */}
      <div className="mt-1 mx-8">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Nome do Contrato</th>
              <th className="border px-4 py-2">Código do Contrato</th>
              <th className="border px-4 py-2">Retenção Técnica</th>
              <th className="border px-4 py-2">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemplo de linhas */}
            {[
              { name: "Título do primeiro contrato de exemplo", code: "11002200-01", retention: "5%" },
              { name: "Título do segundo contrato de exemplo", code: "11002200-01", retention: "10%" },
              { name: "Título do terceiro contrato de exemplo", code: "11002200-01", retention: "5%" },
              { name: "Título do quarto contrato de exemplo", code: "11002200-01", retention: "15%" },
              { name: "Título do quinto contrato de exemplo", code: "11002200-01", retention: "5%" },
              { name: "Título do sexto contrato de exemplo", code: "11002200-01", retention: "15%" },
              { name: "Título do sétimo contrato de exemplo", code: "11002200-01", retention: "5%" },
              { name: "Título do oitavo contrato de exemplo", code: "11002200-01", retention: "10%" },
            ].map((contract, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <td className="border px-4 py-2">{contract.name}</td>
                <td className="border px-4 py-2 text-center">{contract.code}</td>
                <td className="border px-4 py-2 text-center bg-blue-400">{contract.retention}</td>
                <td className="border px-4 py-2 text-center">
                  <button className="text-blue-500 hover:underline">🔍</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botões de navegação */}
      <div className="flex justify-end mt-6 mx-8 mb-5">
        <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg mx-3">
          Anterior
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg">
          Próximo
        </button>
      </div>

    </div>
  );
};

export default Contracts;

