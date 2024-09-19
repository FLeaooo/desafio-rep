import React, { useContext, useState } from 'react';
import AppContext from '@/contexts/AppContext'
import { useNavigate } from "react-router-dom";


const ContractsTable = () => {
  const { contracts } = useContext(AppContext);

  const [selectedContract, setSelectedContract] = useState(null);

  const navigate = useNavigate();

  const [idContract, setIdContract] = useState(0);

  const handleCheckbox = (index) => {
    setSelectedContract(index);
    setIdContract(contracts[index].id)
  }

  const handleButtonNext = () => {
    navigate(`/invoice/${idContract}`)
  }

  const handleButtonPrev = () => {
    navigate("/")
  }

  const detailsContract = (index) => {
    navigate(`/details/${contracts[index].id}`)
  }

  return (
    <div>
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
            {contracts.map((contract, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <div className="flex w-full border px-4 py-2 ">
                  <input type="checkbox"
                          checked={selectedContract === index}
                          onChange={() => handleCheckbox(index)}/>
                  <td className="ps-3">{contract.name}</td>
                </div>
                <td className="border px-4 py-2 text-center">{contract.id}</td>
                <td className="border px-4 py-2 text-center bg-blue-800 text-white">{contract.retention}%</td>
                <td className="border px-4 py-2 text-center">
                  <button className="text-blue-500 hover:underline" onClick={() => detailsContract(index)}>🔍</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6 mx-8 mb-5">
        <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg mx-3 w-[200px]"
                onClick={handleButtonPrev}>
          Anterior
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg w-[200px]"
                onClick={handleButtonNext}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default ContractsTable;
