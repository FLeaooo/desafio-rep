import React, { useState } from "react";
import Logo from "@/components/atomic/atoms/Logo"


const Login = () => {
  const [cnpj, setCnpj] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para realizar o login
    console.log("CNPJ:", cnpj);
  };

  return (
    <div className="bg-white w-[60%] h-[70%] rounded-lg shadow-lg text-center">

      <Logo/>
      <h2 className="font-bold text-2xl">PAGAMENTO DE FORNECEDOR</h2>

      <form onSubmit={handleLogin} className="p-6 mx-[80px] mx-auto text-left w-[80%]">
        <div className="mb-4">
          <label htmlFor="cnpj" className="text-gray-700 font-bold mb-2">CNPJ</label>
          <input
            type="text"
            id="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="Digite seu CNPJ"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition duration-300"
          type="submit"
        >
          Acessar
        </button>
      </form>

    </div>
  );
};

export default Login;

